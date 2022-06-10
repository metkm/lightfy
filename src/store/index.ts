import axios from "axios";
import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    accessToken: ""
  }),
  actions: {
    setToken(token: string) {
      this.accessToken = token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },
  persist: true
});
