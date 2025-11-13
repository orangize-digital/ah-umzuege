<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Erfolgreiche Projekte
      </h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="project in projects" :key="project.id" 
             class="bg-white rounded-lg shadow-sm overflow-hidden">
          <div class="h-48 bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
            <component :is="project.icon" class="h-16 w-16 text-orange-600" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span>{{ project.location }}</span>
              <span>{{ project.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HomeIcon, BuildingIcon, TruckIcon, PackageIcon } from 'lucide-vue-next'

const projects = [
  {
    id: 1,
    title: "Familienumzug Hamburg-Berlin",
    description: "Kompletter Haushaltsumzug einer 5-köpfigen Familie mit Verpackungsservice und Möbelmontage.",
    location: "Hamburg → Berlin",
    date: "März 2024",
    icon: HomeIcon
  },
  {
    id: 2,
    title: "Büroumzug Startup",
    description: "Umzug eines Tech-Startups mit 50 Arbeitsplätzen inklusive IT-Equipment und Serverumzug.",
    location: "München Innenstadt",
    date: "Februar 2024",
    icon: BuildingIcon
  },
  {
    id: 3,
    title: "Fernumzug nach Österreich",
    description: "Internationaler Umzug mit Zollabwicklung und Lagerung für eine Übergangslösung.",
    location: "Köln → Wien",
    date: "Januar 2024",
    icon: TruckIcon
  },
  {
    id: 4,
    title: "Seniorenumzug mit Betreuung",
    description: "Einfühlsamer Umzug für Senioren mit kompletter Betreuung und Einrichtungsservice.",
    location: "Frankfurt am Main",
    date: "Dezember 2023",
    icon: PackageIcon
  }
]
</script>
