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
import { baza } from "@/firebase";

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

      baza
        .collection("objekti")
        .orderBy("objekt", "asc")
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let objekt = {
              id: doc.id,
              naziv: podatci.objekt,
              ulica: podatci.ulica,
              kucni_br: podatci.kucni_broj,
              pbr: podatci.post_broj,
              vrsta: podatci.vrsta,
              kapacitet: podatci.kapacitet,
            };

            this.info.push(objekt);
          });
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
