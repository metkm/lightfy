<script setup lang="ts">
import { globalShortcut, event } from "@tauri-apps/api";
import { appWindow } from "@tauri-apps/api/window";
import { onMounted, ref } from "vue";

const inputRef = ref<HTMLInputElement | null>(null);
const command = ref<string>("");

onMounted(() => {
  event.listen("tauri://focus", (event) => {
    console.log("Focus!", event.payload, event.windowLabel, window.location.href);
  })

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
  <input ref="inputRef" v-model="command" placeholder="Command" class="p-3 outline-none focus:outline-2 outline-green-600">
  <div class="flex-1 p-3">
    <p>{{ command }}</p>
  </div>
</template>
