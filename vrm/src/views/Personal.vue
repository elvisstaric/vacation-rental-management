<template>
  <personal-bttn v-for="osoba in osobe" :key="osoba" :osobe="osoba" />
  <div
    class="form-group"
    style="margin-top: 12%; float: right; position: relative"
  >
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <button
        type="button"
        @click="dodajPers()"
        class="btn btn-primary btn-md"
        id="bttnDesno"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalBttn from "@/components/Personal-bttn.vue";
import { baza } from "@/firebase";
import store from "@/store";
export default {
  name: "Personal",
  components: {
    PersonalBttn,
  },
  data() {
    return {
      osobe: [
        {
          id: 1,
          ime: "Đuro",
          prezime: "Đurić",
          ulica: "Ulica2",
          kucni_br: "1",
          pbr: "123321",
          email: "d.duric@proba.hr",
          satnica: "5",
        },
        {
          id: 2,
          ime: "Kata",
          prezime: "Katić",
          ulica: "Ulica2",
          kucni_br: "2",
          pbr: "123321",
          email: "Kata.katic@proba.hr",
          satnica: "6",
        },
        {
          id: 3,
          ime: "Mara",
          prezime: "Marić",
          ulica: "Ulica3",
          kucni_br: "3",
          pbr: "111111",
          email: "mara.maric@proba.hr",
          satnica: "4",
        },
      ],
    };
  },
  mounted() {
    //this.dohvatiPers();
  },
  methods: {
    dodajPers() {
      this.$router.push("/dodaj_pers");
    },
    /* dohvatiPers() {
      let osobe = [];

      baza
        .collection("personal")
        .where("korisnik", "==", store.korisnik)
        .orderBy("prezime", "asc")
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let osoba = {
              id: doc.id,
              ime: podatci.ime,
              prezime: podatci.prezime,
              ulica: podatci.ulica,
              kucni_br: podatci.kucni_broj,
              pbr: podatci.post_broj,
              email: podatci.e_mail,
              satnica: podatci.satnica,
            };

            this.osobe.push(osoba);
          });
        });
    },*/
  },
};
</script>
<style scoped lang="css">
#bttnDesno {
  position: fixed;
  right: 0;
  bottom: 0;
  font-size: 30px;
  font-weight: bold;
  width: 60px;
  height: 60px;
}
</style>
