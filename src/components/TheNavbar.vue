<script setup lang="ts">
import { ref } from 'vue'

const showSubMenu1 = ref(false)
const showSubMenu2 = ref(false)
const showSubMenu3 = ref(false)
</script>

<template>
  <div>
    <nav class="flex justify-between items-center bg-blue-dark text-off-white h-20 px-10">
      <div class="flex space-x-10 items-center">
        <div
          class="relative"
          @mouseover="
            {
              ;(showSubMenu1 = true), (showSubMenu2 = false), (showSubMenu3 = false)
            }
          "
        >
          <router-link to="/" class="text-2xl">Accueil</router-link>
          <div
            v-show="showSubMenu1"
            class="absolute bg-white text-black mt-2 py-2 w-48"
            @mouseover="showSubMenu1 = true"
            @mouseleave="showSubMenu1 = false"
          >
            <router-link to="/subpage1" class="block px-4 py-2">Subpage 1</router-link>
            <router-link to="/subpage2" class="block px-4 py-2">Subpage 2</router-link>
          </div>
        </div>
        <div
          class="relative"
          @mouseover="
            {
              ;(showSubMenu1 = false), (showSubMenu2 = true), (showSubMenu3 = false)
            }
          "
        >
          <router-link to="/cigarettes" class="text-2xl">Vapoteuses</router-link>
          <div
            v-show="showSubMenu2"
            class="absolute bg-white text-black mt-2 py-2 w-48"
            @mouseover="showSubMenu2 = true"
            @mouseleave="showSubMenu2 = false"
          >
            <router-link to="/subpage3" class="block px-4 py-2">Subpage 3</router-link>
            <router-link to="/subpage4" class="block px-4 py-2">Subpage 4</router-link>
          </div>
        </div>
        <div
          class="relative"
          @mouseover="
            {
              ;(showSubMenu1 = false), (showSubMenu2 = false), (showSubMenu3 = true)
            }
          "
        >
          <router-link to="/liquides" class="text-2xl">Liquides</router-link>
          <div
            v-show="showSubMenu3"
            class="absolute bg-white text-black mt-2 py-2 w-48"
            @mouseover="showSubMenu3 = true"
            @mouseleave="showSubMenu3 = false"
          >
            <router-link to="/subpage5" class="block px-4 py-2">Subpage 5</router-link>
            <router-link to="/subpage6" class="block px-4 py-2">Subpage 6</router-link>
          </div>
        </div>
      </div>
      <div class="flex space-x-10 items-center">
        <router-link to="/connexion" class="text-2xl">connexion</router-link>
        <router-link to="/inscription" class="text-2xl">inscription</router-link>
      </div>
    </nav>
  </div>
</template>
