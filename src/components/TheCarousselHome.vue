<script setup lang="ts">
import { ref } from 'vue'

const images = ref(['image1.jpg', 'image2.jpg', 'image3.jpg'])

const currentIndex = ref(0)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
</script>

<template>
  <div>
    <h1>le Caroussel</h1>
    <div class="carousel">
      <button @click="prevImage">Previous</button>
      <img :src="images[currentIndex]" alt="carousel image" />
      <button @click="nextImage">Next</button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
}

.carousel img {
  max-width: 100%;
  height: auto;
}
</style>
