<template>
  <div class="row">
    <button
      @click="otvoriObj()"
      type="button"
      class="btn btn-primary btn-lg btn-block"
    >
      {{ info.objekt }}
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
      this.$router.push({ path: `moji_objekti/objekt/${this.info._id}` });
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
