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
              <input
                type="text"
                v-model="osoba.ime"
                class="form-control"
                id="ime"
                placeholder="Ime"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="prezime">Prezime</label>
              <input
                type="text"
                v-model="osoba.prezime"
                class="form-control"
                id="prezime"
                placeholder="Prezime"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                v-model="osoba.e_mail"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="E-mail(netko@example.com)"
              />
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-5">
                  <label for="ulica">Ulica</label>
                  <input
                    type="text"
                    v-model="osoba.ulica"
                    class="form-control"
                    id="ulica"
                    placeholder="Ulica"
                  />
                </div>
                <div class="col-3">
                  <label for="kbroj">Kućni broj</label>
                  <input
                    type="number"
                    v-model="osoba.kucni_broj"
                    class="form-control"
                    id="kbroj"
                    placeholder="Kućni broj"
                  />
                </div>
                <div class="col-4">
                  <label for="pbr">Poštanski broj</label>
                  <input
                    type="number"
                    v-model="osoba.post_broj"
                    class="form-control"
                    id="pbr"
                    placeholder="Poštanski broj"
                  />
                </div>
              </div>
            </div>
            <br />
            <div class="form-group">
              <label for="satnica">Satnica</label>
              <input
                type="number"
                step="0.01"
                v-model="osoba.satnica"
                class="form-control"
                id="satnica"
                placeholder="Satnica"
              />
            </div>
            <br />
            <button type="button" @click="urediPers()" class="btn btn-primary">
              Spremi
            </button>
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
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");

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
    urediPers() {
      baza
        .collection("personal")
        .doc(this.id)
        .update({
          ime: this.osoba.ime,
          prezime: this.osoba.prezime,
          e_mail: this.osoba.e_mail,
          ulica: this.osoba.ulica,
          kucni_broj: this.osoba.kucni_broj,
          post_broj: this.osoba.post_broj,
          satnica: this.osoba.satnica,
        })
        .then(() => {
          console.log("Spremljeno");
          this.$router.push(`/personal`);
        })
        .catch((error) => {
          console.error("Greška ", error);
        });
    },
    dohvatiOsobu() {
      let osoba = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .get(BaseUrl + `/osoba/` + this.id, podatci)
        .then((response) => {
          for (let osoba of response.data) {
            this.osoba = osoba;
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
.form-group {
  width: 400px;
}
button {
  margin-left: 20px;
}
</style>
