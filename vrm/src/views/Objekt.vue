<template>
  <div>
    <h1>{{ objekt.objekt }}</h1>
    <objekt-info-bttn
      v-for="opcija in opcije"
      :key="opcija.naziv"
      :tekst="opcija"
    />
    <button
      type="button"
      @click="obrisiObj()"
      class="btn btn-primary btn-lg btn-block"
    >
      Obriši
    </button>
  </div>
</template>
<script>
import ObjektInfoBttn from "@/components/Objekt-info-bttn.vue";
let BaseUrl = "http://127.0.0.1:3000";
const axios = require("axios");

export default {
  components: { ObjektInfoBttn },
  name: "",
  props: ["id"],
  data() {
    return {
      opcije: [
        { naziv: "Rezervacije", link: "/rezervacije" },
        { naziv: "Čišćenja", link: "/ciscenja" },
        { naziv: "Održavanja", link: "/odrzavanja" },
      ],
      objekt: [
        {
          naziv: "Objekt",
        },
      ],
    };
  },
  mounted() {
    this.dohvatiObj();
  },
  methods: {
    obrisiObj() {
      const podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .delete(BaseUrl + "/objekt/" + this.id, {
          headers: podatci.headers,
        })
        .then((response) => {
          this.$router.push(`/moji_objekti/`);
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    },
    dohvatiObj() {
      let objekt = [];
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
        },
      };
      axios
        .get(BaseUrl + `/objekt/` + this.id, podatci)
        .then((response) => {
          for (let objekt of response.data) {
            this.objekt = objekt;
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
