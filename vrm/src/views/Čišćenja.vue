<template>
  <div>
    <h1>Čišćenja</h1>
    <ciscenje-bttn
      v-for="ciscenje in ciscenja"
      :key="ciscenje.id"
      :info="ciscenje"
    />
    <div
      class="form-group"
      style="margin-top: 12%; float: right; position: relative"
    >
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button
          type="button"
          @click="dodajCiscenje()"
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
import CiscenjeBttn from "@/components/Ciscenje-bttn.vue";
import { baza } from "@/firebase";

export default {
  components: { CiscenjeBttn },
  name: "",
  props: ["id"],
  data() {
    return {
      ciscenja: [],
    };
  },
  mounted() {
    this.dohvatiCiscenja();
  },
  methods: {
    dodajCiscenje() {
      this.$router.push(`${this.$route.name}/dodaj_ciscenje`);
    },
    dohvatiCiscenja() {
      let ciscenja = [];
      let id_obj = this.$route.params.id;

      baza
        .collection("ciscenja")
        .where("objekt_id", "==", id_obj)
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let ciscenje = {
              id: doc.id,
              datum: podatci.datum,
            };

            this.ciscenja.push(ciscenje);
          });
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
