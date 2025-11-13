<template>
  <div class="min-h-screen bg-white">
    <NavHeader />
    <UeberUnsHero />
    <UeberUnsStory />
    <UeberUnsTeam />
    <UeberUnsValues />
    <UeberUnsCertifications />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import UeberUnsHero from '../components/Ueber-uns/UeberUnsHero.vue'
import UeberUnsStory from '../components/Ueber-uns/UeberUnsStory.vue'
import UeberUnsTeam from '../components/Ueber-uns/UeberUnsTeam.vue'
import UeberUnsValues from '../components/Ueber-uns/UeberUnsValues.vue'
import UeberUnsCertifications from '../components/Ueber-uns/UeberUnsCertifications.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Über uns - A.H Entrümpelung & Umzüge',
  description: 'Lernen Sie unser professionelles Team kennen. Erfahren Sie mehr über unsere Werte, Geschichte und warum wir Ihr vertrauenswürdiger Partner für alle Umzugsdienstleistungen sind.',
  ogTitle: 'Über uns - A.H Entrümpelung & Umzüge',
  ogDescription: 'Professionelles Team mit langjähriger Erfahrung. Ihre vertrauenswürdiger Partner für Umzüge, Entrümpelung und mehr.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de/ueber-uns',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://mukhtar-umzuge.de/ueber-uns'
    }
  ]
})
</script>
