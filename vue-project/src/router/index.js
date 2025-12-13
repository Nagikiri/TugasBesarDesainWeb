import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ContactPage from '@/views/ContactPage.vue';
import GalleryPage from '@/views/GalleryPage.vue';
import PaduanTernakPage from '@/views/PaduanTernakPage.vue';
import PotensiJualPage from '@/views/PotensiJualPage.vue';
import MyGwejhPage from '@/views/MyGwejhPage.vue';

// Import komponen panduan 
import PanduanSapi from '@/components/PaduanTernak/PanduanSapi.vue';
import PanduanKambing from '@/components/PaduanTernak/PanduanKambing.vue';
import PanduanAyam from '@/components/PaduanTernak/PanduanAyam.vue';
import PanduanBebek from '@/components/PaduanTernak/PanduanBebek.vue';
import PanduanKelinci from '@/components/PaduanTernak/PanduanKelinci.vue';
import PanduanDomba from '@/components/PaduanTernak/PanduanDomba.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/galeri',
    name: 'Galeri',
    component: GalleryPage,
  },
  {
    path: '/gallery/:id',
    name: 'gallery',
    component: () => import('@/components/GalleryDetailLayout.vue')
  },
  {
    path: '/paduan-ternak',
    name: 'PaduanTernak',
    component: PaduanTernakPage,
  },
  {
    path: '/potensi-jual',
    name: 'PotensiJual',
    component: PotensiJualPage,
  },
  // Routes untuk detail panduan ternak
  {
    path: '/paduan/sapi',
    name: 'PanduanSapi',
    component: PanduanSapi,
  },
  {
    path: '/paduan/kambing',
    name: 'PanduanKambing',
    component: PanduanKambing,
  },
  {
    path: '/paduan/ayam',
    name: 'PanduanAyam',
    component: PanduanAyam,
  },
  {
    path: '/paduan/bebek',
    name: 'PanduanBebek',
    component: PanduanBebek,
  },
  {
    path: '/paduan/kelinci',
    name: 'PanduanKelinci',
    component: PanduanKelinci,
  },
  {
    path: '/paduan/domba',
    name: 'PanduanDomba',
    component: PanduanDomba,
  },
  {
    path: '/mygwejh',
    name: 'Mygwejh',
    component: MyGwejhPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router