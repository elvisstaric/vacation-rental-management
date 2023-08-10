<template>
  <div class="about">
    <h1>{{ osoba.ime }} {{ osoba.prezime }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="ime">Ime</label>
              <p>{{ osoba.ime }}</p>
            </div>
            <br />
            <div class="form-group">
              <label for="prezime">Prezime</label>
              <p>{{ osoba.prezime }}</p>
            </div>
            <br />
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <p>{{ osoba.e_mail }}</p>
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-5">
                  <label for="ulica">Ulica</label>
                  <p>{{ osoba.ulica }}</p>
                </div>
                <div class="col-3">
                  <label for="kbroj">{{ osoba.kucni_broj }}</label>
                  <p>6</p>
                </div>
                <div class="col-4">
                  <label for="pbr">Poštanski broj</label>
                  <p>{{ osoba.post_broj }}</p>
                </div>
              </div>
            </div>
            <br />
            <div class="form-group">
              <label for="satnica">Satnica</label>
              <p>{{ osoba.satnica }}</p>
            </div>
            <br />
            <button type="button" @click="obrisiPers()" class="btn btn-primary">
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
  props: ["id"],
  data() {
    return { osoba: [] };
  },
  mounted() {
    this.dohvatiOsobu();
  },
  methods: {
    obrisiPers() {
      baza
        .collection("personal")
        .doc(this.id)
        .delete()
        .then(() => {
          console.log("Obrisano");
          this.$router.push("/personal");
        })
        .catch((error) => {
          console.error("Greška ", error);
        });
    },
    dohvatiOsobu() {
      let osoba = [];
      baza
        .collection("personal")
        .doc(this.id)
        .get()
        .then((rez) => {
          this.osoba = rez.data();
          this.osoba.id = this.id;
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
