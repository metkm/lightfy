<script setup lang="ts">
import { globalShortcut } from "@tauri-apps/api";
import { appWindow } from "@tauri-apps/api/window";
import { ref, watch } from "vue";
import axios from "axios";

import Song from "../components/Song.vue";
import Command from "../components/Command.vue";

const inputRef = ref<HTMLInputElement | null>(null);
const command = ref<string>("");

globalShortcut.register("CmdOrControl+Space", async () => {
  if (await appWindow.isVisible()) {
    appWindow.hide();
  } else {
    appWindow.show();
    await appWindow.setFocus();
    inputRef.value?.focus();
  }
});

watch(command, async () => {
  switch (command.value) {
    case "resume":
      await axios.put("/me/player/play");
      break;
  }
});
</script>

<template>
  <input ref="inputRef" v-model="command" placeholder="Command" class="outline-none font-semibold p-2">
  <div class="flex-1">
    <Song />
    <Command />
  </div>
</template>
 