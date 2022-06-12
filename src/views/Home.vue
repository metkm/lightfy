<script setup lang="ts">
import { appWindow } from '@tauri-apps/api/window';
import { ref, watchEffect } from 'vue';
import { search } from '../api/search';
import { commands } from '../commands';

import { Command, TrackItem } from "../types";
import CommandVue from '../components/Command.vue';
import SongVue from '../components/Song.vue';
import { computed } from '@vue/reactivity';

const query = ref("");
const queryElement = ref<HTMLInputElement | null>(null);
const recommendations = ref<TrackItem[]>([]);
const queryCommands = ref<Array<TrackItem | Command>>([]);

const allCommands = computed(() => [...queryCommands.value, ...recommendations.value])
const currentCommand = ref(0);

appWindow.listen("tauri://focus", () => {
  if (queryElement.value) queryElement.value.focus();
})

document.addEventListener("keydown", event => {
  switch (event.code) {
    case "ArrowUp":
      currentCommand.value = Math.max(0, currentCommand.value - 1);
      break;
    case "ArrowDown":
      currentCommand.value = Math.min(allCommands.value.length - 1, currentCommand.value + 1);
      break;
    case "Enter":
      break;
  }
})

var queryTimeout: number;
watchEffect(async () => {
  let split = query.value.split(" ");
  let leftSide = split[0];
  let rightSide = split[1];

  if (query.value.toLowerCase().startsWith("play") && rightSide) {
    if (queryTimeout) clearTimeout(queryTimeout);

    queryTimeout = window.setTimeout(async () => {
      recommendations.value = await search(rightSide);
    }, 1000)
  } else {
    recommendations.value = [];
  }

  queryCommands.value = commands.filter(cmd => {
    return cmd.name.toLowerCase().startsWith(leftSide);
  })
});
</script>

<template>
  <input ref="queryElement" v-model="query" autofocus placeholder="Command" class="outline-none font-semibold p-2" />
  <template v-for="(cmd, index) in allCommands">
    <div :class="{ 'bg-green-600': index == currentCommand }">
      <CommandVue v-if="cmd.type == 'command'" :title="cmd.name" :description="cmd.description" :icon="`/${cmd.icon}`" />
      <CommandVue v-if="cmd.type == 'track'" :title="cmd.name" :description="cmd.artists[0].name" :icon="cmd.album.images[0].url" />
    </div>
  </template>
</template>
