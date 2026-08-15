<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    | Ganti file config/cors.php bawaan Laravel dengan isi ini agar
    | frontend React (yang berjalan di domain/port berbeda saat development,
    | misalnya http://localhost:5173) diizinkan memanggil API ini.
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    // Saat development: izinkan origin Vite. Saat production: ganti dengan
    // domain asli website kamu, misalnya 'https://tunasmandiripsikologi.id'
    'allowed_origins' => [
        'http://localhost:5173',
        'http://127.0.0.1:5173',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
