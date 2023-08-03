<template>
  <div class="row">
    <button
      @click="preusmjeri"
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
  name: "PocetnaBttn",
  props: ["tekst"],
  methods: {
    preusmjeri: function () {
      let poveznica = String(this.tekst.link);
      this.$router.push(poveznica);
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  margin: auto;
  height: 200px;
  width: 80%;
}
</style>
