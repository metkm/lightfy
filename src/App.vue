<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "./store";
import axios from "axios";

const store = useStore();
const router = useRouter();

axios.defaults.baseURL = "https://api.spotify.com/v1";
if (store.accessToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${store.accessToken}`;
}

if (store.accessToken == "") {
  router.push("/auth");
}
</script>

<template>
  <router-view></router-view>
</template>
