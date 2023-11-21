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
//import { firebase } from "@/firebase";
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
    /*registracija() {
      if (this.password != this.passwordctrl) {
        alert("Lozinke se ne podudaraju");
      } else if (this.password == this.passwordctrl) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .catch(function (error) {
            console.log(error);
          });
      }
    },*/
  },
};
</script>
