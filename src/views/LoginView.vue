<template>
  <main class="center">
    <section class="container">
      <div id="login" class="f-section">
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
            <button type="button" class="show-icon" @click="showPassword">
              &#128065;
            </button>
          </div>
          <button type="submit" class="btn">Entrar</button>
          <button class="change" type="button" @click="toggle">
            Registrar
          </button>
        </form>
      </div>
      <div id="register" class="f-section hidden">
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
            <button type="button" class="show-icon" @click="showPassword">
              &#128065;
            </button>
          </div>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            required
          />
          <button type="submit" class="btn">Registrar</button>
          <button class="change" type="button" @click="toggle">Entrar</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
const toggle = () => {
  const login = document.getElementById("login");
  const register = document.getElementById("register");
  if (login.classList.contains("hidden")) {
    login.classList.remove("hidden");
    register.classList.add("hidden");
  } else {
    login.classList.add("hidden");
    register.classList.remove("hidden");
  }
};
const showPassword = () => {
  const password = document.querySelectorAll("#password")[0];
  const regPassword = document.querySelectorAll("#password")[1];
  if (password.type === "password" || regPassword.type === "password") {
    password.type = "text";
    regPassword.type = "text";
  } else {
    password.type = "password";
    regPassword.type = "password";
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/login-view.scss";
</style>
