<template>
  <objekt-bttn v-for="objekt in info" :key="objekt" :info="objekt" />
</template>

<script>
// @ is an alias to /src
import ObjektBttn from "@/components/Objekt-bttn.vue";

export default {
  name: "Moji objekti",
  components: {
    ObjektBttn,
  },
  data() {
    return {
      info: [
        {
          naziv: "Prvi objekt",
          ulica: "Ulica",
          kucni_br: "1",
          pbr: "12345",
          vrsta: "Kuća",
          kapacitet: "8",
        },
        {
          naziv: "Drugi objekt",
          ulica: "Ulica",
          kucni_br: "2",
          pbr: "54321",
          vrsta: "App",
          kapacitet: "3",
        },
        {
          naziv: "Treći objekt",
          ulica: "Ulica",
          kucni_br: "3",
          pbr: "11223",
          vrsta: "Kuća",
          kapacitet: "5",
        },
      ],
    };
  },
};
</script>
