<template>
  <div class="bg">
    <nav>
      <router-link v-if="auth.autorizacija" to="/">Home</router-link>

      <router-link v-if="!auth.autorizacija" to="/login">Log In</router-link>

      |
      <router-link v-if="!auth.autorizacija" to="/registracija"
        >Registracija</router-link
      >

      <a href="#" v-if="auth.autorizacija" @click.prevent="odjava()">Odjava </a>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
.bg {
  background: url("./assets/pozadina.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import store from "@/store";

export default {
  name: "VRM",
  data() {
    return {
      auth: store.status,
    };
  },
  methods: {
    odjava() {
      localStorage.removeItem("token");
      localStorage.removeItem("korisnik");
      this.$router.go();
    },
  },
};
</script>
