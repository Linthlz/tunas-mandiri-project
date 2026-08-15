<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KonsultasiResource extends JsonResource
{
    /**
     * Mengubah model menjadi array JSON yang dikirim ke frontend.
     */
    public function toArray(Request $request): array
    {
        return [
            'id'             => $this->id,
            'name'           => $this->name,
            'phone'          => $this->phone,
            'email'          => $this->email,
            'service'        => $this->service,
            'message'        => $this->message,
            'preferred_date' => $this->preferred_date?->format('Y-m-d'),
            'preferred_time' => $this->preferred_time,
            'status'         => $this->status,
            'admin_notes'    => $this->when($request->routeIs('konsultasi.show', 'konsultasi.update'), $this->admin_notes),
            'created_at'     => $this->created_at->format('Y-m-d H:i'),
            'updated_at'     => $this->updated_at->format('Y-m-d H:i'),
        ];
    }
}
