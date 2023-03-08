<template>
  <div class="container mx-auto m-10">
    <LoaderComponent />
    <RotaDataPresentationComponent :rotas="rotas"/>

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
const rotasStore = Store.useRotasStore();

const { users } = storeToRefs(usersStore);
const { rotas } = storeToRefs(rotasStore);

onBeforeMount(async () => {
  //await usersStore.getAllUsers();
  await rotasStore.getAllRotas();
});

</script>

<style scoped>

</style>
