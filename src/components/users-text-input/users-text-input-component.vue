<template>
  <div class="user-input-text-component-container">

    <InputTextComponent
        :inputID="'userNameInputFilter'"
        :inputLabel="'Filter User'"
        :placeHolderText="'Type user name'"
    />

  </div>
</template>

<script setup lang="ts">
import InputTextComponent from '../input-text/input-text-component.vue';

</script>

<style scoped>

</style>
