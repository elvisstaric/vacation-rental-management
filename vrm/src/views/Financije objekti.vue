<template>
  <div class="about">
    <h1>Financije objekti</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <form>
            <div class="form-group">
              <div v-for="objekt in objekti" :key="objekt" :objekt="objekti">
                <div class="row">
                  <td>
                    {{ objekt.naziv }}
                  </td>

                  <tr>
                    Naplaćeno:
                    {{
                      suma_napl(objekt.id)
                    }}
                  </tr>
                  <tr>
                    Plaćen predujam:
                    {{
                      suma_predujam(objekt.id)
                    }}
                  </tr>
                  <tr>
                    Naplaćeno:
                    {{
                      suma_ne_npl(objekt.id)
                    }}
                  </tr>
                </div>
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");

export default {
  name: "",
  data() {
    return { objekti: [], rezervacije: [] };
  },
  mounted() {
    this.dohvatiObjekte();
    this.dohvatiRez();
  },
  methods: {
    dohvatiObjekte() {
      let objekti = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
          korisnik: localStorage.getItem("korisnik"),
        },
      };

      axios
        .get(BaseUrl + `/objekt`, podatci)
        .then((response) => {
          for (let podatci of response.data) {
            let objekt = {
              id: podatci._id,
              naziv: podatci.objekt,
            };
            this.objekti.push(objekt);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    dohvatiRez() {
      let rezervacije = [];

      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .get(BaseUrl + `/rezervacija_financije`, podatci)
        .then((response) => {
          for (let podatci of response.data) {
            let rezervacija = {
              id: podatci._id,
              id_obj: podatci.objekt_id,
              status: podatci.naplata,
              iznos: podatci.iznos,
            };
            this.rezervacije.push(rezervacija);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    suma_napl(objektid) {
      let sum = 0;
      for (let rezervacija of this.rezervacije) {
        if (
          objektid == rezervacija.id_obj &&
          rezervacija.status == "U cijelosti"
        )
          sum = sum + rezervacija.iznos;
      }

      return sum;
    },
    suma_predujam(objektid) {
      let sum = 0;
      for (let rezervacija of this.rezervacije) {
        if (objektid == rezervacija.id_obj && rezervacija.status == "Predujam")
          sum = sum + rezervacija.iznos;
      }

      return (sum * 0.3).toFixed(2);
    },
    suma_ne_npl(objektid) {
      let sum = 0;
      for (let rezervacija of this.rezervacije) {
        if (
          objektid == rezervacija.id_obj &&
          rezervacija.status == "Nije naplaćeno"
        )
          sum = sum + rezervacija.iznos;
      }

      return sum;
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
td {
  font-weight: bold;
  margin: auto;
}
</style>
