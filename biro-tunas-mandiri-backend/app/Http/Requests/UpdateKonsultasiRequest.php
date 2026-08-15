<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateKonsultasiRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Aturan validasi untuk update data (biasanya dipakai admin,
     * semua field bersifat opsional / "sometimes" agar bisa update sebagian).
     */
    public function rules(): array
    {
        return [
            'name'            => ['sometimes', 'required', 'string', 'max:100'],
            'phone'           => ['sometimes', 'required', 'string', 'max:20'],
            'email'           => ['nullable', 'email', 'max:150'],
            'service'         => ['sometimes', 'required', 'string', 'max:150'],
            'message'         => ['nullable', 'string', 'max:2000'],
            'preferred_date'  => ['nullable', 'date'],
            'preferred_time'  => ['nullable', 'string', 'max:50'],
            'status'          => ['sometimes', Rule::in(['baru', 'dihubungi', 'terjadwal', 'selesai', 'batal'])],
            'admin_notes'     => ['nullable', 'string', 'max:2000'],
        ];
    }
}
