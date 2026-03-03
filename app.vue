<template>
  <div>
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-M9RX32HS"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <noscript>
      <img src="//p.tgtag.io/event?property_id=tg-023158-001&event_name=pageview&no_script=1" width="1" height="1" border="0" />
    </noscript>
    <NuxtPage />
  </div>
</template>

<script setup>
// Clixtell Tracking Code
onMounted(() => {
  const script = document.createElement('script')
  script.async = true
  script.type = 'text/javascript'
  const prefix = document.location.protocol
  script.src = prefix + '//scripts.clixtell.com/track.js'
  document.head.appendChild(script)
})
</script>
