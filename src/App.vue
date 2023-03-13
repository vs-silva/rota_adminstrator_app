<template>
  <div class="flex flex-row min-h-screen justify-center items-center pt-10">
    <LoaderComponent />

    <div class="flex">

      <div class="mr-10">
        <UsersTextInputComponent />
        <TitleComponent :sectionTitle="'Users'"/>
        <UsersListComponent :users="filteredUsers"/>
      </div>

      <div>
        <RotasFilterInputComponent />
        <TitleComponent :sectionTitle="'Rotas'"/>
        <RotasTableComponent :rotas="filteredRotas"/>
        <RotaModalComponent :rota="rota"/>
      </div>

    </div>
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
import UsersListComponent from "./components/users-list/users-list-component.vue";
import type {RotasOptionalFilterDTO} from "./integration/rotas/business/dtos/rotas-optional-filter.dto";
import TitleComponent from "./components/title/title-component.vue";
import UsersTextInputComponent from "./components/users-text-input/users-text-input-component.vue";

const rotaStore = Store.useRotaStore();
const userStore = Store.useUserStore();

const {rotas, filteredRotas, rota} = storeToRefs(rotaStore);
const {users, filteredUsers, user} = storeToRefs(userStore);

onBeforeMount(async () => {
  const awaitRotas = rotaStore.getAllRotas();
  const awaitUsers = userStore.getAllUsers();
  await Promise.all([awaitRotas, awaitUsers]);
  await rotaStore.mapUsersToRotas(users);
});

//@ts-ignore
Eventbus.on(EventTypeConstants.VIEW_USER_ROTAS_DETAILS, async (rotaDTO: RotaDTO) => {
  const awaitRota = rotaStore.getRotaById(rotaDTO.id);
  const awaitRotaUser = userStore.getUserById(rotaDTO.userID);
  await Promise.all([awaitRota, awaitRotaUser]);
  await rotaStore.setRotaUser(user);
});

//@ts-ignore
Eventbus.on(EventTypeConstants.FILTER_ROTAS, async (rotasFilterDTO: RotasOptionalFilterDTO) => {
  await rotaStore.updateFilterRotas(rotasFilterDTO);
});

//@ts-ignore
Eventbus.on(EventTypeConstants.FILTER_USER_ROTAS, async (username: string) => {
  await rotaStore.filterUserRotas(username);
});

</script>

<style scoped>

</style>
