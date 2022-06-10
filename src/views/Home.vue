<script setup lang="ts">
import { globalShortcut } from "@tauri-apps/api";
import { appWindow } from "@tauri-apps/api/window";
import { ref, watch } from "vue";
import { CommandTypes } from "../types";

import Song from "../components/Song.vue";
import Command from "../components/Command.vue";

const inputRef = ref<HTMLInputElement | null>(null);
const query = ref("");
const commands = ref<CommandTypes[]>([
  "play",
  "resume"
]);

globalShortcut.register("CmdOrControl+Space", async () => {
  if (await appWindow.isVisible()) {
    appWindow.hide();
  } else {
    appWindow.show();
    await appWindow.setFocus();
    inputRef.value?.focus();
  }
});

watch(query, async () => {

});
</script>

<template>
  <input ref="inputRef" v-model="query" placeholder="Command" class="outline-none font-semibold p-2">
  <div v-if="query" class="flex-1">
    <template v-for="cmd in commands">
      <Command v-if="cmd.startsWith(query)" :command="cmd" />
    </template>
  </div>
</template>
 