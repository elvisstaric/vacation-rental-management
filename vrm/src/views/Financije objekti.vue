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
import { baza } from "@/firebase";
import store from "@/store";

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
      baza
        .collection("objekti")
        .where("korisnik", "==", store.korisnik)
        .orderBy("objekt", "asc")
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let objekt = {
              id: doc.id,
              naziv: podatci.objekt,
            };
            this.objekti.push(objekt);
          });
        });
    },
    dohvatiRez() {
      let rezervacije = [];

      baza
        .collection("rezervacije")
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let rezervacija = {
              id: doc.id,
              id_obj: podatci.objekt_id,
              status: podatci.naplata,
              iznos: podatci.iznos,
            };

            this.rezervacije.push(rezervacija);
          });
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

      return sum * 0.3;
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
