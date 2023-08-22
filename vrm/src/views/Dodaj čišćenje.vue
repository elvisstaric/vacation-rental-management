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
              <div v-for="osoba in osobe" :key="osoba.id" :osoba="osobe">
                <input
                  type="checkbox"
                  v-model="personal"
                  :id="osoba.id"
                  :name="osoba.ime"
                  :value="osoba.id"
                />
                <label :for="osoba.id"
                  >{{ osoba.ime }}{{ osoba.prezime }}</label
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
import { baza } from "@/firebase";
import store from "@/store";
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
      baza
        .collection("ciscenja")
        .add({
          objekt_id: this.id_obj,
          datum: this.datum,
          trajanje: this.trajanje,
          personal: this.personal,
        })
        .then((spremljeno) => {
          console.log("Spremljeno", spremljeno);
          this.datum = "";
          this.trajanje = "";
          this.personal = [];

          this.$router.push({
            path: `/moji_objekti/objekt/${this.$route.params.id}/ciscenja`,
          });
        })
        .catch((greska) => {
          console.error("Greška", greska);
        });
    },

    dohvatiPers() {
      let osobe = [];

      baza
        .collection("personal")
        .where("korisnik", "==", store.korisnik)
        .orderBy("prezime", "asc")
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let osoba = {
              id: doc.id,
              ime: podatci.ime,
              prezime: podatci.prezime,
            };

            this.osobe.push(osoba);
          });
        });
    },
  },
};
</script>
