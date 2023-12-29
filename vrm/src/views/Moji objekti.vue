<template>
  <objekt-bttn v-for="objekt in info" :key="objekt" :info="objekt" />
  <div
    class="form-group"
    style="margin-top: 12%; float: right; position: relative"
  >
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <button
        type="button"
        @click="dodajObj()"
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
import ObjektBttn from "@/components/Objekt-bttn.vue";
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");

export default {
  name: "Moji objekti",
  components: {
    ObjektBttn,
  },

  data() {
    return {
      info: [],
    };
  },
  mounted() {
    this.dohvatiObj();
  },
  methods: {
    dodajObj() {
      this.$router.push("/dodaj_objekt");
    },
    dohvatiObj() {
      let info = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
          korisnik: localStorage.getItem("korisnik"),
        },
      };

      axios
        .get(BaseUrl + `/objekt`, podatci)
        .then((response) => {
          for (let objekt of response.data) {
            this.info.push(objekt);
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
