<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Eric Mugisha',
                'email' => 'mugisha.eric@example.com',
                'role' => 'admin',
            ],
            [
                'name' => 'Aline Umutoni',
                'email' => 'aline.umutoni@example.com',
                'role' => 'user',
            ],
            [
                'name' => 'Jean Claude Nshimiyimana',
                'email' => 'jeanclaude.nshimiyimana@example.com',
                'role' => 'user',
            ],
            [
                'name' => 'Diane Uwase',
                'email' => 'diane.uwase@example.com',
                'role' => 'user',
            ],
            [
                'name' => 'Patrick Habimana',
                'email' => 'patrick.habimana@example.com',
                'role' => 'admin',
            ],
        ];

        foreach ($users as $user) {
            User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'role' => $user['role'],
                'active' => true,
                'password' => Hash::make('password123'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
