<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useStore } from '../store';

const store = useStore();
const router = useRouter();

onMounted(async () => {
  let params = new URLSearchParams(window.location.href.split("#")[1]);
  let access_token = params.get("access_token");

  if (access_token) {
    store.setToken(access_token);
    router.push("/");
  }
})

const login = () => {
  let params = new URLSearchParams({
    client_id: "d2311472e9434eada1b4fa7de34e5063",
    response_type: "token",
    redirect_uri: import.meta.env.DEV ? "http://localhost:3000/auth" : "https://tauri.localhost/auth"
  });
  let url = `https://accounts.spotify.com/authorize?${params.toString()}`;

  window.location.href = url;
}
</script>

<template>
  <button @click="login" class="p-2 hover:bg-green-600 transition-all">Login!</button>
</template>