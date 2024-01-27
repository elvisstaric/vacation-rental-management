<template>
  <div class="about">
    <h1>Nova rezervacija</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="nositelj">Ime nositelja</label>
              <input
                type="text"
                v-model="rezNositelj"
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
                    v-model="rezOd"
                    class="form-control"
                    id="datum_od"
                    placeholder="Rezervacija od"
                  />
                </div>
                <div class="col-6">
                  <label for="datum_do">Rezervacija do</label>
                  <input
                    type="date"
                    v-model="rezDo"
                    class="form-control"
                    id="datum_do"
                    placeholder="Rezervacija do"
                  />
                </div>
              </div>
            </div>
            <br />
            <label for="status_naplate">Status naplate</label>
            <br />
            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="rezNaplata"
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
                  v-model="rezNaplata"
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
                  v-model="rezNaplata"
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
            <div class="form-group">
              <label for="iznos">Iznos</label>
              <input
                type="number"
                step="0.01"
                v-model="rezIznos"
                class="form-control"
                id="iznos"
                placeholder="Iznos"
              />
              <br />
            </div>
            <br />
            <button type="button" @click="dodajRez()" class="btn btn-primary">
              Dodaj
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
let BaseUrl = process.env.VUE_APP_URL;
const axios = require("axios");
export default {
  name: "",

  data: function () {
    return {
      id: this.$route.params.id,
      rezNositelj: "",
      rezOd: "",
      rezDo: "",
      rezNaplata: "",
      rezIznos: "",
    };
  },

  methods: {
    dodajRez() {
      let podatci = {
        podatci: {
          objekt_id: this.id,
          nositelj: this.rezNositelj,
          rezervacija_od: this.rezOd,
          rezervacija_do: this.rezDo,
          naplata: this.rezNaplata,
          iznos: this.rezIznos,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .post(BaseUrl + "/rezervacija", podatci, { headers: podatci.headers })
        .then((response) => {
          this.$router.push({
            path: `/moji_objekti/objekt/${this.$route.params.id}/rezervacije`,
          });
          this.objekt_id = "";
          this.rezNositelj = "";
          this.rezOd = "";
          this.rezDo = "";
          this.rezNaplata = "";
          this.rezIznos = "";
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
  },
};
</script>
