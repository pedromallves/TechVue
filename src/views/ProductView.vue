<template>
  <main v-if="product">
    <h2 class="title">
      {{ product.name }}
    </h2>
    <section class="mproduct">
      <div class="mproduct-side">
        <img
          @click="changeImage(index)"
          v-for="index in product.qttImages"
          class="mproduct-miniature"
          :src="`/src/assets/images/product/${product.id}/prod-${product.id}${index}.svg`"
          alt="miniatura de produto"
        />
      </div>
      <img
        class="mproduct-image"
        :src="`/src/assets/images/product/${product.id}/prod-${product.id}1.svg`"
        alt="imagem de produto"
      />
      <div class="mproduct-values">
        <h3 class="mproduct-stock" :class="product.availability">
          Disponibilidade:
        </h3>
        <h3 class="mproduct-fprice">{{ prices.price }}</h3>
        <h2 class="mproduct-pprice">{{ prices.discount }}</h2>
        <h3 class="mproduct-discount">{{ prices.inCash }}</h3>
        <h3 class="mproduct-installments">
          Em até 10x de {{ prices.installment }}
        </h3>
        <button
          v-if="product.availability == 'available'"
          class="btn"
          @click="addToCart"
        >
          Comprar
        </button>
      </div>
    </section>
    <section class="descriptions">
      <h2 class="descriptions-title">Descrição do produto</h2>
      <p class="descriptions-text">
        {{ product.description }}
      </p>
    </section>
    <section class="specifications">
      <h2 class="specifications-title">Especificações tecnicas</h2>
      <div v-for="specification in product.specifications">
        <h3 class="specifications-section">
          {{ specification.name }}
        </h3>
        <ul class="specifications-list" v-for="att in specification.values">
          <li class="specifications-item">{{ att.name }}: {{ att.value }}</li>
        </ul>
      </div>
    </section>
    <MoreProducts />
  </main>
  <span v-else>{{ router.push("/404") }}</span>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { getProduct } from "../assets/db/management.js";
import { computed } from "@vue/reactivity";
import { formatCurrency } from "../helpers/helpers.js";

const route = useRoute();
const router = useRouter();
/**
 * Component used to get a specific product
 */
const product = getProduct(parseInt(route.params.id));

/**
 * Computed component containing the formatted prices
 */
const prices = computed(() => {
  const price = product.price;
  return {
    price: formatCurrency(price),
    discount: formatCurrency(price * 0.9),
    installment: formatCurrency(price / 10),
    inCash: formatCurrency(price * 0.85),
  };
});

/**
 * Temporary function to change the image of the product
 */
function changeImage(index) {
  const image = document.querySelector(".mproduct-image");
  image.src = `/src/assets/images/product/${product.id}/prod-${product.id}${index}.svg`;
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/product-view.scss";
</style>
