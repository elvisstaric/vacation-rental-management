<template>
  <div class="row">
    <button
      @click="preusmjeri()"
      type="button"
      class="btn btn-primary btn-lg btn-block"
    >
      {{ tekst.naziv }}
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "ObjektBttn",
  props: ["tekst"],
  methods: {
    preusmjeri() {
      let poveznica = String(this.tekst.link);
      this.$router.push({
        path: `${this.$route.params.id}/rezervacije${poveznica}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  margin: auto;
  height: 100px;
  width: 50%;
}
</style>
