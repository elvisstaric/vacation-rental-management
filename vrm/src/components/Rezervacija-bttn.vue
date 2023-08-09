<template>
  <div class="row">
    <button
      @click="otvoriRez()"
      type="button"
      class="btn btn-primary btn-lg btn-block"
    >
      {{ info.naziv }}
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "ObjektBttn",
  props: ["info"],
  methods: {
    otvoriObj() {
      this.$router.push({ path: `moji_objekti/objekt/${this.info.id}` });
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
