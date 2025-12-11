<template>
  <div class="relative bg-white overflow-hidden">
    <!-- Gambar Background -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
    </div>

    <!-- Konten Utama -->
    <div class="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Galeri Ternak
        </h1>
        <p class="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
          Kumpulan foto hewan ternak dan produk hasil ternak lokal Balikpapan lengkap dengan biodata detail setiap hewan
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import background image
import bgImage from '@/assets/images/BackPaduan.jpg';
</script>