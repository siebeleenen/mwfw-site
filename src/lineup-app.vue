<template>
  <div class="max-w-3xl mx-auto">
    <LineupGrid :items="items" />
  </div>
</template>

<script setup>
import LineupGrid from './components/LineupGrid.vue'
import lineupData from './dj-lineup.json'

// Import all DJ images dynamically
const djImageModules = import.meta.glob('/src/assets/djs/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default'
})

// Create a map of filename -> imported image
const djImageMap = {}
Object.entries(djImageModules).forEach(([path, image]) => {
  const filename = path.split('/').pop()
  djImageMap[filename] = image
})

const fallbackImg = '/img/galleryX.jpg'

const items = lineupData.lineup.map((dj) => ({
  ...dj,
  img: djImageMap[dj.image] || fallbackImg
}))
</script>
