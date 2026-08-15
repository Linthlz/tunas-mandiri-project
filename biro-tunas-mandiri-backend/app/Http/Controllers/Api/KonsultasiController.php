<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKonsultasiRequest;
use App\Http\Requests\UpdateKonsultasiRequest;
use App\Http\Resources\KonsultasiResource;
use App\Models\Konsultasi;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class KonsultasiController extends Controller
{
    /**
     * GET /api/konsultasi
     * Menampilkan daftar konsultasi (dipakai di dashboard admin).
     * Mendukung filter ?status=baru dan pencarian ?search=nama
     */
    public function index(Request $request): JsonResponse
    {
        $query = Konsultasi::query()->latest();

        if ($request->filled('status')) {
            $query->where('status', $request->string('status'));
        }

        if ($request->filled('search')) {
            $search = $request->string('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('phone', 'like', "%{$search}%")
                  ->orWhere('service', 'like', "%{$search}%");
            });
        }

        $konsultasi = $query->paginate(10)->withQueryString();

        return response()->json([
            'message' => 'Daftar konsultasi berhasil diambil.',
            'data'    => KonsultasiResource::collection($konsultasi),
            'meta'    => [
                'current_page' => $konsultasi->currentPage(),
                'last_page'    => $konsultasi->lastPage(),
                'total'        => $konsultasi->total(),
            ],
        ]);
    }

    /**
     * POST /api/konsultasi
     * Menyimpan data reservasi baru dari form konsultasi di frontend (publik).
     */
    public function store(StoreKonsultasiRequest $request): JsonResponse
    {
        $konsultasi = Konsultasi::create($request->validated());

        return response()->json([
            'message' => 'Permintaan reservasi berhasil dikirim. Tim kami akan segera menghubungi Anda.',
            'data'    => new KonsultasiResource($konsultasi),
        ], 201);
    }

    /**
     * GET /api/konsultasi/{konsultasi}
     * Menampilkan detail satu data konsultasi.
     */
    public function show(Konsultasi $konsultasi): JsonResponse
    {
        return response()->json([
            'message' => 'Detail konsultasi berhasil diambil.',
            'data'    => new KonsultasiResource($konsultasi),
        ]);
    }

    /**
     * PUT/PATCH /api/konsultasi/{konsultasi}
     * Memperbarui data konsultasi, misalnya mengubah status oleh admin.
     */
    public function update(UpdateKonsultasiRequest $request, Konsultasi $konsultasi): JsonResponse
    {
        $konsultasi->update($request->validated());

        return response()->json([
            'message' => 'Data konsultasi berhasil diperbarui.',
            'data'    => new KonsultasiResource($konsultasi),
        ]);
    }

    /**
     * DELETE /api/konsultasi/{konsultasi}
     * Menghapus data konsultasi.
     */
    public function destroy(Konsultasi $konsultasi): JsonResponse
    {
        $konsultasi->delete();

        return response()->json([
            'message' => 'Data konsultasi berhasil dihapus.',
        ]);
    }
}
