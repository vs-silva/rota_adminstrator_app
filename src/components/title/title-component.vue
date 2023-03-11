<template>
<div class="p-4 w-full" >
  <h1 class="w-full text-sm text-center mb-2 uppercase font-bold">{{sectionTitle}}</h1>
</div>
</template>

<script setup lang="ts">

  defineProps({
    sectionTitle: {
      type: String,
      required: false,
      default: () => ''
    }
  });

</script>

<style scoped>

</style>
