<template>
  <div class="about">
    <h1>Čišćenje</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="datum">Datum</label>
              <p>{{ ciscenje.datum }}</p>
              <br />
            </div>
            <label for="personal">Personal</label>
            <div v-for="osoba_id in ciscenje.personal" :key="osoba_id">
              <div v-for="osoba in osobe" :key="osoba" :osoba="osobe">
                <p v-if="osoba_id == osoba.id">
                  {{ osoba.ime }} {{ osoba.prezime }}
                </p>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check form-check-inline">
                <p></p>
              </div>
            </div>
            <br />

            <button
              type="button"
              @click="obrisiCiscenje()"
              class="btn btn-primary"
            >
              Obriši
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { baza } from "@/firebase";

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
    dohvatiCiscenje() {
      let ciscenje = [];
      baza
        .collection("ciscenja")
        .doc(this.id_ciscenje)
        .get()
        .then((rez) => {
          this.ciscenje = rez.data();
          this.ciscenje.id = this.id_ciscenje;
          console.log(this.ciscenje);
        });
    },
    dohvatiPers() {
      let osobe = [];

      baza
        .collection("personal")
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
<style scoped lang="scss">
label {
  font-weight: bold;
}
p {
  margin: auto;
}
.row {
  margin: auto;
}
</style>
