<template>
  <pocetna-bttn v-for="opcija in opcije" :key="opcija.naziv" :tekst="opcija" />
</template>

<script>
// @ is an alias to /src
import PocetnaBttn from "@/components/Pocetna-bttn.vue";

export default {
  name: "HomeView",
  components: {
    PocetnaBttn,
  },
  data() {
    return {
      opcije: [
        { naziv: "Moji objekti", link: "/moji_objekti" },
        { naziv: "Personal", link: "/personal" },
        { naziv: "Financije", link: "/financije" },
      ],
    };
  },
};
</script>
