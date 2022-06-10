<script setup lang="ts">
defineProps<{
  command: "play" | "resume"
}>();
</script>

<template>
  <div class="flex gap-4 p-2">
    <img :src="`/${command}.svg`" class="h-20" />
    <div class="flex flex-col justify-center">
      <p class="font-semibold">Play Sunflower {{ command }}</p>
      <p class="text-neutral-400">Plays a song</p>
    </div>
  </div>
</template>