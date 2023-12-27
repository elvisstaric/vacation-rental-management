<template>
  <div class="bg">
    <nav>
      <router-link to="/">Home</router-link>
      <!-- v-if="store.korisnik" -->
      <router-link to="/login">Log In</router-link>
      <!--v-if="!store.korisnik"  -->
      |
      <router-link to="/registracija">Registracija</router-link>
      <!-- v-if="!store.korisnik" -->

      <a href="#" @click.prevent="odjava()">Odjava </a>
      <!-- v-if="store.korisnik" -->
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
import { firebase } from "@/firebase";
import store from "@/store";
import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const ruta = router.currentRoute;

  if (user) {
    console.log("*** User", user.email);
    store.korisnik = user.email;

    if (!ruta.value.meta.needsUser) {
      router.push("/");
    }
  } else {
    console.log("*** No user");
    store.korisnik = null;

    if (ruta.value.meta.needsUser) {
      router.push("/login");
    }
  }
});

export default {
  name: "VRM",
  data() {
    return {
      store,
    };
  },
  methods: {
    odjava() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/login");
        });
    },
  },
};
</script>
