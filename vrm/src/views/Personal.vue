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
let BaseUrl = process.env.VUE_APP_URL;
const axios = require("axios");
export default {
  name: "Personal",
  components: {
    PersonalBttn,
  },
  data() {
    return {
      osobe: [],
    };
  },
  mounted() {
    this.dohvatiPers();
  },
  methods: {
    dodajPers() {
      this.$router.push("/dodaj_pers");
    },
    dohvatiPers() {
      let osobe = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
          korisnik: localStorage.getItem("korisnik"),
        },
      };

      axios
        .get(BaseUrl + `/osoba`, podatci)
        .then((response) => {
          for (let osoba of response.data) {
            this.osobe.push(osoba);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
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
