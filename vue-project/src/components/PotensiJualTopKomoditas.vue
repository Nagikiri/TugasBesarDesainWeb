<script setup>
// Import gambar untuk tiap komoditas
import bebekImage from '@/assets/images/Bebek.jpeg';
import kelinciImage from '@/assets/images/Kelinci.jpg';
import dombaImage from '@/assets/images/Domba.jpeg';
</script>

<template>
  <div class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Judul Section -->
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-green-800">Potensi Jual Komoditas Teratas</h2>
        <p class="mt-1 text-gray-600">3 komoditas dengan potensi jual tertinggi</p>
      </div>

      <!-- Grid untuk 3 Komoditas Utama -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card Bebek -->
        <div class="rounded-lg bg-white shadow-sm hover:shadow-lg transition transform hover:scale-105 overflow-hidden border border-gray-100">
          <img :src="bebekImage" alt="Bebek Petelur" class="w-full h-44 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Bebek Petelur</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Harga Rata-rata:</span>
                <span class="font-semibold text-gray-900">Rp 52.000/kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Lokasi Utama:</span>
                <span class="font-semibold text-gray-900">Balikpapan Utara</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Tren:</span>
                <span class="px-2 py-1 rounded text-xs bg-green-100 text-green-700 font-semibold">↑ Naik 14%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Kelinci -->
        <div class="rounded-lg bg-white shadow-sm hover:shadow-lg transition transform hover:scale-105 overflow-hidden border border-gray-100">
          <img :src="kelinciImage" alt="Kelinci Pedaging" class="w-full h-44 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Kelinci Pedaging</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Harga Rata-rata:</span>
                <span class="font-semibold text-gray-900">Rp 65.000/kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Lokasi Utama:</span>
                <span class="font-semibold text-gray-900">Balikpapan Selatan</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Tren:</span>
                <span class="px-2 py-1 rounded text-xs bg-green-100 text-green-700 font-semibold">↑ Naik 18%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Domba -->
        <div class="rounded-lg bg-white shadow-sm hover:shadow-lg transition transform hover:scale-105 overflow-hidden border border-gray-100">
          <img :src="dombaImage" alt="Domba Garut" class="w-full h-44 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Domba Garut</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Harga Rata-rata:</span>
                <span class="font-semibold text-gray-900">Rp 85.000/kg</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Lokasi Utama:</span>
                <span class="font-semibold text-gray-900">Balikpapan Barat</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Tren:</span>
                <span class="px-2 py-1 rounded text-xs bg-green-100 text-green-700 font-semibold">↑ Naik 16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
