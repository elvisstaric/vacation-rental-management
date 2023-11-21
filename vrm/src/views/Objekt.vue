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
import { baza } from "@/firebase";

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
    //this.dohvatiObj();
  },
  methods: {
    obrisiObj() {
      baza
        .collection("objekti")
        .doc(this.id)
        .delete()
        .then(() => {
          console.log("Obrisano");
          this.$router.push("/moji_objekti/");
        })
        .catch((error) => {
          console.error("Greška ", error);
        });
    },
    /*dohvatiObj() {
      let objekt = [];
      baza
        .collection("objekti")
        .doc(this.id)
        .get()
        .then((rez) => {
          this.objekt = rez.data();
          this.objekt.id = this.id;
        });
    },*/
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
