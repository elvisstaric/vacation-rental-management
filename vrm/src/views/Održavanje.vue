<template>
  <div class="about">
    <h1>Održavanje</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="datum">Naziv</label>
              <p>{{ odrzavanje.naziv }}</p>
              <br />
            </div>
            <div class="form-group">
              <label for="datum">Rok</label>
              <p>{{ odrzavanje.rok }}</p>
              <br />
            </div>
            <div class="form-group">
              <label for="personal">Opis</label>
              <p>{{ odrzavanje.opis }}</p>
            </div>

            <br />

            <button
              type="button"
              @click="obrisiOdrzavanje()"
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
  props: ["id_odrzavanje"],
  data() {
    return { odrzavanje: [] };
  },
  mounted() {
    //this.dohvatiOdrzavanje();
  },
  methods: {
    obrisiOdrzavanje() {
      baza
        .collection("odrzavanja")
        .doc(this.id_odrzavanje)
        .delete()
        .then(() => {
          console.log("Obrisano");
          this.$router.push(
            `/moji_objekti/objekt/${this.$route.params.id}/odrzavanja`
          );
        })
        .catch((error) => {
          console.error("Greška ", error);
        });
    },
    dohvatiOdrzavanje() {
      let odrzavanje = [];
      baza
        .collection("odrzavanja")
        .doc(this.id_odrzavanje)
        .get()
        .then((rez) => {
          this.odrzavanje = rez.data();
          this.odrzavanje.id = this.id_ciscenje;
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
