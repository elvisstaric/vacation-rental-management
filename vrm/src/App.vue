<template>
  <nav>
    <router-link to="/">Home</router-link> |

    <router-link v-if="!store.korisnik" to="/login">Log In</router-link>

    |
    <router-link v-if="!store.korisnik" to="/registracija"
      >Registracija</router-link
    >
    | <router-link to="/dodaj_objekt">Dodavanje objekta</router-link> |
    <router-link to="/dodaj_pers">Dodavanje personala</router-link> |
    <router-link to="/nova_rez">Nova rezervacija</router-link> |

    <a v-if="store.korisnik" href="#" @click.prevent="odjava()">Odjava </a>
  </nav>
  <router-view />
</template>

<style lang="scss">
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
  if (user) {
    console.log("*** User", user.email);
    store.korisnik = user.email;
  } else {
    console.log("*** No user");
    store.korisnik = null;
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
