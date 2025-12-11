<script setup>
import { ref, onMounted } from 'vue';

// <-- variabel untuk menyimpan nilai statistik -->
const produkTertinggi = ref(0);
const totalTerjual = ref(0);
const persenWilayah = ref(0);

// <-- jalankan animasi saat komponen dimuat -->
onMounted(() => {
  animasiAngka('produkTertinggi', 0, 2847, 2000);
  animasiAngka('totalTerjual', 0, 8652, 2000);
  animasiAngka('persenWilayah', 0, 42, 1500);
});

// <-- Fungsi untuk animasi counter naik  -->
const animasiAngka = (key, mulai, akhir, durasi) => {
  const waktuMulai = performance.now();
  const animate = (waktuSekarang) => {
    const elapsed = waktuSekarang - waktuMulai;
    const progress = Math.min(elapsed / durasi, 1);
    const nilai = Math.floor(progress * (akhir - mulai) + mulai);
    
    if (key === 'produkTertinggi') produkTertinggi.value = nilai;
    if (key === 'totalTerjual') totalTerjual.value = nilai;
    if (key === 'persenWilayah') persenWilayah.value = nilai;
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  requestAnimationFrame(animate);
};
</script>

<template>
  <div class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Judul section -->
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-green-800">Statistik & Tren Pasar Wilayah</h2>
        <p class="mt-1 text-gray-600">Data penjualan dan distribusi kebutuhan peternakan Balikpapan (November 2025)</p>
      </div>

      <!-- Card Produk Terlaris -->
      <div class="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white mb-8 shadow-lg">
        <h2 class="text-lg font-medium mb-1">Top Penjualan Produk Tertinggi</h2>
        <p class="text-3xl font-bold mb-2">{{ produkTertinggi.toLocaleString() }} unit</p>
        <p class="text-green-100 text-sm">Ayam Petelur - Balikpapan Utara</p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-green-100">Periode November 2025</span>
          <span class="bg-white text-green-700 px-3 py-1 rounded-full text-sm font-medium">↑ 18% dari Oktober</span>
        </div>
      </div>

      <!-- Grid Statistik -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <h3 class="text-lg font-medium text-gray-700 mb-4">Total Produk Terjual (November)</h3>
          <div class="flex justify-between items-end">
            <div>
              <p class="text-2xl font-bold text-gray-800">{{ totalTerjual.toLocaleString() }} unit</p>
              <p class="text-green-600 text-sm font-medium mt-2">+12.5% dari bulan sebelumnya</p>
              <p class="text-gray-500 text-xs mt-1">Semua kategori ternak & produk</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <h3 class="text-lg font-medium text-gray-700 mb-4">Wilayah Permintaan Tertinggi</h3>
          <div class="flex justify-between items-end">
            <div>
              <p class="text-2xl font-bold text-gray-800">{{ persenWilayah }}%</p>
              <p class="text-gray-600 text-sm font-medium mt-2">Balikpapan Utara</p>
              <p class="text-gray-500 text-xs mt-1">Kebutuhan tertinggi untuk semua produk</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Distribusi per Wilayah -->
      <div class="bg-white rounded-xl p-6 shadow-sm border border-green-100">
        <h3 class="text-lg font-medium text-gray-700 mb-4">Distribusi Kebutuhan per Wilayah Balikpapan</h3>
        <p class="text-sm text-gray-500 mb-4">Persentase permintaan produk peternakan per wilayah (November 2025)</p>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="w-32 font-medium text-gray-700">Balikpapan Utara</span>
            <div class="flex-1 mx-4">
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-green-600 h-2.5 rounded-full" style="width: 42%"></div>
              </div>
            </div>
            <span class="w-16 text-right font-medium text-gray-800">42%</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="w-32 font-medium text-gray-700">Balikpapan Selatan</span>
            <div class="flex-1 mx-4">
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-green-600 h-2.5 rounded-full" style="width: 28%"></div>
              </div>
            </div>
            <span class="w-16 text-right font-medium text-gray-800">28%</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="w-32 font-medium text-gray-700">Balikpapan Barat</span>
            <div class="flex-1 mx-4">
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-green-600 h-2.5 rounded-full" style="width: 18%"></div>
              </div>
            </div>
            <span class="w-16 text-right font-medium text-gray-800">18%</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="w-32 font-medium text-gray-700">Balikpapan Timur</span>
            <div class="flex-1 mx-4">
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-green-600 h-2.5 rounded-full" style="width: 12%"></div>
              </div>
            </div>
            <span class="w-16 text-right font-medium text-gray-800">12%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
