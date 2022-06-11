import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    codeVerifier: ""
  }),
  persist: true
});
