import axios from "axios";
import { defineStore } from "pinia";

interface SessionResponse {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: 'Bearer'
}

export const useStore = defineStore("main", {
  state: () => ({
    accessToken: "",
    refreshToken: ""
  }),
  actions: {
    async login(code: string, code_verifier: string) {
      const redirect_uri = import.meta.env.DEV ? "http://localhost:3000/" : "https://tauri.localhost/";

      const response = await axios.post<SessionResponse>(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri,
          client_id: "d2311472e9434eada1b4fa7de34e5063",
          code_verifier,
        })
      );

      this.accessToken = response.data.access_token;
      this.refreshToken = response.data.refresh_token;
      
      axios.defaults.baseURL = "https://api.spotify.com/v1";
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access_token}`;
    },
  },
  persist: true,
});
