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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id
          veritatis fuga, aspernatur maiores enim modi commodi asperiores beatae
          esse aliquam voluptatem sunt doloribus ad aut ipsam iure, nostrum
          voluptas!
        </p>
      </div>
    </section>
  </main>
  <article class="more">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum corporis
      ducimus temporibus laudantium nam officia repellat, facere illum iste
      nobis distinctio unde, magni sequi? Repudiandae repellat adipisci quam
      iure.
    </p>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/styles/cart-view.scss";
</style>
