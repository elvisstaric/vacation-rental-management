<template>
  <div>
    <h1>Održavanja</h1>
    <odrzavanje-bttn
      v-for="odrzavanje in odrzavanja"
      :key="odrzavanje.id"
      :info="odrzavanje"
    />
    <div
      class="form-group"
      style="margin-top: 12%; float: right; position: relative"
    >
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button
          type="button"
          @click="dodajOdrzavanje()"
          class="btn btn-primary btn-md"
          id="bttnDesno"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import OdrzavanjeBttn from "@/components/Odrzavanje-bttn.vue";
let BaseUrl = process.env.VUE_APP_URL;
const axios = require("axios");

export default {
  components: { OdrzavanjeBttn },
  name: "",
  props: ["id"],
  data() {
    return {
      odrzavanja: [],
    };
  },
  mounted() {
    this.dohvatiOdrzavanja();
  },
  methods: {
    dodajOdrzavanje() {
      this.$router.push(`${this.$route.name}/dodaj_odrzavanje`);
    },
    dohvatiOdrzavanja() {
      let odrzavanja = [];
      let id_obj = this.$route.params.id;
      let podatci = {
        headers: {
          token: localStorage.getItem("token"),
          id_obj: id_obj,
        },
      };
      axios
        .get(BaseUrl + `/odrzavanje`, podatci)
        .then((response) => {
          for (let odrzavanje of response.data) {
            this.odrzavanja.push(odrzavanje);
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
