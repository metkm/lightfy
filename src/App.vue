<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "./store";

const store = useStore();
const router = useRouter();

if (store.accessToken == "") {
  router.push("/auth");
}
</script>

<template>
  <router-view></router-view>
</template>
