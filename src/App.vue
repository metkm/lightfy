<script setup lang="ts">
import { globalShortcut } from '@tauri-apps/api';
import { appWindow } from '@tauri-apps/api/window';
import { onMounted } from 'vue';

const keyCombo = "CmdOrControl+Space";
const htmlElement = document.getElementsByTagName("html")[0];

onMounted(async () => {
  let isRegistered = await globalShortcut.isRegistered(keyCombo);
  if (isRegistered) return;

  globalShortcut.register(keyCombo, async () => {
    let isVisible = await appWindow.isVisible();

    if (isVisible) {
      appWindow.hide();
    } else {
      appWindow.show();
      appWindow.setFocus();
    }
  })
})
</script>

<template>
  <router-view></router-view>
</template>
