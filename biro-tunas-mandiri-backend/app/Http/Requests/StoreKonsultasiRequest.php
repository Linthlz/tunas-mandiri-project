<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreKonsultasiRequest extends FormRequest
{
    /**
     * Form ini bisa diakses publik (form reservasi di website),
     * jadi selalu diizinkan.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Aturan validasi untuk data yang masuk dari form konsultasi.
     */
    public function rules(): array
    {
        return [
            'name'           => ['required', 'string', 'max:100'],
            'phone'          => ['required', 'string', 'max:20', 'regex:/^[0-9+\-\s]+$/'],
            'email'          => ['nullable', 'email', 'max:150'],
            'service'        => ['required', 'string', 'max:150'],
            'message'        => ['nullable', 'string', 'max:2000'],
            'preferred_date' => ['nullable', 'date'],
            'preferred_time' => ['nullable', 'string', 'max:50'],
        ];
    }

    /**
     * Pesan error dalam Bahasa Indonesia agar mudah ditampilkan di frontend.
     */
    public function messages(): array
    {
        return [
            'name.required'    => 'Nama lengkap wajib diisi.',
            'phone.required'   => 'Nomor WhatsApp wajib diisi.',
            'phone.regex'      => 'Format nomor WhatsApp tidak valid.',
            'email.email'      => 'Format email tidak valid.',
            'service.required' => 'Silakan pilih layanan yang diminati.',
        ];
    }
}