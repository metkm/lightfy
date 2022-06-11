<script setup lang="ts">
import { useStore } from "./store";
import axios from "axios";

const store = useStore();

if (store.accessToken) {
  axios.defaults.baseURL = "https://api.spotify.com/v1";
  axios.defaults.headers.common["Authorization"] = `Bearer ${store.accessToken}`;
}

// if (store.accessToken) {
  // renew token
// }

// if (!store.accessToken) {
//   router.push("/");
// }

// onMounted(async () => {


  // console.log("app mount")

  // const params = new URLSearchParams(window.location.search);
  // const code = params.get("code");

  // if (store.accessToken != "") {
  //   // there is a access token. Refresh it.
  //   router.push("/");

  //   axios.defaults.baseURL = "https://api.spotify.com/v1";
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${store.accessToken}`;
  // } else if (code) {
  //   await store.login(code, auth.codeVerifier);
  //   router.push("/");
  // } else {
  //   router.push("/auth");
  // }
// })
</script>

<template>
  <router-view></router-view>
</template>
