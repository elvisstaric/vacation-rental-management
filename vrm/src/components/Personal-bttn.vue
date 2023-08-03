<template>
  <div class="row">
    <button type="button" class="btn btn-primary btn-lg btn-block">
      {{ osobe.ime }} {{ osobe.prezime }}
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "PersonalBttn",
  props: ["osobe"],
};
</script>

<style scoped lang="scss">
.row {
  margin: auto;
  height: 100px;
  width: 50%;
}
</style>
