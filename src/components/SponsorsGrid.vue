<template>
  <div>
    <div v-if="logos.length === 0" class="bg-white/6 p-6 rounded-md text-accent/60">
      Voeg sponsorlogo's toe in <code>src/assets/sponsors/</code> (png/jpg/svg/webp).
    </div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      <div v-for="logo in logos" :key="logo.src" class="bg-white/6 p-4 rounded-md flex items-center justify-center">
        <img :src="logo.src" :alt="logo.alt" class="h-16 md:h-20 w-auto object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup>
// Eagerly import all images in src/assets/sponsors as URLs
// Use modern glob options (no deprecation warning)
const modules = import.meta.glob('/src/assets/sponsors/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
  query: '?url'
})
const entries = Object.entries(modules)
  .map(([path, url]) => ({
    src: url,
    alt: path.split('/').pop()?.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, '') || 'Sponsor',
    name: path.split('/').pop() || ''
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

const logos = entries
</script>
