import './main.css'
import { createApp } from 'vue'
import App from './app.vue'
import LineupApp from './lineup-app.vue'
import InfoApp from './components/InfoApp.vue'
import TicketsApp from './components/TicketsApp.vue'
import PraktischApp from './components/PraktischApp.vue'

// Mount Sponsors app
const sponsorsEl = document.getElementById('app')
if (sponsorsEl) createApp(App).mount(sponsorsEl)

// Mount Lineup app
const lineupEl = document.getElementById('lineup-app')
if (lineupEl) createApp(LineupApp).mount(lineupEl)

// Mount Info app
const infoEl = document.getElementById('info-app')
if (infoEl) createApp(InfoApp).mount(infoEl)

// Mount Tickets app
const ticketsEl = document.getElementById('tickets-app')
if (ticketsEl) createApp(TicketsApp).mount(ticketsEl)

// Mount Praktisch app
const praktischEl = document.getElementById('praktisch-app')
if (praktischEl) createApp(PraktischApp).mount(praktischEl)