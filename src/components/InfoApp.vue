<template>
  <div class="grid md:grid-cols-2 gap-4">
    <article v-for="(it,i) in items" :key="i" class="bg-white/10 ring-1 ring-white/10 rounded-xl p-4 space-y-1">
      <h3 class="font-semibold text-white">{{ it.title }}</h3>
      <p class="text-accent/80 text-sm">{{ it.text }}</p>
    </article>
  </div>
</template>
<script setup>
const items = [
  { title: 'Voorzieningen', text: 'Verwarmde buitentent, gratis toiletten, vestiaire, fietsenparking.' },
  { title: 'Eten & Drinken', text: 'Hot-dogs, cocktailbar, happy hour 21:00–22:00 (2 voor 1).' },
  { title: 'Vervoer', text: 'Gratis fuifbus. Industrieweg 1062, 3540 Herk-de-Stad.' },
  { title: 'Veiligheid', text: 'Beveiliging aanwezig. Respecteer de huisregels.' }
]
</script>
