<template>
  <main class="center">
    <section class="container">
      <div v-if="menu.switchLoginRegister == true" class="f-section">
        <h1>Entrar</h1>
        <form id="sendLogin" @submit.prevent="sendLogin" class="form">
          <input
            type="email"
            v-model="menu.login.email"
            name="email"
            placeholder="Email"
            required
          />
          <div class="psw">
            <input
              :type="menu.inputType"
              v-model="menu.login.password"
              name="Password"
              placeholder="senha"
              required
            />
            <button
              type="button"
              class="show-icon"
              @click="menu.inputType = 'text'"
              @mouseout="menu.inputType = 'password'"
            >
              &#128065;
            </button>
          </div>
          <button type="submit" class="btn">Entrar</button>
          <button
            class="change"
            type="button"
            @click="() => (menu.switchLoginRegister = false)"
          >
            Registrar
          </button>
        </form>
      </div>
      <div v-else class="f-section">
        <h1>Registrar</h1>
        <form id="sendRegister" @submit.prevent="sendRegister" class="form">
          <input
            type="text"
            v-model="menu.register.name"
            name="name"
            placeholder="Nome"
            required
          />
          <input
            type="email"
            v-model="menu.register.email"
            name="email"
            placeholder="Email"
            required
          />
          <div class="psw">
            <input
              :type="menu.inputType"
              v-model="menu.register.password"
              name="password"
              placeholder="Senha"
              required
            />
            <button
              type="button"
              class="show-icon"
              @click="menu.inputType = 'text'"
              @mouseout="menu.inputType = 'password'"
            >
              &#128065;
            </button>
          </div>
          <input
            type="password"
            v-model="menu.register.confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            required
          />
          <button type="submit" class="btn">Registrar</button>
          <button
            class="change"
            type="button"
            @click="() => (menu.switchLoginRegister = true)"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";

/**
 * Object conaining all the reactive data used for changes and form submission
 */
const menu = reactive({
  switchLoginRegister: true,
  inputType: "password",
  login: {
    email: "",
    password: "",
  },
  register: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
});

//temporary
const sendLogin = async () => {
  axios
    .post("login", menu.login)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

//temporary
const sendRegister = async () => {
  if (menu.register.password !== menu.register.confirmPassword) {
    alert("Senhas não conferem");
    return;
  }
  axios
    .post("register", menu.register)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/login-view.scss";
</style>
