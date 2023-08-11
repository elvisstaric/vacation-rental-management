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
import { baza } from "@/firebase";

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
      baza
        .collection("personal")
        .orderBy("prezime", "asc")
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let osoba = {
              id: doc.id,
              ime: podatci.ime,
              prezime: podatci.prezime,
              satnica: podatci.satnica,
            };

            this.personal.push(osoba);
          });
        });
    },
    dohvatiCiscenja() {
      let ciscenja = [];

      baza
        .collection("ciscenja")
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let ciscenje = {
              id: doc.id,
              trajanje: podatci.trajanje,
              personal: podatci.personal,
            };

            this.ciscenja.push(ciscenje);
          });
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
