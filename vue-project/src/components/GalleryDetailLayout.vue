<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import ayamImage from '@/assets/images/AyamGallery.webp';
import sapiImage from '@/assets/images/SapiGallery.jpeg';
import kambingImage from '@/assets/images/KambingGallery.webp';
import telurImage from '@/assets/images/Telur.jpg';
import susuImage from '@/assets/images/Susu.jpg';
import dagingImage from '@/assets/images/Daging.jpg';

const route = useRoute();
const router = useRouter();

// Data lengkap hewan dan produk
const galleryData = {
  // HEWAN
  'ayam': {
    type: 'hewan',
    nama: 'Ayam Petelur',
    namaIlmiah: 'Gallus gallus domesticus',
    kategori: 'Unggas Ternak Produktif',
    berat: '1,5–2,5 kg (dewasa siap bertelur)',
    umur: '5–8 tahun dengan produktivitas optimal 1-2 tahun',
    karakteristik: 'Sangat produktif dengan kemampuan bertelur 280-320 butir/tahun, tahan terhadap penyakit umum, dan mudah beradaptasi dengan lingkungan tropis',
    habitat: 'Kandang terbuka dengan ventilasi baik, ideal pada iklim tropis dengan suhu 20-30°C dan kelembaban 60-70%',
    pakan: 'Jagung giling, dedak padi, konsentrat layer (protein 16-18%), sayuran hijau, dan air bersih ad libitum',
    manfaat: 'Penghasil telur konsumsi berkualitas tinggi, daging sekunder, bulu untuk kerajinan, dan kotoran sebagai pupuk organik',
    asal: 'Peternakan lokal Balikpapan, Kalimantan Timur',
    image: ayamImage,
    panduanLink: '/paduan-ternak#ayam'
  },
  'sapi': {
    type: 'hewan',
    nama: 'Sapi Brahman',
    namaIlmiah: 'Bos indicus',
    kategori: 'Mamalia Ternak Pedaging Unggul',
    berat: '400–600 kg (jantan dewasa bisa mencapai 800 kg)',
    umur: '15–20 tahun dengan masa produktif optimal 8-10 tahun',
    karakteristik: 'Sangat tahan terhadap suhu panas dan kelembaban tinggi, pertumbuhan cepat dengan gain harian 1-1,5 kg, temperamen jinak dan mudah dikendalikan',
    habitat: 'Padang rumput terbuka atau kandang semi-intensif, cocok di daerah tropis dengan akses air dan naungan',
    pakan: 'Rumput gajah segar, jerami berkualitas, konsentrat sapi (protein 14-16%), mineral supplement, dan air bersih minimal 40-60 liter/hari',
    manfaat: 'Daging sapi berkualitas premium dengan marbling baik, kulit untuk industri, pupuk kandang organik, dan biogas',
    asal: 'Peternakan rakyat Balikpapan, Kalimantan Timur',
    image: sapiImage,
    panduanLink: '/paduan-ternak#sapi'
  },
  'kambing': {
    type: 'hewan',
    nama: 'Kambing Etawa',
    namaIlmiah: 'Capra aegagrus hircus',
    kategori: 'Mamalia Ternak Perah Berkualitas',
    berat: '40–90 kg (betina 40-60 kg, jantan 60-90 kg)',
    umur: '10–15 tahun dengan masa laktasi produktif hingga 8 tahun',
    karakteristik: 'Penghasil susu berkualitas dengan produksi 1-3 liter/hari, sangat tahan terhadap penyakit tropis, temperamen jinak dan mudah dipelihara',
    habitat: 'Kandang panggung dengan sirkulasi udara baik, area kering dengan drainase sempurna, cocok di dataran rendah hingga menengah',
    pakan: 'Rumput segar, daun turi dan gamal, konsentrat kambing (protein 12-14%), mineral mix, dan air bersih 5-8 liter/hari',
    manfaat: 'Susu kambing tinggi kalsium untuk kesehatan, daging berkualitas rendah kolesterol, kulit untuk kerajinan, dan kotoran sebagai pupuk',
    asal: 'Peternakan binaan Balikpapan, Kalimantan Timur',
    image: kambingImage,
    panduanLink: '/paduan-ternak#kambing'
  },
  // PRODUK
  'telur': {
    type: 'produk',
    nama: 'Telur Ayam Kampung',
    jenisHewan: 'Ayam Kampung (Gallus gallus domesticus)',
    berat: '35–45 gram per butir (lebih kecil dari telur ayam ras namun lebih padat nutrisi)',
    warnaKulit: 'Coklat muda hingga kemerahan, cangkang lebih tebal dan kuat',
    rasa: 'Lebih gurih dan kaya rasa dibanding telur ayam ras, aroma khas ayam kampung yang kuat dan natural',
    tekstur: 'Sangat padat dengan kuning telur berwarna orange pekat, putih telur kental dan tidak encer',
    nutrisi: 'Tinggi protein (13g per butir), omega-3 alami, vitamin B kompleks, vitamin A, D, E, mineral selenium dan zat besi',
    kegunaan: 'Masakan harian rumah tangga, bahan jamu tradisional, makanan pendamping bayi (MPASI), menu diet sehat, dan olahan kue premium',
    asal: 'Peternakan ayam kampung Balikpapan, Kalimantan Timur',
    image: telurImage,
    hewanLink: 'ayam'
  },
  'susu': {
    type: 'produk',
    nama: 'Susu Kambing Etawa',
    jenisHewan: 'Kambing Etawa (Capra aegagrus hircus)',
    berat: '200–250 ml per botol (kemasan fresh milk pasteurisasi)',
    warnaKulit: 'Putih krem natural, menandakan kandungan lemak sehat yang tinggi',
    rasa: 'Gurih lembut dengan sedikit rasa manis alami, tidak berbau prengus seperti anggapan umum',
    tekstur: 'Kental dan creamy, butiran lemak lebih kecil sehingga mudah dicerna dibanding susu sapi',
    nutrisi: 'Kalsium super tinggi (300mg per 200ml), protein mudah serap, vitamin A, D, B kompleks, mineral fosfor, kalium, dan sodium fluoride untuk gigi',
    kegunaan: 'Minuman kesehatan keluarga, susu pertumbuhan anak, terapi asam lambung dan TBC, pemulihan pasca sakit, dan bahan smoothie sehat',
    asal: 'Peternakan kambing perah Balikpapan, Kalimantan Timur',
    image: susuImage,
    hewanLink: 'kambing'
  },
  'daging': {
    type: 'produk',
    nama: 'Daging Sapi Segar',
    jenisHewan: 'Sapi Brahman (Bos indicus)',
    berat: '1–2 kg per potong (berbagai cuts: sirloin, tenderloin, rib eye, atau bagian has dalam)',
    warnaKulit: 'Merah segar cerah menandakan kesegaran optimal, dengan sedikit marbling putih yang merata',
    rasa: 'Sangat gurih dan umami natural, tekstur empuk saat dimasak, kaya rasa daging tanpa bau amis',
    tekstur: 'Serat otot halus dan lembut, sangat juicy ketika dipanggang atau digoreng, tidak alot',
    nutrisi: 'Protein hewani berkualitas tinggi (26g per 100g), zat besi untuk mencegah anemia, vitamin B12, zinc, selenium, dan kreatin untuk energi',
    kegunaan: 'Masakan nusantara (rendang, soto, rawon), steak western, sukiyaki, shabu-shabu, sate, bakso premium, dan berbagai olahan daging berkualitas',
    asal: 'Rumah potong hewan (RPH) modern Balikpapan, Kalimantan Timur',
    image: dagingImage,
    hewanLink: 'sapi'
  }
};

