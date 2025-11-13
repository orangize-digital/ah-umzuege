<template>
  <div>
    <NavHeader />
    <LeistungenHero />
    <LeistungenDetails />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import LeistungenHero from '../components/Leistungen/LeistungenHero.vue'
import LeistungenDetails from '../components/Leistungen/LeistungenDetails.vue'
import ContactSection from '../components/ContactSection.vue'
import NavHeader from '../components/NavHeader.vue'
import FooterSection from '../components/FooterSection.vue'

useSeoMeta({
  title: 'Unsere Leistungen - A.H Entrümpelung & Umzüge',
  description: 'Entrümpelung, Firmen- und Haushaltsauflösung, Wohnungsauflösung, Entsorgung, Transport und Renovierungsarbeiten. Professionelle Dienstleistungen für jeden Bedarf.',
  ogTitle: 'Unsere Leistungen - A.H Entrümpelung & Umzüge',
  ogDescription: 'Komplettservice: Entrümpelung, Haushaltsauflösung, Transport, Renovierung und mehr. Professionell, zuverlässig, deutschlandweit.',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de/leistungen',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://mukhtar-umzuge.de/leistungen'
    }
  ]
})
</script>
