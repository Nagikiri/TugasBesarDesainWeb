<script>
import heroImg from '@/assets/images/HeroImager.jpeg'

export default {
  data() {
    return {
      heroImg
    }
  }
}
</script>

<template>
<!-- Hero Section - Professional Modern Design -->
<div class="relative overflow-hidden bg-white">
  <!-- Background Pattern -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/30 to-white"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full opacity-5">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" stroke="currentColor"/>
      </svg>
    </div>
  </div>

  <div class="relative container mx-auto px-4 lg:px-8 max-w-7xl py-12 lg:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      <!-- Left Content - 7 columns -->
      <div class="lg:col-span-7 space-y-6 lg:space-y-8">
        <!-- Main Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
          Ensiklopedia
          <span class="block text-green-600 mt-2">Hewan Ternak</span>
          <span class="block text-gray-800 mt-2">Lokal Balikpapan</span>
        </h1>

        <!-- Description -->
        <p class="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl">
          Platform informasi lengkap dan terpercaya tentang hewan ternak lokal Balikpapan. 
          Temukan panduan budidaya yang detail, analisis potensi ekonomi terkini, galeri foto hewan ternak berkualitas tinggi, 
          serta informasi harga pasar dan tren penjualan untuk membantu Anda memulai dan mengembangkan usaha peternakan yang menguntungkan. 
          Didukung data akurat dari peternak lokal dan ahli peternakan berpengalaman di Kalimantan Timur.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-2">
          <router-link to="/galeri" 
            class="group inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Jelajahi Sekarang
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
          <router-link to="/paduan-ternak" 
            class="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-green-600 font-bold rounded-xl shadow-md border-2 border-green-100 hover:border-green-200 transition-all duration-300">
            Panduan Lengkap
          </router-link>
        </div>

        <!-- Stats Bar -->
        <div class="grid grid-cols-3 gap-4 pt-6 lg:pt-8 border-t-2 border-green-100">
          <div>
            <div class="text-2xl lg:text-3xl font-bold text-green-600">8.6K+</div>
            <div class="text-xs lg:text-sm text-gray-600 mt-1">Produk Terjual</div>
          </div>
          <div>
            <div class="text-2xl lg:text-3xl font-bold text-green-600">6+</div>
            <div class="text-xs lg:text-sm text-gray-600 mt-1">Jenis Ternak</div>
          </div>
          <div>
            <div class="text-2xl lg:text-3xl font-bold text-green-600">99,9%</div>
            <div class="text-xs lg:text-sm text-gray-600 mt-1">Panduan Akurat</div>
          </div>
        </div>
      </div>

      <!-- Right Image - 5 columns -->
      <div class="lg:col-span-5">
        <div class="rounded-2xl overflow-hidden shadow-xl bg-white">
          <img 
            :src="heroImg" 
            alt="Hewan Ternak Lokal Balikpapan" 
            class="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</div>
</template>