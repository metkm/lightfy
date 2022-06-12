<script setup lang="ts">
defineProps<{
  img: string,
  title: string
}>();
</script>

<template>
  <div class="flex gap-4 p-2 bg-green-600">
    <img :src="img" class="h-10 rounded">
    <div>
      <p>{{ title }}</p>
    </div>
  </div>
</template>