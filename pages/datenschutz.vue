<template>
  <div class="min-h-screen py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Datenschutzerklärung
        </h1>
        <p class="text-lg text-muted-foreground">
          Informationen zum Datenschutz gemäß DSGVO
        </p>
      </div>

      <!-- Content Section -->
      <div class="prose prose-lg max-w-none">
        <div class="bg-card rounded-xl p-8 border border-border space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
            <p class="text-card-foreground">
              [Hier allgemeine Informationen zum Datenschutz eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">2. Verantwortliche Stelle</h2>
            <p class="text-card-foreground">
              [Hier verantwortliche Stelle eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
            <p class="text-card-foreground">
              [Hier Informationen zur Datenerfassung eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">4. Kontaktformular</h2>
            <p class="text-card-foreground">
              [Hier Informationen zum Kontaktformular eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">5. Ihre Rechte</h2>
            <p class="text-card-foreground">
              [Hier Informationen zu den Rechten der Nutzer eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
            <p class="text-card-foreground">
              [Hier Informationen zu Cookies eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">7. SSL-Verschlüsselung</h2>
            <p class="text-card-foreground">
              [Hier Informationen zur SSL-Verschlüsselung eintragen]
            </p>
          </div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="mt-12">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft class="mr-2 h-5 w-5" />
          Zurück zur Startseite
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'

useSeoMeta({
  title: 'Datenschutzerklärung - A.H Entrümpelung & Umzüge',
  description: 'Datenschutzerklärung von A.H Entrümpelung & Umzüge gemäß DSGVO',
  ogTitle: 'Datenschutzerklärung - A.H Entrümpelung & Umzüge',
  ogDescription: 'Datenschutzerklärung von A.H Entrümpelung & Umzüge gemäß DSGVO',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de/datenschutz',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: 'https://mukhtar-umzuge.de/datenschutz' }
  ]
})
</script>
