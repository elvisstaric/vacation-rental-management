<template>
  <div class="about">
    <h1>Rezervacija</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="nositelj">Ime nositelja</label>
              <input
                type="text"
                v-model="rezervacija.nositelj"
                class="form-control"
                id="nositelj"
                placeholder="Ime nositelja"
              />
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label for="datum_od">Rezervacija od</label>
                  <input
                    type="date"
                    v-model="rezervacija.rezervacija_od"
                    class="form-control"
                    id="datum_od"
                    placeholder="Rezervacija od"
                  />
                </div>
                <div class="col-6">
                  <label for="datum_do">Rezervacija do</label>
                  <input
                    type="date"
                    v-model="rezervacija.rezervacija_do"
                    class="form-control"
                    id="datum_od"
                    placeholder="Rezervacija od"
                  />
                </div>
              </div>
            </div>
            <br />
            <label for="status_naplate">Status naplate</label>
            <br />
            <div class="form-group">
              <div class="form-check form-check-inline">
                <div class="form-group">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      v-model="rezervacija.naplata"
                      name="inlineRadioOptions"
                      id="opcija-u_cijelosti"
                      value="U cijelosti"
                    />
                    <label class="form-check-label" for="opcija-u_cijelosti"
                      >Plaćeno</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      v-model="rezervacija.naplata"
                      name="inlineRadioOptions"
                      id="opcija-predujam"
                      value="Predujam"
                    />
                    <label class="form-check-label" for="opcija-predujam"
                      >Plaćen predujam</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      v-model="rezervacija.naplata"
                      name="inlineRadioOptions"
                      id="opcija-nije_naplaceno"
                      value="Nije naplaćeno"
                    />
                    <label class="form-check-label" for="opcija-nije_naplaceno"
                      >Nije plaćeno
                    </label>
                  </div>
                </div>
                <br />
              </div>
            </div>

            <div class="form-group">
              <label for="iznos">Iznos</label>
              <input
                type="number"
                step="0.01"
                v-model="rezervacija.iznos"
                class="form-control"
                id="iznos"
                placeholder="Iznos"
              />
              <br />
            </div>
            <br />
            <button type="button" @click="urediRez()" class="btn btn-primary">
              Spremi
            </button>
            <button type="button" @click="obrisiRez()" class="btn btn-primary">
              Obriši
            </button>
            <br />
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
  name: "",
  props: ["id_rez"],
  data() {
    return { rezervacija: {} };
  },
  mounted() {
    this.dohvatiRezervaciju();
  },
  methods: {
    obrisiRez() {
      const podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .delete(BaseUrl + "/rezervacija/" + this.id_rez, {
          headers: podatci.headers,
        })
        .then((response) => {
          this.$router.push(
            `/moji_objekti/objekt/${this.$route.params.id}/rezervacije`
          );
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    urediRez() {
      const podatci_update = {
        podatci: {
          nositelj: this.rezervacija.nositelj,
          rezervacija_od: this.rezervacija.rezervacija_od,
          rezervacija_do: this.rezervacija.rezervacija_do,
          naplata: this.rezervacija.naplata,
          iznos: this.rezervacija.iznos,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      };

      axios
        .patch(
          BaseUrl + "/rezervacija/" + this.id_rez,
          podatci_update.podatci,
          {
            headers: podatci_update.headers,
          }
        )
        .then((response) => {
          this.$router.push(
            `/moji_objekti/objekt/${this.$route.params.id}/rezervacije`
          );
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    dohvatiRezervaciju() {
      let rezervacija = {};
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .get(BaseUrl + `/rezervacija/` + this.id_rez, podatci)
        .then((response) => {
          for (let rez of response.data) {
            this.rezervacija = rez;
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
  },
};
</script>
<style scoped lang="scss">
label {
  font-weight: bold;
}

.form-group {
  width: 400px;
}
button {
  margin-left: 20px;
}
</style>
