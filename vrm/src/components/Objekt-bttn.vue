<template>
  <div class="row">
    <button type="button" class="btn btn-primary btn-lg btn-block">
      {{ info.naziv }}
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "ObjektBttn",
  props: ["info"],
};
</script>

<style scoped lang="scss">
.row {
  margin: auto;
  height: 100px;
  width: 50%;
}
</style>
