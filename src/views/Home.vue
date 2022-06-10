<script setup lang="ts">
import { globalShortcut } from "@tauri-apps/api";
import { appWindow } from "@tauri-apps/api/window";
import { onMounted, ref } from "vue";

const inputRef = ref<HTMLInputElement | null>(null);
const command = ref<string>("");

onMounted(() => {
  globalShortcut.register("CmdOrControl+Space", async () => {
    if (await appWindow.isVisible()) {
      appWindow.hide();
    } else {
      appWindow.show();
      await appWindow.setFocus();

      console.log(inputRef.value);
      inputRef.value?.focus();
    }
  });
})
</script>

<template>
  <input ref="inputRef" v-model="command" placeholder="Command" class="outline-none p-2">
  <div class="flex-1 p-2">
    <p>{{ command }}</p>
  </div>
</template>
