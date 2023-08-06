<template>
  <div class="about">
    <h1>Dodavanje objekta</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="naziv_obj">Naziv</label>
              <input
                type="text"
                v-model="objNaziv"
                class="form-control"
                id="naziv_obj"
                placeholder="Naziv"
              />
              <br />
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col-5">
                  <label for="ulica">Ulica</label>
                  <input
                    type="text"
                    v-model="objUlica"
                    class="form-control"
                    id="ulica"
                    placeholder="Ulica"
                  />
                </div>
                <div class="col-3">
                  <label for="kbroj">Kućni broj</label>
                  <input
                    type="number"
                    v-model="objKbr"
                    class="form-control"
                    id="kbroj"
                    placeholder="Kućni broj"
                  />
                </div>
                <div class="col-4">
                  <label for="pbr">Poštanski broj</label>
                  <input
                    type="number"
                    v-model="objPbr"
                    class="form-control"
                    id="pbr"
                    placeholder="Poštanski broj"
                  />
                </div>
              </div>
            </div>
            <label for="vrsta_obj">Vrsta</label>
            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="objVrsta"
                  name="inlineRadioOptions"
                  id="opcija-kuca"
                  value="Kuća za odmor"
                />
                <label class="form-check-label" for="opcija-kuca"
                  >Kuća za odmor</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  v-model="objVrsta"
                  name="inlineRadioOptions"
                  id="opcija-app"
                  value="Apartman"
                />
                <label class="form-check-label" for="opcija-app"
                  >Apartman</label
                >
              </div>

              <br />
            </div>
            <div class="form-group">
              <label for="kapacitet_obj">Kapacitet</label>
              <input
                type="number"
                v-model="objKapacitet"
                class="form-control"
                id="kapacitet_obj"
                placeholder="Kapacitet"
              />
              <br />
            </div>

            <button
              type="button"
              @click="dodajObjekt()"
              class="btn btn-primary"
            >
              Dodaj
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
  data: function () {
    return {
      objNaziv: "",
      objUlica: "",
      objKbr: "",
      objPbr: "",
      objVrsta: "",
      objKapacitet: "",
    };
  },
  methods: {
    dodajObjekt() {
      baza
        .collection("objekti")
        .add({
          objekt: this.objNaziv,
          ulica: this.objUlica,
          kucni_broj: this.objKbr,
          post_broj: this.objPbr,
          vrsta: this.objVrsta,
          kapacitet: this.objKapacitet,
        })
        .then((spremljeno) => {
          console.log("Spremljeno", spremljeno);
          this.objNaziv = "";
          this.objUlica = "";
          this.objKbr = "";
          this.objPbr = "";
          this.objVrsta = "";
          this.objKapacitet = "";
          this.$router.push("/moji_objekti");
        })
        .catch((greska) => {
          console.error("Greška", greska);
        });
    },
  },
};
</script>
