<template>
  <div class="about">
    <h1>Prijava</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="elmail">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
                placeholder="E-mail(netko@example.com)"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="password">Lozinka</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="password"
                placeholder="Lozinka"
              />
            </div>
            <br />
            <button type="button" @click="prijava" class="btn btn-primary">
              Prijava
            </button>
            <br />
            <small id="emailHelp" class="form-text text-muted"
              >Nemate račun?
              <router-link to="/registracija"
                >Registrirajte se.</router-link
              ></small
            >
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
export default {
  name: "Prijava",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    prijava() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((rez) => {
          this.$router.replace("/");
        })
        .catch((error) => {
          console.error("Greška", error);
        });
    },
  },
};
</script>
