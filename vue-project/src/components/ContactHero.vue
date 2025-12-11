<script setup>
import backContactImage from '@/assets/images/BackPaduan.jpg';
</script>

<template>
  <div class="relative bg-white overflow-hidden">
    <!-- Background Image with Overlay -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${backContactImage})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Hubungi Kami
        </h1>
        <p class="mt-3 text-lg text-gray-200 max-w-2xl mx-auto">
          Kami siap membantu kebutuhan ternak, konsultasi, dan kerja sama.
        </p>
      </div>
    </div>
  </div>
</template>
