<template>
  <div>
    <h1>Rezervacije</h1>
    <rezervacije-bttn
      v-for="rezervacija in rezervacije"
      :key="rezervacija.id"
      :info="rezervacija"
    />
    <div
      class="form-group"
      style="margin-top: 12%; float: right; position: relative"
    >
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button
          type="button"
          @click="dodajRez()"
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
import RezervacijeBttn from "@/components/Rezervacije-bttn.vue";
//import { baza } from "@/firebase";

export default {
  components: { RezervacijeBttn },
  name: "",
  props: ["id"],
  data() {
    return {
      rezervacije: [
        {
          id: 1,
          nositelj: "Pero Perić",
        },
        {
          id: 2,
          nositelj: "John Doe",
        },
        {
          id: 1,
          nositelj: "Ana Anić",
        },
      ],
    };
  },
  mounted() {
    // this.dohvatiRez();
  },
  methods: {
    dodajRez() {
      this.$router.push(`${this.$route.name}/nova_rez`);
    },
    /*dohvatiRez() {
      let rezervacije = [];
      let id_obj = this.$route.params.id;

      baza
        .collection("rezervacije")
        .where("objekt_id", "==", id_obj)
        .get()
        .then((rez) => {
          rez.forEach((doc) => {
            const podatci = doc.data();
            let rezervacija = {
              id: doc.id,
              nositelj: podatci.nositelj,
            };

            this.rezervacije.push(rezervacija);
          });
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
