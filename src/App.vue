<template>
  <div class="container mx-auto m-10">
    <LoaderComponent />
    <RotasFilterInputComponent />
    <RotasTableComponent :rotas="rotas"/>
    <RotaModalComponent :rota="rota"/>
  </div>
</template>

<script setup lang="ts">
import Store from "./store";
import { storeToRefs } from 'pinia';
import {onBeforeMount} from "vue";
import Eventbus from "./eventbus";
import {EventTypeConstants} from "./eventbus/event-type.constants";
import LoaderComponent from "./components/loader/loader-component.vue";
import type {RotaDTO} from "./integration/rotas/business/dtos/rota.dto";
import RotasTableComponent from "./components/rotas-table/rotas-table-component.vue";
import RotaModalComponent from "./components/rota-modal/roda-modal-component.vue";
import RotasFilterInputComponent from "./components/rotas-filter-input/rotas-filter-input-component.vue";
import type {RotasOptionalFilterDTO} from "./integration/rotas/business/dtos/rotas-optional-filter.dto";


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
Eventbus.on(EventTypeConstants.VIEW_USER_ROTAS_DETAILS, async (rotaDTO: RotaDTO) => {
  await rotaStore.setSpecificRota(rotaDTO);
});

//@ts-ignore
Eventbus.on(EventTypeConstants.FILTER_ROTAS, (rotasFilterDTO: RotasOptionalFilterDTO) => {
  console.log(rotasFilterDTO);
});

</script>

<style scoped>

</style>
