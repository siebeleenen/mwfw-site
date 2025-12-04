<template>
  <div>
    <div v-if="logos.length === 0" class="bg-white/6 p-6 rounded-md text-accent/60">
      Voeg sponsorlogo's toe in <code>src/assets/sponsors/</code> (png/jpg/svg/webp).
    </div>
    <div v-else class="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12">
      <div v-for="logo in logos" :key="logo.src" class="flex items-center justify-center w-32 h-24 md:w-40 md:h-28">
        <img :src="logo.src" :alt="logo.alt" class="w-full h-full object-contain" />
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
