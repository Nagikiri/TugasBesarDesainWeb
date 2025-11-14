<template>
  <section id="kontak" class="text-gray-600 body-font bg-gray-50">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-8">
      
      <!-- Maps Column -->
      <div class="lg:w-1/2 w-full mb-10 md:mb-0">
        <div class="bg-white p-3 rounded-2xl shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26834.765670487643!2d116.87063319852439!3d-1.152074596660557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14b035c3b9b37%3A0x80e60a8789456d46!2sTempat%20pemakaman%20umum%20KM%2015!5e0!3m2!1sid!2sid!4v1763081152499!5m2!1sid!2sid" 
            class="w-full h-96 md:h-[500px] rounded-xl" 
            style="border:0;" 
            :allowfullscreen="true"
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <!-- Info Column -->
      <div class="lg:w-1/2 w-full lg:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
        <div class="mb-6">
          <span class="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-widest text-emerald-600 uppercase bg-emerald-100 rounded-full">
            Informasi Kontak
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Kami siap membantu menjawab pertanyaan dan kebutuhan Anda seputar peternakan lokal Balikpapan.
          </p>
        </div>

        <!-- Contact Info Cards -->
        <div class="w-full space-y-4">
          <!-- Phone -->
          <div class="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="flex items-center">
              <div class="bg-emerald-100 p-3 rounded-lg mr-4">
                <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div class="text-left">
                <p class="text-xs text-gray-500 font-medium mb-1">Telepon</p>
                <a href="tel:082384938204" class="text-gray-900 font-semibold text-lg hover:text-emerald-600 transition">082384938204</a>
              </div>
            </div>
          </div>

          <!-- Email -->
          <div class="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="flex items-center">
              <div class="bg-emerald-100 p-3 rounded-lg mr-4">
                <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div class="text-left">
                <p class="text-xs text-gray-500 font-medium mb-1">Email</p>
                <a href="mailto:11231028@gmail.com" class="text-gray-900 font-semibold text-lg hover:text-emerald-600 transition">11231028@gmail.com</a>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div class="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div class="flex items-start">
              <div class="bg-emerald-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="text-left">
                <p class="text-xs text-gray-500 font-medium mb-1">Alamat</p>
                <p class="text-gray-900 font-semibold">Tempat pemakaman umum KM 15, Kalimantan Timur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>