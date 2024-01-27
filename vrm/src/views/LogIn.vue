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
let BaseUrl = process.env.VUE_APP_URL;
const axios = require("axios");

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
      axios
        .get(
          BaseUrl + `/korisnik?email=${this.email}&password=${this.password}`
        )
        .then((response) => {
          localStorage.setItem("token", response.data);
          localStorage.setItem("korisnik", this.email);
          this.$router.replace("/").then(() => {
            this.$router.go();
          });
        })
        .catch((error) => {
          alert(error.response.data.error);
          console.log("Error:", error);
        });
    },
  },
};
</script>
