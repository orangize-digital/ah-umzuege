<template>
  <section class="bg-gradient-to-br from-orange-50 to-amber-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Unsere <span class="text-orange-600">Leistungen</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Von Entrümpelung über Firmen- und Haushaltsauflösung bis hin zu Transport und Renovierung - 
          wir bieten Ihnen umfassende Dienstleistungen für jeden Bedarf.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#entruempelung" class="bg-[#ed7f11] text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center">
            <ListIcon class="h-5 w-5 mr-2" />
            Leistungen entdecken
          </a>
          <NuxtLink to="/kontakt" class="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-[#ed7f11] hover:text-white transition-colors flex items-center justify-center">
            <PhoneIcon class="h-5 w-5 mr-2" />
            Kostenlos beraten lassen
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ListIcon, PhoneIcon } from 'lucide-vue-next'
</script>
