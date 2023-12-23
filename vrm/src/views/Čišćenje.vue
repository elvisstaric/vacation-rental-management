<template>
  <div class="about">
    <h1>Čišćenje</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="datum">Datum</label>
              <input
                type="date"
                v-model="ciscenje.datum"
                class="form-control"
                id="datum"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="trajanje">Trajanje čišćenja</label>
              <input
                type="number"
                v-model="ciscenje.trajanje"
                class="form-control"
                id="trajanje"
              />
              <br />
            </div>
            <label for="personal">Personal</label>
            <div v-for="osoba in osobe" :key="osoba" :osoba="osobe">
              <div>
                <input
                  type="checkbox"
                  v-model="ciscenje.personal"
                  :id="osoba.id"
                  :name="osoba.ime"
                  :value="osoba.id"
                />
                <label :for="osoba.id"
                  >{{ osoba.ime }} {{ osoba.prezime }}</label
                >
                <br />
              </div>
            </div>
            <br />
            <button
              type="button"
              @click="urediCiscenje()"
              class="btn btn-primary"
            >
              Spremi
            </button>
            <button
              type="button"
              @click="obrisiCiscenje()"
              class="btn btn-primary"
            >
              Obriši
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");
import store from "@/store";

export default {
  name: "",
  props: ["id_ciscenje"],
  data() {
    return { ciscenje: [], osobe: [] };
  },
  mounted() {
    this.dohvatiCiscenje();
    this.dohvatiPers();
  },
  methods: {
    obrisiCiscenje() {
      baza
        .collection("ciscenja")
        .doc(this.id_ciscenje)
        .delete()
        .then(() => {
          console.log("Obrisano");
          this.$router.push(
            `/moji_objekti/objekt/${this.$route.params.id}/ciscenja`
          );
        })
        .catch((error) => {
          console.error("Greška ", error);
        });
    },
    urediCiscenje() {
      baza
        .collection("ciscenja")
        .doc(this.id_ciscenje)
        .update({
          datum: this.ciscenje.datum,
          trajanje: this.ciscenje.trajanje,
          personal: this.ciscenje.personal,
        })
        .then(() => {
          console.log("Spremljeno");
          this.$router.push(
            `/moji_objekti/objekt/${this.$route.params.id}/ciscenja`
          );
        })
        .catch((error) => {
          console.error("Greška ", error);
        });
    },
    dohvatiCiscenje() {
      let ciscenje = [];
      axios
        .get(BaseUrl + `/ciscenje/` + this.id_ciscenje)
        .then((response) => {
          for (let ciscenje of response.data) {
            this.ciscenje = ciscenje;
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    dohvatiPers() {
      let osobe = [];

      axios
        .get(BaseUrl + `/osoba`)
        .then((response) => {
          for (let podatci of response.data) {
            let osoba = {
              id: podatci._id,
              ime: podatci.ime,
              prezime: podatci.prezime,
            };

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
<style scoped lang="scss">
label {
  font-weight: bold;
}
p {
  margin: auto;
}
.row {
  margin: auto;
  width: 40%;
}
button {
  margin-left: 20px;
}
</style>
