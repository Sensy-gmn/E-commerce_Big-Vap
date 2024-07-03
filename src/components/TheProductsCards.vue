<script setup lang="ts">
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import TheFilterCategoriesMenu from './TheFilterCategoriesMenu.vue'

// Définir les types des données
interface Product {
  id: number
  marque: string
  categorie: number
  prix: number
  titre: string
  description: string
  src: string
}

interface Category {
  id: number
  name: string
}

interface Image {
  description: string
  id: number
  produit_id: number
  src: string
}

const products = ref<Product[]>([])
const categories = ref<Category[]>([])
const images = ref<Image[]>([])

// Variables de filtre
const selectedCategory = ref<number | null>(null)
const manufacturerFilter = ref<string>('')
const minPriceFilter = ref<number | null>(null)
const maxPriceFilter = ref<number | null>(null)
const statusFilter = ref<string>('')

// Méthode pour filtrer les produits
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesCategory =
      selectedCategory.value === null || product.categorie === selectedCategory.value
    const matchesManufacturer =
      manufacturerFilter.value === '' || product.marque.includes(manufacturerFilter.value)
    const matchesPrice =
      (minPriceFilter.value === null || product.prix >= minPriceFilter.value) &&
      (maxPriceFilter.value === null || product.prix <= maxPriceFilter.value)
    // Ajoutez d'autres critères de filtre ici si nécessaire
    return matchesCategory && matchesManufacturer && matchesPrice
  })
})

const updateFilters = (filters: {
  category: number | null
  manufacturer: string
  minPrice: number | null
  maxPrice: number | null
  status: string
}) => {
  selectedCategory.value = filters.category
  manufacturerFilter.value = filters.manufacturer
  minPriceFilter.value = filters.minPrice
  maxPriceFilter.value = filters.maxPrice
  statusFilter.value = filters.status
}

onMounted(async () => {
  try {
    console.log('Fetching data from API...')
    const [productsResponse, categoriesResponse, imagesResponse] = await Promise.all([
      axios.get<Product[]>('http://localhost:3000/api/products'),
      axios.get<Category[]>('http://localhost:3000/api/categorie'),
      axios.get<Image[]>('http://localhost:3000/api/image')
    ])
    console.log('Products:', productsResponse.data)
    console.log('Categories:', categoriesResponse.data)
    console.log('Images:', imagesResponse.data)
    products.value = productsResponse.data
    categories.value = categoriesResponse.data
    images.value = imagesResponse.data
  } catch (error) {
    const err = error as any
    if (err.response && err.response.status === 404) {
      console.error('Point de terminaison des images non trouvé:', err)
    } else {
      console.error('Erreur lors de la récupération des données:', err)
    }
  }
})
</script>

<template>
  <div>
    <h1 class="text-4xl text-center mt-10 text-mint-green">Tous les produits</h1>
    <!-- Filtre de RECHERCHE -->
    <TheFilterCategoriesMenu @updateFilters="updateFilters" />
    <div class="flex flex-wrap justify-center gap-10 mt-20">
      <p v-if="filteredProducts.length === 0" class="text-4xl text-center mt-10 text-white">
        Aucun produit trouvé
      </p>
      <!-- BOUCLAGE SUR CARDS DES PRODUITS -->
      <div
        v-for="item in filteredProducts"
        :key="item.id"
        class="flex flex-col bg-white p-4 rounded-md shadow-md w-1/2 lg:w-1/4 h-full"
      >
        <h2 class="text-2xl font-bold">{{ item.titre }}</h2>
        <p class="text-2xl mt-3">
          {{ categories.find((category) => category.id === item.categorie)?.name }}
        </p>
        <p class="text-lg mt-3">Marque : {{ item.marque }}</p>
        <p class="text-lg">Prix : {{ item.prix }} €</p>
        <div v-for="image in images.filter((img) => img.produit_id === item.id)" :key="image.id">
          <img :src="image.src" :alt="image.description" class="w-full h-auto mt-2" />
        </div>

        <div class="flex justify-between">
          <button class="flex bg-blue-500 text-white p-2 rounded-md mt-5">
            Ajouter -
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          <button class="bg-gray-800 text-white p-2 rounded-md mt-5">Voir plus</button>
        </div>
      </div>
    </div>
  </div>
</template>
