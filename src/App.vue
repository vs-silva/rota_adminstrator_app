<template>
  <div class="container mx-auto m-10">
    <LoaderComponent />
    <RotasAccordionComponent />

    {{rotas}}
    <br>
    {{rotas[0]}}

  </div>
</template>

<script setup lang="ts">
import Store from "./store";
import { storeToRefs } from 'pinia';
import {onBeforeMount, ref} from "vue";
import LoaderComponent from "./components/loader/loader-component.vue";
import RotasAccordionComponent from "./components/accordion/rotas-accordion-component.vue";

const rotaStore = Store.useRotaStore();
const userStore = Store.useUserStore();

const {rotas, rota} = storeToRefs(rotaStore);
const {users, user} = storeToRefs(userStore);

onBeforeMount(async () => {
  const awaitRotas = rotaStore.getAllRotas();
  const awaitUsers = userStore.getAllUsers();
  await Promise.all([awaitRotas, awaitUsers]);
  await rotaStore.mapUsersToRotas(users);
});


</script>

<style scoped>

</style>
