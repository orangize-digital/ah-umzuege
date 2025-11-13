<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Kostenloses Angebot anfordern</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
          Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot für Ihren Umzug.
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="vorname" class="block text-sm font-medium text-gray-700 mb-2">Vorname *</label>
              <input 
                type="text" 
                id="vorname" 
                v-model="form.vorname"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Ihr Vorname"
              >
            </div>
            <div>
              <label for="nachname" class="block text-sm font-medium text-gray-700 mb-2">Nachname *</label>
              <input 
                type="text" 
                id="nachname" 
                v-model="form.nachname"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Ihr Nachname"
              >
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="ihre.email@beispiel.de"
              >
            </div>
            <div>
              <label for="telefon" class="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
              <input 
                type="tel" 
                id="telefon" 
                v-model="form.telefon"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="+49 151 234 567 89"
              >
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="von" class="block text-sm font-medium text-gray-700 mb-2">Umzug von (PLZ/Ort) *</label>
              <input 
                type="text" 
                id="von" 
                v-model="form.von"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="12345 Berlin"
              >
            </div>
            <div>
              <label for="nach" class="block text-sm font-medium text-gray-700 mb-2">Umzug nach (PLZ/Ort) *</label>
              <input 
                type="text" 
                id="nach" 
                v-model="form.nach"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="54321 Hamburg"
              >
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="datum" class="block text-sm font-medium text-gray-700 mb-2">Gewünschtes Datum</label>
              <input 
                type="date" 
                id="datum" 
                v-model="form.datum"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
            </div>
            <div>
              <label for="zimmer" class="block text-sm font-medium text-gray-700 mb-2">Anzahl Zimmer</label>
              <select 
                id="zimmer" 
                v-model="form.zimmer"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Bitte wählen</option>
                <option value="1">1 Zimmer</option>
                <option value="2">2 Zimmer</option>
                <option value="3">3 Zimmer</option>
                <option value="4">4 Zimmer</option>
                <option value="5+">5+ Zimmer</option>
              </select>
            </div>
          </div>

          <div>
            <label for="nachricht" class="block text-sm font-medium text-gray-700 mb-2">Zusätzliche Informationen</label>
            <textarea 
              id="nachricht" 
              v-model="form.nachricht"
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Besondere Wünsche, schwere Gegenstände, Klaviertransport, etc."
            ></textarea>
          </div>

          <div class="flex items-start">
            <input 
              type="checkbox" 
              id="datenschutz" 
              v-model="form.datenschutz"
              required
              class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
            >
            <label for="datenschutz" class="ml-3 text-sm text-gray-600">
              Ich stimme der Verarbeitung meiner Daten gemäß der
              <NuxtLink to="/datenschutz" target="_blank" class="text-orange-600 hover:text-orange-700 underline">Datenschutzerklärung</NuxtLink> zu. *
            </label>
          </div>

          <div class="text-center">
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="bg-[#ed7f11] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
            >
              <SendIcon v-if="!isSubmitting" class="h-5 w-5 mr-2" />
              <div v-else class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              {{ isSubmitting ? 'Wird gesendet...' : 'Kostenloses Angebot anfordern' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { SendIcon } from 'lucide-vue-next'

const isSubmitting = ref(false)

const form = reactive({
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  von: '',
  nach: '',
  datum: '',
  zimmer: '',
  nachricht: '',
  datenschutz: false
})

const submitForm = async () => {
  isSubmitting.value = true

  try {
    const subject = `Umzugsangebot Anfrage: ${form.von} → ${form.nach} - ${form.vorname} ${form.nachname}`

    const htmlBody = `
      <h2>Neue Umzugsanfrage von A.H Entrümpelung & Umzüge Website</h2>
      <h3>Kontaktdaten:</h3>
      <p><strong>Name:</strong> ${form.vorname} ${form.nachname}</p>
      <p><strong>E-Mail:</strong> ${form.email}</p>
      <p><strong>Telefon:</strong> ${form.telefon || 'Nicht angegeben'}</p>

      <h3>Umzugsdetails:</h3>
      <p><strong>Von:</strong> ${form.von}</p>
      <p><strong>Nach:</strong> ${form.nach}</p>
      <p><strong>Gewünschtes Datum:</strong> ${form.datum || 'Nicht angegeben'}</p>
      <p><strong>Anzahl Zimmer:</strong> ${form.zimmer || 'Nicht angegeben'}</p>

      <h3>Zusätzliche Informationen:</h3>
      <p>${form.nachricht || 'Keine zusätzlichen Informationen'}</p>
    `

    const textBody = `
Neue Umzugsanfrage von A.H Entrümpelung & Umzüge Website

Kontaktdaten:
Name: ${form.vorname} ${form.nachname}
E-Mail: ${form.email}
Telefon: ${form.telefon || 'Nicht angegeben'}

Umzugsdetails:
Von: ${form.von}
Nach: ${form.nach}
Gewünschtes Datum: ${form.datum || 'Nicht angegeben'}
Anzahl Zimmer: ${form.zimmer || 'Nicht angegeben'}

Zusätzliche Informationen:
${form.nachricht || 'Keine zusätzlichen Informationen'}
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
