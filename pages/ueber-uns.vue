<template>
  <div class="min-h-screen bg-white">
    <NavHeader />
    <UeberUnsHero />
    <UeberUnsValues />
    <UeberUnsCertifications />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavHeader from '../components/NavHeader.vue'
import UeberUnsHero from '../components/Ueber-uns/UeberUnsHero.vue'
import UeberUnsValues from '../components/Ueber-uns/UeberUnsValues.vue'
import UeberUnsCertifications from '../components/Ueber-uns/UeberUnsCertifications.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Über uns - A.H Entrümpelung & Umzüge',
  description: 'Erfahren Sie mehr über unsere Werte, Qualitätsstandards und warum wir Ihr vertrauenswürdiger Partner für professionelle Entrümpelung und Entsorgung sind.',
  ogTitle: 'Über uns - A.H Entrümpelung & Umzüge',
  ogDescription: 'Professionelle Entrümpelung mit langjähriger Erfahrung. Ihr vertrauenswürdiger Partner für Entrümpelung, Haushaltsauflösung und mehr.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://ah-umzuege.de/ueber-uns',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://ah-umzuege.de/ueber-uns'
    }
  ]
})
</script>
