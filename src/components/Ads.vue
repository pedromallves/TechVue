<template>
  <a href="#" class="adv">
    <img class="adv-image" :src="props.ads.src" alt="exemplo de anuncio" />
    <h2 class="adv-title">{{ props.ads.title }}</h2>
  </a>
</template>

<script setup>
const props = defineProps({
  ads: {
    id: Number,
    title: String,
    src: String,
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/ads.scss";
</style>
