<script setup></script>

<template>
  <header class="menu">
    <router-link :to="{ name: 'home' }" class="link-nav"
      ><h1 class="title">TechVu</h1></router-link
    >
    <nav>
      <router-link :to="{ name: 'news' }" class="link-nav"
        >Novidades</router-link
      >
      <router-link :to="{ name: 'products' }" class="link-nav"
        >Produtos</router-link
      >
      <router-link :to="{ name: 'cart' }" class="link-nav"
        >Carrinho</router-link
      >
      <!--to do:
          <router-link :to="{ name: 'profile' }">Perfil</router-link>
        -->
    </nav>
  </header>
  <router-view />
  <footer class="foo">
    <h1 class="foo-title">Entre em contato:</h1>
    <ul class="social">
      <li>Linkedin: exemplo</li>
      <li>GitHub: exemplo</li>
      <li>Email: exemplo</li>
    </ul>
    <p class="copyright">@ 2023 TechVue</p>
  </footer>
</template>

<style lang="scss" scoped>
@use "./assets/styles/main.scss";
</style>
