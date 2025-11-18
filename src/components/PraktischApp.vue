<template>
  <div class="space-y-4">
    <div class="grid md:grid-cols-2 gap-4">
      <article v-for="(it,i) in bullets" :key="i" class="bg-white/10 ring-1 ring-white/10 rounded-xl p-4">
        <p class="text-accent/80 text-sm">{{ it }}</p>
      </article>
    </div>
    <div class="bg-white/10 ring-1 ring-white/10 rounded-xl p-4">
      <h3 class="font-semibold text-white mb-1">Contact</h3>
      <p class="text-accent/80 text-sm">Email: <a href="mailto:info@mwfw.be" class="underline">info@mwfw.be</a></p>
    </div>
  </div>
</template>
<script setup>
const bullets = [
  'Verwarmde buitentent',
  'Vestiaire aanwezig',
  'Fuifbus: haltes & uren op sociale kanalen',
  'Happy Hour 21:00–22:00 (2 voor 1)',
  'Gratis toiletten',
  'Hot-dogs beschikbaar'
]
</script>
