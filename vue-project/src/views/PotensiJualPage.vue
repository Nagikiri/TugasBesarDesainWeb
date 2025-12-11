<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import PotensiJualHero from '../components/PotensiJualHero.vue';
import PotensiJualTopKomoditas from '../components/PotensiJualTopKomoditas.vue';
import PotensiJualSearchBar from '../components/PotensiJualSearchBar.vue';
import PotensiJualTampilan from '../components/PotensiJualTampilan.vue';
import PotensiJualAllGrid from '../components/PotensiJualAllGrid.vue';
import Footer from '../components/Footer.vue';

const searchQuery = ref('');

const handleSearch = (query) => {
  searchQuery.value = query;
};
</script>

<template>
  <Navbar />
  <PotensiJualHero />
  <PotensiJualSearchBar @search="handleSearch" />
  
  <!-- Hasil Pencarian - Muncul di ATAS saat ada searchQuery -->
  <PotensiJualAllGrid v-if="searchQuery" :search-query="searchQuery" />
  
  <!-- Statistik dan Top Komoditas - Selalu di tengah -->
  <div v-if="!searchQuery" id="statistik">
    <PotensiJualTampilan />
    <PotensiJualTopKomoditas />
  </div>
  
  <!-- Daftar Lengkap - Muncul di BAWAH saat TIDAK ada search -->
  <PotensiJualAllGrid v-if="!searchQuery" :search-query="searchQuery" />
  
  <Footer />
</template>