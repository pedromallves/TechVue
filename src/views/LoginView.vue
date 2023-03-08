<template>
  <main class="center">
    <section class="container">
      <div class="f-section">
        <h1>Entrar</h1>
        <form class="form">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <div class="psw">
            <input
              type="password"
              id="password"
              name="Password"
              placeholder="senha"
              required
            />
            <button type="button" class="show-icon">&#128065;</button>
          </div>
          <button type="submit" class="btn">Entrar</button>
          <button class="change" type="button">Registrar</button>
        </form>
      </div>
      <div class="f-section">
        <h1>Registrar</h1>
        <form class="form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <div class="psw">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            />
            <button type="button" class="show-icon">&#128065;</button>
          </div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            required
          />
          <button type="submit" class="btn">Registrar</button>
          <button class="change" type="button">Entrar</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/styles/login-view.scss";
</style>
