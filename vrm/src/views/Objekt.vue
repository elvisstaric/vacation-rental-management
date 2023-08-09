<template>
  <div>
    <h1>{{ objekt.objekt }}</h1>
    <objekt-info-bttn
      v-for="opcija in opcije"
      :key="opcija.naziv"
      :tekst="opcija"
    />
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
        { naziv: "Rezervacije", link: "/nova_rez" },
        { naziv: "Čišćenja", link: "/ciscenja" },
        { naziv: "Održavanja", link: "/odrzavanja" },
      ],
      objekt: [],
    };
  },
  mounted() {
    this.dohvatiObj();
  },
  methods: {
    dohvatiObj() {
      let objekt = [];
      baza
        .collection("objekti")
        .doc(this.id)
        .get()
        .then((rez) => {
          this.objekt = rez.data();
          this.objekt.id = this.id;
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
