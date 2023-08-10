<template>
  <div class="row">
    <button
      @click="preusmjeri()"
      type="button"
      class="btn btn-primary btn-lg btn-block"
    >
      {{ info.nositelj }}
    </button>
    <br />
  </div>
</template>

<script>
export default {
  name: "RezervacijaBttn",
  props: ["info"],
  methods: {
    preusmjeri() {
      this.$router.push({
        path: `${this.$route.name}/${this.info.id}`,
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
