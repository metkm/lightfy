<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
  icon: string
}>();
</script>

<template>
  <div class="flex gap-4 p-2">
    <img :src="`/${icon}.svg`" class="h-20" />
    <div class="flex flex-col justify-center">
      <p class="font-semibold">{{ title }}</p>
      <p class="text-neutral-400">{{ description }}</p>
    </div>
  </div>
</template>