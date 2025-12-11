<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  category: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  };
};
</script>

<template>
  <section class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-green-800">Form Konsultasi</h2>
        <p class="mt-1 text-gray-600">Sampaikan pertanyaan, kritik, saran, atau ajukan kerja sama dengan kami</p>
      </div>

      <!-- Info Boxes - Horizontal -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
        <div class="bg-green-50 rounded-lg p-4 border border-green-200">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="font-bold text-green-800 text-sm">Jam Operasional</h3>
          </div>
          <p class="text-xs text-gray-700">
            Senin - Jumat: 08:00 - 17:00 WITA<br/>
            Sabtu: 09:00 - 15:00 WITA
          </p>
        </div>

        <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="font-bold text-blue-800 text-sm">Waktu Respon</h3>
          </div>
          <p class="text-xs text-gray-700">
            Maksimal akan direspon1x24 jam pada hari kerja
          </p>
        </div>

        <div class="bg-amber-50 rounded-lg p-4 border border-amber-200">
          <div class="flex items-center gap-2 mb-2">
            <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 class="font-bold text-amber-800 text-sm">Privasi Terjaga</h3>
          </div>
          <p class="text-xs text-gray-700">
            Semua data anda akan dijaga kerahasiaannya dan tidak akan disebarluaskan
          </p>
        </div>
      </div>

      <!-- Form Card -->
      <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <form @submit.prevent="handleSubmit">
          <!-- Nama Lengkap -->
          <div class="mb-6">
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap <span class="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              id="name"
              v-model="formData.name"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="Masukkan nama lengkap Anda"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email <span class="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              id="email"
              v-model="formData.email"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="email@example.com"
              required
            />
          </div>

          <!-- Nomor Telepon -->
          <div class="mb-6">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Nomor Telepon <span class="text-gray-400">(Opsional)</span>
            </label>
            <input 
              type="tel" 
              id="phone"
              v-model="formData.phone"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              placeholder="0812-XXXX-XXXX"
            />
          </div>

          <!-- Kategori Pertanyaan -->
          <div class="mb-6">
            <label for="category" class="block text-sm font-medium text-gray-700 mb-2">
              Kategori Pertanyaan <span class="text-red-500">*</span>
            </label>
            <select 
              id="category"
              v-model="formData.category"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white"
              required
            >
              <option value="" disabled>Pilih kategori</option>
              <option value="konsultasi">Konsultasi Ternak</option>
              <option value="pesan">Pesan Produk</option>
              <option value="kritik">Kritik & Saran</option>
              <option value="kemitraan">Kerja Sama / Kemitraan</option>
            </select>
          </div>

          <!-- Pesan Lengkap -->
          <div class="mb-6">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
              Pesan Lengkap <span class="text-red-500">*</span>
            </label>
            <textarea 
              id="message"
              v-model="formData.message"
              rows="6"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-none"
              placeholder="Tuliskan pesan Anda di sini..."
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Kirim Pesan
          </button>
        </form>
        </div>
      </div>
    </div>
  </section>
</template>
