<template>
  <main>
    <ul class="products">
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
      <Product :product="product" />
    </ul>
    <div></div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import Product from "../components/Product.vue";
const product = reactive({
  id: 1,
  brand: "Lorem ipsum",
  name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, modi eius. Quam laudantium iure laboriosam dignissimos facere id",
  price: 1000,
}); //example of product
</script>

<style lang="scss" scoped>
@use "../assets/styles/products-view.scss";
</style>
