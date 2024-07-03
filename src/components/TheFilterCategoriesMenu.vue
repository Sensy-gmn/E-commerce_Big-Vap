<script setup lang="ts">
import { ref } from 'vue'

// Définir les types des données
const categories = ref([
  { id: 1, name: 'Vapoteuses' },
  { id: 2, name: 'Liquides' },
  { id: 5, name: 'Batteries' },
  { id: 6, name: 'Resistances' }
])

const selectedCategory = ref(null)
const manufacturerFilter = ref('')
const minPriceFilter = ref('')
const maxPriceFilter = ref('')
const statusFilter = ref('')

const emit = defineEmits(['updateFilters'])

const applyFilters = () => {
  emit('updateFilters', {
    category: selectedCategory.value,
    manufacturer: manufacturerFilter.value,
    minPrice: minPriceFilter.value,
    maxPrice: maxPriceFilter.value,
    status: statusFilter.value
  })
}

const resetFilters = () => {
  selectedCategory.value = null
  manufacturerFilter.value = ''
  minPriceFilter.value = ''
  maxPriceFilter.value = ''
  statusFilter.value = ''
  applyFilters() // Émettre les filtres réinitialisés
}
</script>

<template>
  <div class="mx-2 w-full">
    <div class="rounded-xl bg-gray-700 p-6 shadow-lg">
      <h2 class="text-white text-2xl font-bold">Affiner votre recherche</h2>
      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="flex flex-col">
          <label for="name" class="text-white text-sm font-medium">Catégorie</label>
          <select
            id="name"
            v-model="selectedCategory"
            class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option :value="null">Toutes</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="flex flex-col">
          <label for="manufacturer" class="text-white text-sm font-medium">Marque</label>
          <input
            v-model="manufacturerFilter"
            type="text"
            id="manufacturer"
            placeholder="Marque"
            class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div class="flex flex-row gap-4">
          <div class="flex flex-col">
            <label for="minPrice" class="text-white text-sm font-medium">Prix Min</label>
            <input
              v-model="minPriceFilter"
              type="number"
              id="minPrice"
              placeholder="Prix Min"
              class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div class="flex flex-col">
            <label for="maxPrice" class="text-white text-sm font-medium">Prix Max</label>
            <input
              v-model="maxPriceFilter"
              type="number"
              id="maxPrice"
              placeholder="Prix Max"
              class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="status" class="text-white text-sm font-medium">Statut</label>
          <select
            v-model="statusFilter"
            id="status"
            class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option>Dispached Out</option>
            <option>In Warehouse</option>
            <option>Being Brought In</option>
          </select>
        </div>
      </div>

      <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
        <button
          @click="applyFilters"
          class="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
        >
          Rechercher
        </button>
        <button
          @click="resetFilters"
          class="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  </div>
</template>
