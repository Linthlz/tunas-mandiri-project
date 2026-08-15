<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Menjalankan migration — membuat tabel konsultasis.
     */
    public function up(): void
    {
        Schema::create('konsultasis', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone', 20);
            $table->string('email')->nullable();
            $table->string('service');           // nama layanan yang diminati
            $table->text('message')->nullable();  // ceritakan kebutuhan (opsional)
            $table->date('preferred_date')->nullable();
            $table->string('preferred_time')->nullable();
            $table->enum('status', ['baru', 'dihubungi', 'terjadwal', 'selesai', 'batal'])
                  ->default('baru');
            $table->text('admin_notes')->nullable(); // catatan internal admin
            $table->timestamps();
        });
    }

    /**
     * Membatalkan migration — menghapus tabel konsultasis.
     */
    public function down(): void
    {
        Schema::dropIfExists('konsultasis');
    }
};
