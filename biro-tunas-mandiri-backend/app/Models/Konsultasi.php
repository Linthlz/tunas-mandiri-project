<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Konsultasi extends Model
{
    use HasFactory;

    /**
     * Kolom yang boleh diisi secara mass-assignment.
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'service',
        'message',
        'preferred_date',
        'preferred_time',
        'status',
        'admin_notes',
    ];

    /**
     * Casting tipe data otomatis.
     */
    protected $casts = [
        'preferred_date' => 'date',
    ];

    /**
     * Status default untuk data baru.
     */
    protected $attributes = [
        'status' => 'baru',
    ];
}
