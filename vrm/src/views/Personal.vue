<template>
  <personal-bttn v-for="osoba in osobe" :key="osoba" :osobe="osoba" />
</template>

<script>
// @ is an alias to /src
import PersonalBttn from "@/components/Personal-bttn.vue";

export default {
  name: "Personal",
  components: {
    PersonalBttn,
  },
  data() {
    return {
      osobe: [
        {
          ime: "Ana",
          prezime: "Anić",
          ulica: "Ulica",
          kucni_br: "1",
          pbr: "12345",
          email: "ana.anic@mail.com",
          satnica: "9",
        },
        {
          ime: "Pero",
          prezime: "Perić",
          ulica: "Ulica",
          kucni_br: "2",
          pbr: "76271",
          email: "pero.peric@mail.com",
          satnica: "9",
        },
      ],
    };
  },
};
</script>
