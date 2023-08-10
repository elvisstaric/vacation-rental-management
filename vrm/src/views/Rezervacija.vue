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
              <p>{{ rezervacija.nositelj }}</p>
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-6">
                  <label for="datum_od">Rezervacija od</label>
                  <p>{{ rezervacija.rezervacija_od }}</p>
                </div>
                <div class="col-6">
                  <label for="datum_do">Rezervacija do</label>
                  <p>{{ rezervacija.rezervacija_do }}</p>
                </div>
              </div>
            </div>
            <br />
            <label for="status_naplate">Status naplate</label>
            <br />
            <div class="form-group">
              <div class="form-check form-check-inline">
                <p>{{ rezervacija.naplata }}</p>
              </div>
            </div>
            <br />
            <div class="form-group">
              <label for="iznos">Iznos</label>
              <p>{{ rezervacija.iznos }}</p>
              <br />
            </div>
            <br />
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
import { baza } from "@/firebase";

export default {
  name: "",
  props: ["id_rez"],
  data() {
    return { rezervacija: [] };
  },
  mounted() {
    this.dohvatiRezervaciju();
  },
  methods: {
    obrisiRez() {
      baza
        .collection("rezervacije")
        .doc(this.id_rez)
        .delete()
        .then(() => {
          console.log("Obrisano");
          this.$router.push(
            `/moji_objekti/objekt/${this.$route.params.id}/rezervacije`
          );
        })
        .catch((error) => {
          console.error("Greška ", error);
        });
    },
    dohvatiRezervaciju() {
      let rezervacija = [];
      baza
        .collection("rezervacije")
        .doc(this.id_rez)
        .get()
        .then((rez) => {
          this.rezervacija = rez.data();
          this.rezervacija.id = this.id_rez;
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
