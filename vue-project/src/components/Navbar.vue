<template>
  <div>
    <!-- Sidebar -->
    <div class="fixed bg-gray-800 text-white w-64 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300 z-50"
      id="sidebar">
      <div class="p-4">
        <h1 class="text-2xl font-semibold mb-6">Menu</h1>
        <ul class="space-y-2">
          <li>
            <a href="/" class="block py-2 px-4 hover:bg-gray-700 rounded transition">Home Page</a>
          </li>
          <li>
            <a href="/contact" class="block py-2 px-4 hover:bg-gray-700 rounded transition">Contact Page</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="bg-gray-800 shadow-lg">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <button class="text-white hover:text-gray-300 transition" id="open-sidebar">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          
          <h1 class="text-xl font-semibold text-white">Paduan Ternak Balikpapan</h1>
          
          <div class="w-6"></div>
        </div>
      </div>
    </nav>

    <!-- Overlay -->
    <div id="overlay" class="hidden fixed inset-0 bg-black opacity-50 z-40"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');
    const overlay = document.getElementById('overlay');
    
    openSidebarButton.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    });

    // Close sidebar when clicking overlay
    overlay.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }
    });
  }
}
</script>