<template>
  <li class="resume" v-if="amount > 0">
    <img class="miniature" :src="comp.src" alt="imagem do produto" />
    <div class="info">
      <h3 class="brand">{{ props.product.brand }}</h3>
      <h2 class="name">{{ props.product.name }}</h2>
    </div>
    <div class="amount">
      <p class="description">Quantidade</p>
      <div class="change-amount">
        <button @click="remove" class="amount-btn">&#60;</button>
        <p class="current-amount">{{ amount }}</p>
        <button @click="add" class="amount-btn">&#62;</button>
      </div>
      <button @click="deleteProd" class="delete">Remover</button>
    </div>
    <div class="price">
      <p class="text">Valor total do produto</p>
      <h3 class="current-price">{{ comp.total }}</h3>
    </div>
  </li>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { formatCurrency } from "../helpers/helpers";
import { ref } from "vue";

const emit = defineEmits(["remove", "add", "delete"]);

/**
 * This component is used to show the products added to the cart
 * and to monitor the changes of each product
 */
const amount = ref(
  $cookies.get("cart").find((prod) => prod.id === props.product.id).amount
);
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

/**
 * Computed property with the total value of the product and the image path
 */
const comp = computed(() => {
  return {
    src: `/src/assets/images/product/${props.product.id}/prod-${props.product.id}1.svg`,
    total: formatCurrency(props.product.price * amount.value),
    totalNumber: props.product.price * amount.value,
  };
});

/**
 * Function to remove a product unit from the cart
 */
function remove() {
  if (amount.value > 1) {
    const cart = $cookies.get("cart");
    const index = cart.findIndex((prod) => prod.id === props.product.id);
    cart[index].amount = amount.value - 1;
    console.log(cart);
    $cookies.set("cart", cart);
    amount.value--;
    emit("remove");
    return;
  }
}

/**
 * Function to add a product unit to the cart
 */
function add() {
  const cart = $cookies.get("cart");
  const index = cart.findIndex((prod) => prod.id === props.product.id);
  cart[index].amount = amount.value + 1;
  $cookies.set("cart", cart);
  amount.value++;
  emit("add");
}

/**
 * Function to delete the product from the cart
 */
function deleteProd() {
  const cart = $cookies.get("cart");
  const index = cart.findIndex((prod) => prod.id === props.product.id);
  cart.splice(index, 1);
  $cookies.set("cart", cart);
  emit("delete", comp.value.totalNumber);
  amount.value = 0;
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/cart-product.scss";
</style>
