<template>
  <div class="max-w-3xl mx-auto">
    <LineupGrid :items="items" />
  </div>
</template>

<script setup>
import LineupGrid from './components/LineupGrid.vue'
import lineupData from './dj-lineup.json'

const fallbackImg = '/img/galleryX.jpg'

const items = lineupData.lineup.map((dj) => ({
  ...dj,
  img: `/src/assets/djs/${dj.image}`
}))
</script>
