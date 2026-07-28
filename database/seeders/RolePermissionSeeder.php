<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        $roles = ['admin', 'talent', 'client'];
        foreach ($roles as $role) {
            DB::table('roles')->insert([
                'name' => $role,
                'guard_name' => 'web',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        $permissions = [
            'manage-users', 'manage-talents', 'manage-categories', 'manage-orders',
            'manage-products', 'manage-events', 'manage-jobs', 'manage-projects',
            'view-dashboard', 'manage-settings',
        ];
        foreach ($permissions as $permission) {
            DB::table('permissions')->insert([
                'name' => $permission,
                'guard_name' => 'web',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        $roleIds = DB::table('roles')->pluck('id', 'name');
        $permissionIds = DB::table('permissions')->pluck('id')->all();

        // Admin role gets all permissions
        foreach ($permissionIds as $permissionId) {
            DB::table('role_has_permissions')->insert([
                'permission_id' => $permissionId,
                'role_id' => $roleIds['admin'],
            ]);
        }

        // Assign a role to each seeded user based on their users.role column
        $users = DB::table('users')->select('id', 'role')->get();
        foreach ($users as $user) {
            $roleName = $user->role === 'admin' ? 'admin' : ($user->role === 'talent' ? 'talent' : 'client');
            DB::table('model_has_roles')->insert([
                'role_id' => $roleIds[$roleName],
                'model_type' => 'App\\Models\\User',
                'model_id' => $user->id,
            ]);
        }
    }
}
