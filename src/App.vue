<template>
  <div>
    <LoaderComponent />
    <RotaDataPresentationComponent />

    <p>users</p>
    <p class="mr-2">{{users}}</p>
  </div>
</template>

<script setup lang="ts">
import Store from "./store";
import { storeToRefs } from 'pinia';
import {onBeforeMount} from "vue";

import LoaderComponent from './components/loader/loader-component.vue';
import RotaDataPresentationComponent from "./components/rota-data-presentation/rota-data-presentation-component.vue";

const usersStore = Store.useUserStore();

const { users } = storeToRefs(usersStore);

onBeforeMount(async () => {
  await usersStore.getAllUsers();
});

</script>

<style scoped>

</style>
