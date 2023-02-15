<template>
  <router-link :to="{ name: 'home' }" class="newsletter">
    <img class="newsletter-image" :src="src" alt="imagem sobre noticias" />
    <div class="newsletter-text">
      <h1 class="newsletter-title">{{ props.newsletter.title }}</h1>
      <p class="newsletter-description">{{ props.newsletter.description }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  newsletter: {
    id: Number,
    title: String,
    description: String,
  },
});
const src = computed(() => {
  return `/src/assets/images/newsletter/newsletter-${props.newsletter.id}.svg`;
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/news.scss";
</style>
