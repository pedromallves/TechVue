<template>
  <main>
    <h2 class="title">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore
      necessitatibus nobis repellat debitis libero mollitia enim est blanditiis?
      Culpa consequatur sapiente, inventore laborum minus id eos quisquam fugiat
      maxime!
    </h2>
    <section class="mproduct">
      <div class="mproduct-side">
        <img
          class="mproduct-miniature"
          src="../assets/images/product/product-1.svg"
          alt="miniatura de produto"
        />
        <img
          class="mproduct-miniature"
          src="../assets/images/product/product-1.svg"
          alt="miniatura de produto"
        />
        <img
          class="mproduct-miniature"
          src="../assets/images/product/product-1.svg"
          alt="miniatura de produto"
        />
      </div>
      <img
        class="mproduct-image"
        src="../assets/images/product/product-1.svg"
        alt="imagem de produto"
      />
      <div class="mproduct-values">
        <h3 class="mproduct-stock stock">Disponibilidade:</h3>
        <h3 class="mproduct-fprice">Preço sem desconto</h3>
        <h2 class="mproduct-pprice">Preço com desconto</h2>
        <h3 class="mproduct-discount">Desconto a vista</h3>
        <h3 class="mproduct-dprice">Preço com desconto</h3>
        <h3 class="mproduct-installments">Preço parcelado</h3>
        <button class="btn">Comprar</button>
      </div>
    </section>
    <section class="descriptions">
      <h2 class="descriptions-title">Descrição do produto</h2>
      <h2 class="descriptions-name">Lorem ipsum dolor sit</h2>
      <p class="descriptions-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et
        doloribus blanditiis laborum pariatur placeat quam atque iure aliquid,
        at esse ipsum sint assumenda impedit, architecto quas debitis error
        harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        minima recusandae in repellendus vitae. Illum eligendi fuga quis
        doloremque laborum unde tempora totam veniam. Recusandae dicta minima
        ullam eum temporibus?
      </p>
      <h2 class="descriptions-name">Lorem ipsum, dolor sit amet</h2>
      <p class="descriptions-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        recusandae, quisquam nemo suscipit quos debitis possimus fugiat iure
        tempora aliquam officiis eum dolor earum magnam quam voluptate nisi
        laborum aperiam.
      </p>
    </section>
    <section class="specifications">
      <h2 class="specifications-title">Especificações tecnicas</h2>
      <h3 class="specifications-section">Lorem ipsum, dolor sit amet</h3>
      <ul class="specifications-list">
        <li class="specifications-item">Lorem ipsum dolor</li>
        <li class="specifications-item">Lorem ipsum dolor</li>
        <li class="specifications-item">Lorem ipsum dolor</li>
      </ul>
      <h3 class="specifications-section">Lorem ipsum, dolor sit amet</h3>
      <ul class="specifications-list">
        <li class="specifications-item">Lorem ipsum dolor</li>
        <li class="specifications-item">Lorem ipsum dolor</li>
        <li class="specifications-item">Lorem ipsum dolor</li>
        <li class="specifications-item">Lorem ipsum dolor</li>
      </ul>
      <h3 class="specifications-section">Lorem ipsum, dolor sit amet</h3>
      <ul class="specifications-list">
        <li class="specifications-item">Lorem ipsum dolor</li>
        <li class="specifications-item">Lorem ipsum dolor</li>
      </ul>
    </section>
    <section class="products">
      <div class="products-nav">
        <h2 class="products-title">Outros produtos</h2>
        <button class="btn">ver mais produtos</button>
      </div>
      <div class="products-section">
        <Product class="product" :product="product" />
        <Product class="product" :product="product" />
        <Product class="product" :product="product" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import Product from "../components/Product.vue";

const product = reactive({
  id: 1,
  name: "Lorem ipsum dolor sit amet",
  price: 100,
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/product-view.scss";
@use "../assets/styles/models.scss";
</style>
