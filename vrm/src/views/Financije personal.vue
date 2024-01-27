<template>
  <div class="about">
    <h1>Financije personal</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <form>
            <div class="form-group">
              <div v-for="osoba in personal" :key="osoba" :osoba="personal">
                <div class="row">
                  <td>{{ osoba.ime }} {{ osoba.prezime }}</td>

                  <tr>
                    Iznos:
                    {{
                      suma(osoba.id)
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
let BaseUrl = process.env.VUE_APP_URL;
const axios = require("axios");
export default {
  name: "",
  data() {
    return { personal: [], ciscenja: [] };
  },
  mounted() {
    this.dohvatiPersonal();
    this.dohvatiCiscenja();
  },
  methods: {
    dohvatiPersonal() {
      let personal = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
          korisnik: localStorage.getItem("korisnik"),
        },
      };
      axios
        .get(BaseUrl + `/osoba`, podatci)
        .then((response) => {
          for (let podatci of response.data) {
            let osoba = {
              id: podatci._id,
              ime: podatci.ime,
              prezime: podatci.prezime,
              satnica: podatci.satnica,
            };
            this.personal.push(osoba);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },

    dohvatiCiscenja() {
      let ciscenja = [];

      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .get(BaseUrl + `/ciscenje_financije`, podatci)
        .then((response) => {
          for (let podatci of response.data) {
            let ciscenje = {
              id: podatci._id,
              trajanje: podatci.trajanje,
              personal: podatci.personal,
            };

            this.ciscenja.push(ciscenje);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    suma(osobaid) {
      let sum = 0;
      let trajanje = 0;
      let satnica = 0;

      for (let osoba of this.personal) {
        if (osobaid == osoba.id) {
          satnica = osoba.satnica;
        }
      }
      for (let ciscenje of this.ciscenja) {
        if (ciscenje.personal.includes(osobaid)) {
          trajanje = trajanje + ciscenje.trajanje;
        }
      }
      sum = satnica * trajanje;
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
