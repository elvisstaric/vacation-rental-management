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
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");

export default {
  name: "",
  props: ["id_odrzavanje"],
  data() {
    return { odrzavanje: [] };
  },
  mounted() {
    this.dohvatiOdrzavanje();
  },
  methods: {
    obrisiOdrzavanje() {
      const podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .delete(BaseUrl + "/odrzavanje/" + this.id_odrzavanje, {
          headers: podatci.headers,
        })
        .then((response) => {
          this.$router.push(
            `/moji_objekti/objekt/${this.$route.params.id}/odrzavanja`
          );
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    dohvatiOdrzavanje() {
      let odrzavanje = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .get(BaseUrl + `/odrzavanje/` + this.id_odrzavanje, podatci)
        .then((response) => {
          for (let odrzavanje of response.data) {
            this.odrzavanje = odrzavanje;
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
}
</style>
