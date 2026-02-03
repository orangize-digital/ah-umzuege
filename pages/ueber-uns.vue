<template>
  <div class="min-h-screen bg-white">
    <NavHeader />
    <UeberUnsHero />
    <UeberUnsStory />
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
import UeberUnsValues from '../components/Ueber-uns/UeberUnsValues.vue'
import UeberUnsCertifications from '../components/Ueber-uns/UeberUnsCertifications.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Über uns - A.H Entrümpelung & Umzüge',
  description: 'Erfahren Sie mehr über unsere Werte, Qualitätsstandards und warum wir Ihr vertrauenswürdiger Partner für professionelle Umzüge und Entrümpelung sind.',
  ogTitle: 'Über uns - A.H Entrümpelung & Umzüge',
  ogDescription: 'Professionelle Umzüge und Entrümpelung mit langjähriger Erfahrung. Ihr vertrauenswürdiger Partner in Berlin & Umgebung.',
  ogImage: '/logo.svg',
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
