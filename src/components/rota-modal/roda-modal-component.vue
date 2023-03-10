<template>
  <ModalComponent>

    <template #modalHeaderContent>
      <h1>Rota Details</h1>
    </template>

    <template #modalBodyContent>

      <div>
        <ul>
          <li><span>Type: <span class="capitalize">{{rota.type}}</span></span></li>
          <li><span>Date: <span>{{rota.date}}</span></span></li>
          <li><span>Start date: <span>{{rota.startDate}}</span></span></li>
          <li><span>End date: <span>{{rota.endDate}}</span></span></li>
        </ul>
      </div>

      <div v-if="rota.user">
        <h3 class="text-lg font-light text-gray-500 dark:text-gray-400">User details</h3>
        <ul>
          <li><span>Name: <span>{{rota.user.name}}</span></span></li>
          <li><span>Email: <span><a href="mailto:`${rota.user.email}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">{{rota.user.email}}</a></span></span></li>
        </ul>
      </div>

    </template>

  </ModalComponent>
</template>

<script setup lang="ts">
import ModalComponent from "../modal/modal-component.vue";
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";
import {PropType} from "vue";

defineProps({
  rota: {
    type: Object as PropType<RotaDTO>,
    required: false,
    default: () => <RotaDTO>{}
  }
});
</script>

<style scoped>

</style>
