import './main.css'
import { createApp } from 'vue'
import App from './app.vue'
import LineupApp from './lineup-app.vue'

// Mount Sponsors app
const sponsorsEl = document.getElementById('app')
if (sponsorsEl) createApp(App).mount(sponsorsEl)

// Mount Lineup app
const lineupEl = document.getElementById('lineup-app')
if (lineupEl) createApp(LineupApp).mount(lineupEl)
