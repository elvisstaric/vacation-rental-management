<template>
  <div>
    <h1>Financije</h1>
    <br />
    <div class="row">
      <button
        @click="preusmjeri_personal()"
        type="button"
        class="btn btn-primary btn-lg btn-block"
      >
        Financije personal
      </button>
    </div>
    <br /><br />
    <div class="row">
      <button
        @click="preusmjeri_objekt()"
        type="button"
        class="btn btn-primary btn-lg btn-block"
      >
        Financije objekti
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "",

  data() {
    return {};
  },
  methods: {
    preusmjeri_personal() {
      this.$router.push({
        path: `${this.$route.name}/financije_personal`,
      });
    },
    preusmjeri_objekt() {
      this.$router.push({
        path: `${this.$route.name}/financije_objekti`,
      });
    },
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
  height: 100px;
  width: 50%;
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
