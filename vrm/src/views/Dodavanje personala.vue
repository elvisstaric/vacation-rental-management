<template>
  <div class="about">
    <h1>Dodavanje personala</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="ime">Ime</label>
              <input
                type="text"
                v-model="persIme"
                class="form-control"
                id="ime"
                placeholder="Ime"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="prezime">Prezime</label>
              <input
                type="text"
                v-model="persPrezime"
                class="form-control"
                id="prezime"
                placeholder="Prezime"
              />
              <br />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                v-model="persEmail"
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
                    v-model="persUlica"
                    class="form-control"
                    id="ulica"
                    placeholder="Ulica"
                  />
                </div>
                <div class="col-3">
                  <label for="kbroj">Kućni broj</label>
                  <input
                    type="number"
                    v-model="persKbr"
                    class="form-control"
                    id="kbroj"
                    placeholder="Kućni broj"
                  />
                </div>
                <div class="col-4">
                  <label for="pbr">Poštanski broj</label>
                  <input
                    type="number"
                    v-model="persPbr"
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
                v-model="persSatnica"
                class="form-control"
                id="satnica"
                placeholder="Satnica"
              />
            </div>
            <br />
            <button
              type="button"
              @click="dodajPersonal()"
              class="btn btn-primary"
            >
              Dodaj
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
  data: function () {
    return {
      persIme: "",
      persPrezime: "",
      persEmail: "",
      persUlica: "",
      persKbr: "",
      persPbr: "",
      persSatnica: "",
    };
  },
  methods: {
    dodajPersonal() {
      baza
        .collection("personal")
        .add({
          ime: this.persIme,
          prezime: this.persPrezime,
          e_mail: this.persEmail,
          ulica: this.persUlica,
          kucni_broj: this.persKbr,
          post_broj: this.persPbr,
          satnica: this.persSatnica,
        })
        .then((spremljeno) => {
          console.log("Spremljeno", spremljeno);
          this.persIme = "";
          this.persPrezime = "";
          this.persEmail = "";
          this.persUlica = "";
          this.persKbr = "";
          this.persPbr = "";
          this.persSatnica = "";
          this.$router.push("/personal");
        })
        .catch((greska) => {
          console.error("Greška", greska);
        });
    },
  },
};
</script>
