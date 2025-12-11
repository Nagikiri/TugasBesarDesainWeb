<script setup>
const peternakanData = [
  {
    name: 'Kutai Ternak Mandiri',
    phone: '0542-XXX-XXXX',
    address: 'Jl. Soekarno Hatta',
    specialty: 'Sapi & Kambing',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9199578045163!2d116.84842057472437!3d-1.2158920987724982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14967f1e91815%3A0x3a0f5977ec4b97eb!2sKUTAI%20TERNAK%20MANDIRI!5e0!3m2!1sid!2sid!4v1764169456781!5m2!1sid!2sid'
  },
  {
    name: 'Borneo Etam Farm Balikpapan',
    phone: '0542-XXX-XXXX',
    address: 'Jl. Ahmad Yani',
    specialty: 'Hewan Qurban & Aqiqah',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127646.95863833021!2d116.82731102873251!3d-1.183310126573078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14f006860b947%3A0x6e27cf7880af2f8c!2sBorneo%20Etam%20Farm.%20Sentra%20hewan%20qurban%20dan%20aqiqah%20Balikpapan!5e0!3m2!1sid!2sid!4v1764169727731!5m2!1sid!2sid'
  },
  {
    name: 'Peternakan Mujianto',
    phone: '0542-XXX-XXXX',
    address: 'Jl. Marsma Iswahyudi',
    specialty: 'Produk Susu',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127646.97785193959!2d116.80438717873176!3d-1.18289252700459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14b8439881907%3A0xf8c6600c682a02a3!2sPeternakan%20Mujianto!5e0!3m2!1sid!2sid!4v1764169818894!5m2!1sid!2sid'
  }
];
</script>

<template>
  <!-- Section Lokasi Peternakan Utama -->
  <section class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-green-800">Lokasi Peternakan Utama</h2>
        <p class="mt-1 text-gray-600">Kunjungi lokasi peternakan rekomendasi kami</p>
      </div>

      <!-- Maps Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in peternakanData" 
          :key="index"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div class="aspect-video w-full">
            <iframe 
              :src="item.mapEmbed" 
              class="w-full h-full"
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-900">{{ item.name }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ item.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section Info Peternakan -->
  <section class="bg-white py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-green-800">Info Peternakan</h2>
        <p class="mt-1 text-gray-600">Detail informasi kontak peternakan</p>
      </div>

      <!-- Info Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="(item, index) in peternakanData" 
          :key="index"
          class="bg-white rounded-xl shadow-md p-6 flex gap-4 hover:shadow-lg hover:scale-105 transition border border-gray-100"
        >
          <!-- Icon -->
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          
          <!-- Info -->
          <div class="flex-1">
            <h3 class="text-lg font-bold text-gray-900">{{ item.name }}</h3>
            <div class="mt-2 space-y-1 text-sm text-gray-600">
              <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ item.phone }}</span>
              </p>
              <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ item.address }}</span>
              </p>
              <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span class="font-medium text-green-700">{{ item.specialty }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
