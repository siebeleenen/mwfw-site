// Gedeelde line-updata: gebruikt door de line-up-pagina én de swipe-kaarten op de homepage
import lineupData from './dj-lineup.json'

// Alle DJ-foto's uit src/assets/djs (Vite geeft er een geoptimaliseerde URL voor)
const djImageModules = import.meta.glob('/src/assets/djs/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default'
})

const djImageMap = {}
for (const [path, image] of Object.entries(djImageModules)) {
  djImageMap[path.split('/').pop()] = image
}

const fallbackImg = '/img/poster.jpg'

// "RUBY XX" → "ruby-xx": gebruikt voor directe links zoals lineup.html#ruby-xx
const slugify = (text) =>
  text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

export const lineup = lineupData.lineup.map((dj) => ({
  ...dj,
  slug: slugify(dj.name),
  img: djImageMap[dj.image] || fallbackImg,
  detailImg: djImageMap[dj.detailImage] || djImageMap[dj.image] || fallbackImg
}))
