<template>
  <div class="max-w-3xl mx-auto">
    <LineupGrid :items="lineup" />
  </div>
</template>

<script setup>
import LineupGrid from './components/LineupGrid.vue'
import { lineup } from './lineup-data.js'
</script>
