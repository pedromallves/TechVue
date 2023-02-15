<template>
  <div class="container">
    <main>
      <News :newsletter="NewsExample" />
      <News :newsletter="NewsExample" />
      <News :newsletter="NewsExample" />
      <News :newsletter="NewsExample" />
      <News :newsletter="NewsExample" />
      <News :newsletter="NewsExample" />
    </main>
    <aside class="adv-space">
      <Ads :ads="AdsExample" />
      <Ads :ads="AdsExample" />
      <Ads :ads="AdsExample" />
    </aside>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import News from "../components/News.vue";
import Ads from "../components/Ads.vue";
const NewsExample = reactive({
  id: 1,
  title: "Lorem ipsum dolor sit",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ad? In saepe vel nostrum ab quas sint amet, aspernatur omnis impedit ipsum odio atque temporibus? Necessitatibus rem esse dolor corporis.",
});
const AdsExample = reactive({
  id: 1,
  title: "Lorem ipsum dolor sit",
  src: "/src/assets/advertisement.svg",
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/news-view.scss";
</style>
