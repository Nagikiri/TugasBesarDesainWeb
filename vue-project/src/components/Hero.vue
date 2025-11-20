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
<!-- Hero Section with Soft Background -->
<div class="bg-gradient-to-br from-green-50 via-emerald-50 to-white py-16 lg:py-24">
  <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
    <!-- Grid Layout: 2 Columns -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- Left Column: Text Content -->
      <div class="space-y-6">
        <!-- Main Title -->
        <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight" 
            style="color: #1A823D; font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif; line-height: 1.2;">
          ENSIKLOPEDIA HEWAN TERNAK LOKAL BALIKPAPAN
        </h1>

        <!-- Description -->
        <p class="text-lg leading-relaxed text-gray-700 text-justify" style="line-height: 1.7;">
          Jelajahi kekayaan hayati peternakan khas dari jantung Kalimantan Timur. 
          Temukan informasi lengkap mengenai Sapi Bali, Ayam Kampung, Itik Alabio, 
          dan berbagai jenis ternak unggulan yang menjadi bagian penting dari ketahanan 
          pangan dan budaya masyarakat Balikpapan.
        </p>

        <!-- Features List -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700">Data Lengkap & Akurat</span>
          </div>
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700">Potensi Ekonomi Tinggi</span>
          </div>
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700">Adaptasi Iklim Tropis</span>
          </div>
          <div class="flex items-start space-x-3">
            <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-gray-700">Budaya Lokal</span>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="pt-4">
          <a href="#overview" 
             class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
             style="background-color: #1A823D;">
            Selengkapnya
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-3 gap-6 pt-8 border-t border-green-200">
          <div class="text-center lg:text-left">
            <div class="text-3xl font-bold text-green-700">15+</div>
            <div class="text-sm text-gray-600 mt-1">Jenis Ternak</div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-3xl font-bold text-green-700">100+</div>
            <div class="text-sm text-gray-600 mt-1">Peternak Lokal</div>
          </div>
          <div class="text-center lg:text-left">
            <div class="text-3xl font-bold text-green-700">50K+</div>
            <div class="text-sm text-gray-600 mt-1">Populasi Ternak</div>
          </div>
        </div>
      </div>

      <!-- Right Column: Hero Image -->
      <div class="relative">
        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
          <!-- Decorative Elements -->
          <div class="absolute -top-4 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div class="absolute -bottom-8 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style="animation-delay: 2s;"></div>
          
          <!-- Main Image -->
          <div class="relative bg-white rounded-3xl overflow-hidden">
            <img 
              :src="heroImg" 
              alt="Hewan Ternak Lokal Balikpapan" 
              class="w-full h-auto object-cover object-center"
              style="aspect-ratio: 4/3;"
            />
            
            <!-- Image Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent"></div>
          </div>
        </div>

        <!-- Decorative Pattern -->
        <div class="absolute -z-10 top-10 right-10 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1A823D" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.9,76.8C26,84.6,9.2,87.6,-6.5,87.2C-22.2,86.8,-36.8,82.9,-49.9,75.3C-63,67.7,-74.6,56.3,-81.8,42.4C-89,28.5,-91.8,12.1,-90.1,-3.7C-88.4,-19.5,-82.2,-34.7,-73.1,-48.4C-64,-62.1,-52,-74.3,-37.8,-81.4C-23.6,-88.5,-7.2,-90.5,6.5,-89.8C20.2,-89.1,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

    </div>
  </div>
</div>
</template>