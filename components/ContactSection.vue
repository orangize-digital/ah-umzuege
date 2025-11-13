<template>
  <section id="contact" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h2 class="text-3xl lg:text-4xl font-bold text-foreground">
              Kostenlos anfragen
            </h2>
            <p class="text-xl text-muted-foreground">
              Kontaktieren Sie uns für ein unverbindliches Angebot. 
              Wir beraten Sie gerne und erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
          </div>
          
          <!-- Contact Methods -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <Phone class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">Telefon</div>
                <a href="tel:+4915123456789" class="text-primary hover:underline">+49 (0) 151 234 56789</a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <Mail class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">E-Mail</div>
                <a href="mailto:kontakt@ah-umzuege.de" class="text-primary hover:underline">kontakt@ah-umzuege.de</a>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <MapPin class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">Standort</div>
                <div class="text-muted-foreground">Deutschlandweit verfügbar</div>
              </div>
            </div>
            
            <div class="flex items-center space-x-4">
              <div class="bg-primary/10 p-3 rounded-full">
                <Clock class="h-6 w-6 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-foreground">Öffnungszeiten</div>
                <div class="text-muted-foreground">Mo-Fr: 8:00-18:00, Sa: 9:00-14:00</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-card p-8 rounded-xl shadow-lg border border-border">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-card-foreground mb-2">Vorname</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                  placeholder="Ihr Vorname"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-card-foreground mb-2">Nachname</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                  placeholder="Ihr Nachname"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">E-Mail</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                placeholder="ihre.email@beispiel.de"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">Telefon</label>
              <input 
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                placeholder="+49 123 456 789"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">Umzugsart</label>
              <select 
                v-model="form.moveType"
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
              >
                <option value="">Bitte wählen</option>
                <option value="privatumzug">Privatumzug</option>
                <option value="firmenumzug">Firmenumzug</option>
                <option value="fernumzug">Fernumzug</option>
                <option value="seniorenumzug">Seniorenumzug</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-card-foreground mb-2">Nachricht</label>
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input resize-none"
                placeholder="Beschreiben Sie Ihren Umzug..."
              ></textarea>
            </div>

            <div class="flex items-start">
              <input
                type="checkbox"
                id="datenschutz-contact"
                v-model="form.datenschutz"
                required
                class="mt-1 h-4 w-4 text-primary focus:ring-primary border-border rounded"
              >
              <label for="datenschutz-contact" class="ml-3 text-sm text-card-foreground">
                Ich stimme der Verarbeitung meiner Daten gemäß der
                <NuxtLink to="/datenschutz" target="_blank" class="text-primary hover:text-primary/80 underline">Datenschutzerklärung</NuxtLink> zu. *
              </label>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send class="mr-2 h-5 w-5" />
              {{ isSubmitting ? 'Wird gesendet...' : 'Kostenlos anfragen' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-vue-next'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  moveType: '',
  message: '',
  datenschutz: false
})

const isSubmitting = ref(false)

const getMoveTypeLabel = (type) => {
  const labels = {
    'privatumzug': 'Privatumzug',
    'firmenumzug': 'Firmenumzug',
    'fernumzug': 'Fernumzug',
    'seniorenumzug': 'Seniorenumzug'
  }
  return labels[type] || type
}

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const subject = `Anfrage: ${getMoveTypeLabel(form.value.moveType)} - ${form.value.firstName} ${form.value.lastName}`

    const htmlBody = `
      <h2>Neue Kontaktanfrage von A.H Entrümpelung & Umzüge Website</h2>
      <p><strong>Name:</strong> ${form.value.firstName} ${form.value.lastName}</p>
      <p><strong>E-Mail:</strong> ${form.value.email}</p>
      <p><strong>Telefon:</strong> ${form.value.phone || 'Nicht angegeben'}</p>
      <p><strong>Umzugsart:</strong> ${getMoveTypeLabel(form.value.moveType)}</p>
      <h3>Nachricht:</h3>
      <p>${form.value.message || 'Keine Nachricht angegeben'}</p>
    `

    const textBody = `
Neue Kontaktanfrage von A.H Entrümpelung & Umzüge Website

Name: ${form.value.firstName} ${form.value.lastName}
E-Mail: ${form.value.email}
Telefon: ${form.value.phone || 'Nicht angegeben'}
Umzugsart: ${getMoveTypeLabel(form.value.moveType)}

Nachricht:
${form.value.message || 'Keine Nachricht angegeben'}
    `.trim()

    // Use server API route to avoid CORS issues
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        subject: subject,
        html: htmlBody,
        text: textBody
      }
    })

    if (response.success) {
      // Redirect to thank you page
      await navigateTo('/danke')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
    isSubmitting.value = false
  }
}
</script>