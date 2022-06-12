<script setup lang="ts">
import { generateRandomString, generateCodeChallenge, generateUrlWithParams } from '../authUtils';
import { onMounted } from "vue";

import { useAuth } from "../store/auth";
import { useStore } from "../store";
import { useRouter } from 'vue-router';

const auth = useAuth();
const store = useStore();
const router = useRouter();

const redirect_uri = import.meta.env.DEV ? "http://localhost:3000/" : "https://tauri.localhost/";

onMounted(async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (code) {
    await store.login(code, auth.codeVerifier);
  } else {
    await store.refreshTokens();
  }
  
  router.push("/home");
})

const login = async () => {
  const code_verifier = generateRandomString(64);
  const code_challenge = await generateCodeChallenge(code_verifier);

  auth.codeVerifier = code_verifier;

  window.location.href = generateUrlWithParams(
    "https://accounts.spotify.com/authorize",
    {
      "client_id": "d2311472e9434eada1b4fa7de34e5063",
      "response_type": "code",
      "scope": "user-modify-playback-state",
      redirect_uri,
      "code_challenge_method": "S256",
      code_challenge,
    },
  )
}
</script>

<template>
  <button @click="login" class="p-2 hover:bg-green-600 transition-all">Login!</button>
</template>