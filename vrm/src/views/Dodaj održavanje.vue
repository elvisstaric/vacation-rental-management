<template>
  <div class="about">
    <h1>Novo održavanje</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="naziv">Naziv</label>
              <input
                type="text"
                placeholder="Naziv"
                v-model="naziv"
                class="form-control"
                id="naziv"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="datum">Rok</label>
              <input type="date" v-model="rok" class="form-control" id="rok" />
              <br />
            </div>
            <div class="form-group">
              <label for="naziv">Naziv</label>
              <textarea
                v-model="opis"
                type="text"
                id="opis"
                rows="4"
                cols="50"
                placeholder="Opis"
              ></textarea>
              <br />
            </div>
            <br />
            <button
              type="button"
              @click="dodajOdrzavanje()"
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
let BaseUrl = process.env.VUE_APP_URL;
const axios = require("axios");
export default {
  name: "Dodaj održavanje",

  data() {
    return {
      naziv: "",
      rok: "",
      opis: "",
      id_obj: this.$route.params.id,
    };
  },

  methods: {
    dodajOdrzavanje() {
      let podatci = {
        podatci: {
          naziv: this.naziv,
          rok: this.rok,
          opis: this.opis,
          objekt_id: this.id_obj,
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .post(BaseUrl + "/odrzavanje", podatci, { headers: podatci.headers })
        .then((response) => {
          this.naziv = "";
          this.rok = "";
          this.opis = "";

          this.$router.push({
            path: `/moji_objekti/objekt/${this.$route.params.id}/odrzavanja`,
          });
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
  },
};
</script>
