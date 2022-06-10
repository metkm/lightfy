import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    accessToken: ""
  }),
  actions: {
    setToken(token: string) {
      this.accessToken = token;
    }
  },
  persist: true
});
