<template>
  <div class="max-w-3xl mx-auto">
    <LineupGrid :items="items" />
  </div>
</template>

<script setup>
import LineupGrid from './components/LineupGrid.vue'

// Load available DJ images; assign to items in order; fallback to galleryX
const modules = import.meta.glob('/src/assets/djs/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
  query: '?url'
})
const djImages = Object.values(modules)

const fallbackImg = '/assets/galleryX.jpg'

const base = [
  { time: '21:00 — 22:30', name: 'David Guetta' },
  { time: '22:30 — 00:00', name: 'DJ 2' },
  { time: '00:00 — 01:30', name: 'DJ 3' },
  { time: '01:30 — 03:00', name: 'DJ 4' }
]

const items = base.map((b, i) => ({
  ...b,
  img: (djImages[i] ?? fallbackImg)
}))
</script>