const itemId = ref(route.params.id || 'ayam');
const item = computed(() => galleryData[itemId.value] || galleryData['ayam']);

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const handlePelajariClick = () => {
  if (item.value.type === 'hewan') {
    // Route ke component panduan langsung
    const animalName = route.params.id; // ayam, sapi, kambing
    router.push(`/paduan/${animalName}`);
  }
};
</script>

<template>
  <Navbar />
  <div class="bg-green-50/30 pt-24 pb-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Button -->
      <div class="mb-6">
        <button
          @click="router.push('/galeri')"
          class="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-sm border border-gray-200 transition"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Kembali ke Galeri
        </button>
      </div>

      <!-- Image -->
      <div class="mb-8">
        <div class="rounded-2xl overflow-hidden shadow-xl bg-white">
          <img 
            :src="item.image" 
            :alt="item.nama" 
            class="w-full h-[500px] object-cover"
          >
        </div>
      </div>

      <!-- Title -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <span 
          class="inline-block px-4 py-1 mb-4 text-xs font-semibold text-white rounded-full uppercase bg-green-600"
        >
          {{ item.type }}
        </span>
        
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {{ item.nama }}
        </h1>
      </div>

      <!-- Biodata in 2 Columns - Full Width -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Left Column HEWAN -->
        <div v-if="item.type === 'hewan'" class="bg-white rounded-2xl shadow-lg p-6">
          <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Nama Ilmiah</span>
                <p class="text-sm text-gray-800 mt-1">{{ item.namaIlmiah }}</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Kategori</span>
                <p class="text-sm text-gray-800 mt-1">{{ item.kategori }}</p>
              </div>
              
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-gray-50 rounded-lg p-3">
                  <span class="text-xs font-semibold text-green-700 uppercase">Berat</span>
                  <p class="text-sm text-gray-800 mt-1">{{ item.berat }}</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <span class="text-xs font-semibold text-green-700 uppercase">Umur Hidup</span>
                  <p class="text-sm text-gray-800 mt-1">{{ item.umur }}</p>
                </div>
              </div>
              
              <div class="bg-green-50 rounded-lg p-3 border border-green-200">
                <span class="text-xs font-semibold text-green-700 uppercase">Karakteristik Utama</span>
                <p class="text-sm text-gray-800 mt-1 leading-relaxed">{{ item.karakteristik }}</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Habitat Ideal</span>
                <p class="text-sm text-gray-800 mt-1 leading-relaxed">{{ item.habitat }}</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Asal Daerah</span>
                <p class="text-sm text-gray-800 mt-1">{{ item.asal }}</p>
              </div>
          </div>
        </div>

        <!-- Right Column HEWAN -->
        <div v-if="item.type === 'hewan'" class="bg-white rounded-2xl shadow-lg p-6">
          <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Jenis Pakan</span>
                <p class="text-sm text-gray-800 mt-1 leading-relaxed">{{ item.pakan }}</p>
              </div>
              
              <div class="bg-green-50 rounded-lg p-3 border border-green-200">
                <span class="text-xs font-semibold text-green-700 uppercase">Manfaat & Kegunaan</span>
                <p class="text-sm text-gray-800 mt-1 leading-relaxed">{{ item.manfaat }}</p>
              </div>
          </div>
        </div>

        <!-- Left Column PRODUK -->
        <div v-if="item.type === 'produk'" class="bg-white rounded-2xl shadow-lg p-6">
          <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Jenis Hewan Penghasil</span>
                <p class="text-sm text-gray-800 mt-1">{{ item.jenisHewan }}</p>
              </div>
              
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-gray-50 rounded-lg p-3">
                  <span class="text-xs font-semibold text-green-700 uppercase">Berat/Ukuran</span>
                  <p class="text-sm text-gray-800 mt-1">{{ item.berat }}</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                  <span class="text-xs font-semibold text-green-700 uppercase">Warna</span>
                  <p class="text-sm text-gray-800 mt-1">{{ item.warnaKulit }}</p>
                </div>
              </div>
              
              <div class="bg-green-50 rounded-lg p-3 border border-green-200">
                <span class="text-xs font-semibold text-green-700 uppercase">Rasa & Aroma</span>
                <p class="text-sm text-gray-800 mt-1 leading-relaxed">{{ item.rasa }}</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Tekstur</span>
                <p class="text-sm text-gray-800 mt-1">{{ item.tekstur }}</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Asal Peternakan</span>
                <p class="text-sm text-gray-800 mt-1">{{ item.asal }}</p>
              </div>
          </div>
        </div>

        <!-- Right Column PRODUK -->
        <div v-if="item.type === 'produk'" class="bg-white rounded-2xl shadow-lg p-6">
          <div class="space-y-4">
              <div class="bg-green-50 rounded-lg p-3 border border-green-200">
                <span class="text-xs font-semibold text-green-700 uppercase">Nutrisi Utama</span>
                <p class="text-sm text-gray-800 mt-1 leading-relaxed">{{ item.nutrisi }}</p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-3">
                <span class="text-xs font-semibold text-green-700 uppercase">Kegunaan</span>
                <p class="text-sm text-gray-800 mt-1 leading-relaxed">{{ item.kegunaan }}</p>
              </div>
          </div>
        </div>
      </div>

      </div>

      <!-- Button - Center for Hewan Only -->
      <div v-if="item.type === 'hewan'" class="flex justify-center">
        <button
          @click="handlePelajariClick"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 shadow-lg"
        >
          Pelajari Panduan Ternak
        </button>
      </div>
    </div>
  <Footer />
</template>       










