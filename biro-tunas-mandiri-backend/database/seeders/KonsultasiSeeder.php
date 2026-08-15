<?php

namespace Database\Seeders;

use App\Models\Konsultasi;
use Illuminate\Database\Seeder;

class KonsultasiSeeder extends Seeder
{
    /**
     * Menjalankan seeding — mengisi beberapa data contoh untuk testing.
     * Jalankan dengan: php artisan db:seed --class=KonsultasiSeeder
     */
    public function run(): void
    {
        $samples = [
            [
                'name' => 'Ratna Amelia',
                'phone' => '081234567890',
                'email' => 'ratna@example.com',
                'service' => 'Konseling Individu',
                'message' => 'Ingin konsultasi terkait kecemasan yang sering muncul saat bekerja.',
                'status' => 'baru',
            ],
            [
                'name' => 'Dimas & Sari',
                'phone' => '081298765432',
                'email' => null,
                'service' => 'Konseling Pasangan',
                'message' => 'Butuh bantuan komunikasi dengan pasangan.',
                'status' => 'dihubungi',
            ],
            [
                'name' => 'Ibu Wulan',
                'phone' => '081211122233',
                'email' => 'wulan@example.com',
                'service' => 'Psikologi Anak & Remaja',
                'message' => 'Anak saya sering cemas menjelang sekolah.',
                'status' => 'terjadwal',
            ],
        ];

        foreach ($samples as $data) {
            Konsultasi::create($data);
        }
    }
}
