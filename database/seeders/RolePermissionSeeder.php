<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Permissions
        $permissions = [
            'create story',
            'view story',
            'manage community room',
            'connect users',
        ];

        foreach ($permissions as $perm) {
            Permission::firstOrCreate(['name' => $perm]);
        }

        // Roles
        $admin   = Role::firstOrCreate(['name' => 'Admin']);
        $talent  = Role::firstOrCreate(['name' => 'Talent']);
        $agent = Role::firstOrCreate(['name' => 'agent']);

        // Assign Permissions
        $admin->givePermissionTo(Permission::all());
        $talent->givePermissionTo(['create story', 'view story', 'connect users']);
        $agent->givePermissionTo(['view story', 'connect users']);
    }
}
