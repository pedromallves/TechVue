<template>
  <main>
    <section class="cart">
      <div class="container">
        <div class="cart-head">
          <h2 class="title">Produtos adicionados</h2>
          <button class="btn">Remover todos</button>
        </div>
        <div class="cart-products">
          <ul class="list">
            <li class="resume">
              <img
                class="miniature"
                src="../assets/images/product/product-1.svg"
                alt="imagem do produto"
              />
              <div class="info">
                <h3 class="brand">Marca</h3>
                <h2 class="name">Nome do produto</h2>
              </div>
              <div class="amount">
                <p class="description">Quantidade</p>
                <div class="change-amount">
                  <button class="amount-btn">&#60;</button>
                  <p class="current-amount">1</p>
                  <button class="amount-btn">&#62;</button>
                </div>
              </div>
              <div class="price">
                <p class="text">Valor total do produto</p>
                <h3 class="current-price">R$ 0,00</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="payment">
      <div class="container">
        <div class="price">
          <h2 class="title">Resumo</h2>
          <div class="space-between">
            <h3 class="desc">Valor dos produtos:</h3>
            <h3 class="price">R$ 1000.00</h3>
          </div>
          <div class="space-between">
            <h3 class="desc">Valor parcelado:</h3>
            <h3 class="price">10x de R$ 100.00</h3>
          </div>
        </div>
        <div class="purchase">
          <h3 class="desc">valor a vista:</h3>
          <h2 class="price">R$900.00</h2>
          <button class="btn">Finalizar compra</button>
          <button class="btn">Continuar comprando</button>
        </div>
      </div>
    </section>
  </main>
  <article class="more">
    <MoreProducts />
  </article>
</template>

<script setup>
import MoreProducts from "../components/MoreProducts.vue";
</script>

<style lang="scss" scoped>
@use "../assets/styles/cart-view.scss";
</style>
