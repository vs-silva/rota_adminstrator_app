<template>
  <div class="container mx-auto m-10">
    <LoaderComponent />
    <TableComponent :rotas="rotas"/>

  </div>
</template>

<script setup lang="ts">
import Store from "./store";
import { storeToRefs } from 'pinia';
import {onBeforeMount, ref} from "vue";
import LoaderComponent from "./components/loader/loader-component.vue";
import TableComponent from "./components/table/table-component.vue";
import Eventbus from "./eventbus";
import {EventTypeConstants} from "./eventbus/event-type.constants";

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

//@ts-ignore
Eventbus.on(EventTypeConstants.VIEW_USER_ROTAS_DETAILS, async (rotaID: number) => {
  await rotaStore.getRotaById(rotaID);
  console.log(rota.value);
});

</script>

<style scoped>

</style>
