<template>
  <div class="about">
    <h1>Novo čišćenje</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="datum">Datum</label>
              <input
                type="date"
                v-model="datum"
                class="form-control"
                id="datum"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="trajanje">Trajanje čišćenja</label>
              <input
                type="number"
                v-model="trajanje"
                class="form-control"
                placeholder="Trajanje čišćenja"
                id="trajanje"
              />
              <br />
            </div>
            <div class="form-group">
              <label>Personal</label>
              <br /><br />
              <div v-for="osoba in osobe" :key="osoba._id" :osoba="osobe">
                <input
                  type="checkbox"
                  v-model="personal"
                  :id="osoba._id"
                  :name="osoba.ime"
                  :value="osoba._id"
                />
                <label :for="osoba._id"
                  >{{ osoba.ime }} {{ " " }}{{ osoba.prezime }}</label
                >
                <br />
                <br />
              </div>
            </div>

            <button
              type="button"
              @click="dodajCiscenje()"
              class="btn btn-primary"
            >
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
// @ is an alias to /src
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");
export default {
  name: "Dodaj čišćenje",

  data() {
    return {
      datum: "",
      trajanje: "",
      id_obj: this.$route.params.id,
      personal: [],
      osobe: [],
    };
  },
  mounted() {
    this.dohvatiPers();
  },
  methods: {
    dodajCiscenje() {
      let podatci = {
        podatci: {
          objekt_id: this.id_obj,
          datum: this.datum,
          trajanje: this.trajanje,
          personal: this.personal,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .post(BaseUrl + "/ciscenje", podatci, { headers: podatci.headers })
        .then((response) => {
          this.datum = "";
          this.trajanje = "";
          this.personal = [];

          this.$router.push({
            path: `/moji_objekti/objekt/${this.$route.params.id}/ciscenja`,
          });
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },

    dohvatiPers() {
      let osobe = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
          korisnik: localStorage.getItem("korisnik"),
        },
      };

      axios
        .get(BaseUrl + `/osoba`, podatci)
        .then((response) => {
          for (let osoba of response.data) {
            this.osobe.push(osoba);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
  },
};
</script>
