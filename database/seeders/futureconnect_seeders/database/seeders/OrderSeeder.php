<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = DB::table('users')->pluck('id')->all();
        $products = DB::table('products')->get();

        $customers = [
            ['name' => 'Sandrine Mutesi', 'email' => 'sandrine.mutesi@gmail.com', 'phone' => '+250788111222', 'province' => 'Kigali City', 'district' => 'Gasabo', 'sector' => 'Kimironko'],
            ['name' => 'Herve Munyaneza', 'email' => 'herve.munyaneza@gmail.com', 'phone' => '+250788222333', 'province' => 'Kigali City', 'district' => 'Kicukiro', 'sector' => 'Niboye'],
            ['name' => 'Grace Nyiransabimana', 'email' => 'grace.nyiransabimana@gmail.com', 'phone' => '+250728333444', 'province' => 'Southern Province', 'district' => 'Huye', 'sector' => 'Tumba'],
            ['name' => 'Placide Bizimungu', 'email' => 'placide.bizimungu@gmail.com', 'phone' => '+250788444555', 'province' => 'Northern Province', 'district' => 'Musanze', 'sector' => 'Muhoza'],
            ['name' => 'Providence Umuhire', 'email' => 'providence.umuhire@gmail.com', 'phone' => '+250738555666', 'province' => 'Western Province', 'district' => 'Rubavu', 'sector' => 'Gisenyi'],
            ['name' => 'Fiacre Ntagungira', 'email' => 'fiacre.ntagungira@gmail.com', 'phone' => '+250788666777', 'province' => 'Eastern Province', 'district' => 'Rwamagana', 'sector' => 'Kigabiro'],
            ['name' => 'Liliane Iribagiza', 'email' => 'liliane.iribagiza@gmail.com', 'phone' => '+250728777888', 'province' => 'Kigali City', 'district' => 'Nyarugenge', 'sector' => 'Nyamirambo'],
            ['name' => 'Olivier Rugamba', 'email' => 'olivier.rugamba@gmail.com', 'phone' => '+250788888999', 'province' => 'Eastern Province', 'district' => 'Nyagatare', 'sector' => 'Karama'],
            ['name' => 'Esperance Nirere', 'email' => 'esperance.nirere@gmail.com', 'phone' => '+250738999000', 'province' => 'Southern Province', 'district' => 'Muhanga', 'sector' => 'Nyamabuye'],
            ['name' => 'Justin Nsanzimana', 'email' => 'justin.nsanzimana@gmail.com', 'phone' => '+250788000111', 'province' => 'Northern Province', 'district' => 'Gicumbi', 'sector' => 'Byumba'],
        ];

        $paymentMethods = ['momo', 'airtel', 'cash'];
        $statuses = ['completed', 'processing', 'pending', 'completed', 'cancelled', 'completed', 'processing', 'pending', 'completed', 'processing'];

        foreach ($customers as $i => $c) {
            $product = $products[$i % $products->count()];
            $quantity = rand(1, 3);
            $subtotal = $product->price * $quantity;

            $orderId = DB::table('orders')->insertGetId([
                'order_number' => 'FC-2026-' . str_pad($i + 1, 5, '0', STR_PAD_LEFT),
                'user_id' => $userIds[$i % count($userIds)],
                'customer_name' => $c['name'],
                'customer_email' => $c['email'],
                'customer_phone' => $c['phone'],
                'province' => $c['province'],
                'district' => $c['district'],
                'sector' => $c['sector'],
                'cell' => null,
                'shipping_address' => $c['sector'] . ', ' . $c['district'] . ', ' . $c['province'],
                'payment_method' => $paymentMethods[$i % count($paymentMethods)],
                'payment_phone' => $c['phone'],
                'subtotal' => $subtotal,
                'total_amount' => $subtotal,
                'status' => $statuses[$i % count($statuses)],
                'confirmed_at' => $statuses[$i % count($statuses)] === 'completed' ? now() : null,
                'confirmed_by' => $statuses[$i % count($statuses)] === 'completed' ? $userIds[0] : null,
                'notes' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            DB::table('order_items')->insert([
                'order_id' => $orderId,
                'product_id' => $product->id,
                'seller_id' => $product->seller_id,
                'product_name' => $product->name,
                'price' => $product->price,
                'quantity' => $quantity,
                'subtotal' => $subtotal,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
