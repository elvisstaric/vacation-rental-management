<template>
  <div class="about">
    <h1>Registracija</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="Email">Email</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="Email"
                aria-describedby="emailHelp"
                placeholder="E-mail(netko@example.com)"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="Password1">Lozinka</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="Password"
                placeholder="Lozinka"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="Passwordctrl">Potvrda lozinke</label>
              <input
                type="password"
                v-model="passwordctrl"
                class="form-control"
                id="Passwordctrl"
                placeholder="Potvrda lozinke"
              />
            </div>
            <br />
            <button type="button" @click="registracija" class="btn btn-primary">
              Registracija
            </button>
            <br />
            <small id="emailHelp" class="form-text text-muted"
              >Već imate račun?
              <router-link to="/login">Prijavite se.</router-link></small
            >
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");

export default {
  name: "Registracija",
  data() {
    return {
      email: "",
      password: "",
      passwordctrl: "",
    };
  },
  methods: {
    registracija() {
      if (this.password != this.passwordctrl) {
        alert("Lozinke se ne podudaraju");
      } else if (!this.password) {
        alert("Unesite lozinku!");
      } else if (this.password.length < 6) {
        alert("Lozinka mora imati barem 6 znakova!");
      } else if (
        this.password == this.passwordctrl &&
        this.password &&
        this.password.length >= 6
      ) {
        const podatci = {
          email: this.email,
          password: this.password,
        };
        axios
          .post(BaseUrl + "/korisnik", podatci)
          .then((response) => {
            alert("Korisnik uspiješno registriran.");
            console.log("Response:", response.data);
          })
          .catch((error) => {
            alert(error.response.data.error);
            console.log("Error:", error);
          });
      }
    },
  },
};
</script>
