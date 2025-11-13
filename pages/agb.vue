<template>
  <div class="min-h-screen py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p class="text-lg text-muted-foreground">
          Gültig für alle Dienstleistungen von A.H Entrümpelung & Umzüge
        </p>
      </div>

      <!-- Content Section -->
      <div class="prose prose-lg max-w-none">
        <div class="bg-card rounded-xl p-8 border border-border space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">1. Geltungsbereich</h2>
            <p class="text-card-foreground">
              [Hier Geltungsbereich der AGB eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">2. Vertragsschluss</h2>
            <p class="text-card-foreground">
              [Hier Informationen zum Vertragsschluss eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">3. Leistungen</h2>
            <p class="text-card-foreground">
              [Hier Leistungsbeschreibung eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">4. Preise und Zahlung</h2>
            <p class="text-card-foreground">
              [Hier Preis- und Zahlungsbedingungen eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">5. Haftung</h2>
            <p class="text-card-foreground">
              [Hier Haftungsbestimmungen eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">6. Stornierung und Rücktritt</h2>
            <p class="text-card-foreground">
              [Hier Stornierungsbedingungen eintragen]
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-foreground mb-4">7. Schlussbestimmungen</h2>
            <p class="text-card-foreground">
              [Hier Schlussbestimmungen eintragen]
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
  title: 'AGB - A.H Entrümpelung & Umzüge',
  description: 'Allgemeine Geschäftsbedingungen von A.H Entrümpelung & Umzüge',
  ogTitle: 'AGB - A.H Entrümpelung & Umzüge',
  ogDescription: 'Allgemeine Geschäftsbedingungen von A.H Entrümpelung & Umzüge',
  ogImage: '/og-image.jpg',
  ogUrl: 'https://mukhtar-umzuge.de/agb',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    { rel: 'canonical', href: 'https://mukhtar-umzuge.de/agb' }
  ]
})
</script>
