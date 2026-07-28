<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            ['name' => 'Jean Bosco Habimana', 'email' => 'jean.habimana@futureconnect.rw', 'role' => 'admin', 'is_verified' => 1],
            ['name' => 'Marie Claire Uwimana', 'email' => 'marieclaire.uwimana@futureconnect.rw', 'role' => 'admin', 'is_verified' => 1],
            ['name' => 'Eric Nkurunziza', 'email' => 'eric.nkurunziza@gmail.com', 'role' => 'talent', 'is_verified' => 1],
            ['name' => 'Chantal Mukamana', 'email' => 'chantal.mukamana@gmail.com', 'role' => 'talent', 'is_verified' => 1],
            ['name' => 'Jean de Dieu Ndayisenga', 'email' => 'jeandedieu.ndayisenga@gmail.com', 'role' => 'talent', 'is_verified' => 1],
            ['name' => 'Immaculee Uwase', 'email' => 'immaculee.uwase@gmail.com', 'role' => 'talent', 'is_verified' => 0],
            ['name' => 'Patrick Habyarimana', 'email' => 'patrick.habyarimana@gmail.com', 'role' => 'talent', 'is_verified' => 1],
            ['name' => 'Aline Mukashema', 'email' => 'aline.mukashema@gmail.com', 'role' => 'talent', 'is_verified' => 1],
            ['name' => 'Vincent Twagirayezu', 'email' => 'vincent.twagirayezu@yahoo.com', 'role' => 'user', 'is_verified' => 0],
            ['name' => 'Diane Umutoni', 'email' => 'diane.umutoni@yahoo.com', 'role' => 'user', 'is_verified' => 1],
        ];

        foreach ($users as $u) {
            DB::table('users')->insert([
                'name' => $u['name'],
                'email' => $u['email'],
                'email_verified_at' => now(),
                'password' => Hash::make('password'),
                'role' => $u['role'],
                'active' => 1,
                'is_verified' => $u['is_verified'],
                'trial_used_at' => null,
                'remember_token' => \Illuminate\Support\Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
