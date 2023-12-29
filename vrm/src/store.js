import { reactive } from "vue";

let store = {
  status: {
    get autorizacija() {
      let korisnik = localStorage.getItem("token");
      if (korisnik) {
        return true;
      }
      return false;
    },
  },
};

export default store;
