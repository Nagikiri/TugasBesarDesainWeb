<script setup>
import Navbar from '@/components/Navbar.vue';
import ContactHero from '@/components/ContactHero.vue';
import ContactMaps from '@/components/ContactMaps.vue';
import ContactForm from '@/components/ContactForm.vue';
import ContactCTA from '@/components/ContactCTA.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar/>
  <div id="hubungi-kami">
    <ContactHero/>
  </div>
  <div id="lokasi-peternakan">
    <ContactMaps/>
  </div>
  <div id="form">
    <ContactForm/>
  </div>
  <div id="info-peternakan">
    <ContactCTA/>
  </div>
  <Footer/>
</template>