<script setup lang="ts">
import { globalShortcut } from "@tauri-apps/api";
import { appWindow } from "@tauri-apps/api/window";
import { ref, watch } from "vue";

import { Command } from "../types";
import { commands } from "../commands";
import CommandVue from "../components/Command.vue";

const query = ref<string>("");
const queryElement = ref<HTMLInputElement | null>(null);
const queryCommands = ref<Command[]>([]);
const selected = ref<number>(0);

globalShortcut.register("CmdOrControl+Space", async () => {
  let isVisible = await appWindow.isVisible();
  if (isVisible) {
    appWindow.hide();
    return;
  }

  appWindow.show();
  appWindow.setFocus();
  queryElement.value!.focus();
})

document.addEventListener("keydown", event => {
  switch (event.code) {
    case "ArrowUp":
      selected.value = Math.max(0, selected.value - 1);
      break;
    case "ArrowDown":
      selected.value = Math.min(queryCommands.value.length - 1, selected.value + 1);
      break;
  }
})

watch(query, () => {
  queryCommands.value = commands.filter(cmd => {
    return cmd.title.toLowerCase().startsWith(query.value)
  })
});
</script>

<template>
  <input ref="queryElement" v-model="query" placeholder="Command" class="outline-none font-semibold p-2">
  <template v-for="(cmd, index) in queryCommands">
    <CommandVue
      :class="{ 'bg-green-800': index == selected }"
      :title="cmd.title"
      :description="cmd.description"
      :icon="cmd.icon"
    />
  </template>
</template>
