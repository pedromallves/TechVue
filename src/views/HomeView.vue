<template>
  <main>
    <article class="article">
      <img
        class="article-image"
        src="../assets/images/newsletter/openai-img.png"
        alt="Imagem sobre inteligência artificial"
      />
      <div class="article-info">
        <h1 class="article-title">Novidades</h1>
        <p class="article-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptas
          necessitatibus vero beatae et soluta a, rerum accusamus atque
          quibusdam. Sunt hic, non ratione assumenda corporis explicabo earum
          laborum numquam.
        </p>
        <router-link class="btn" :to="{ name: 'home' }">Saiba mais</router-link>
      </div>
    </article>
    <article class="more">
      <MoreProducts />
    </article>
    <article class="article">
      <div class="article-info">
        <h1 class="article-title">Novidades</h1>
        <p class="article-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptas
          necessitatibus vero beatae et soluta a, rerum accusamus atque
          quibusdam. Sunt hic, non ratione assumenda corporis explicabo earum
          laborum numquam.
        </p>
        <router-link class="btn" :to="{ name: 'home' }">Saiba mais</router-link>
      </div>
      <img
        class="article-image"
        src="../assets/news-example-image.svg"
        alt="imagem de produto"
      />
    </article>

    <article class="article light-bgd">
      <img
        class="article-image"
        src="../assets/about-example-image.svg"
        alt="imagem de produto"
      />
      <div class="article-info">
        <h1 class="article-title">Sobre</h1>
        <p class="article-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad
          porro dignissimos cumque voluptatum id labore dolores mollitia
          pariatur, suscipit unde a est amet enim deserunt officiis excepturi
          quos rerum.
        </p>
      </div>
    </article>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/styles/home-view.scss";
</style>
