<template>
  <div class="rotas-table-component-container">
    <table class="table-auto w-full text-sm text-center">
      <thead class="text-xs text-gray-700 uppercase">
      <tr class="border-b-4">
        <th class="px-6 py-3">{{RotasTableHeaderConstants.ROTA_TYPE}}</th>
        <th class="px-6 py-3">{{RotasTableHeaderConstants.ROTA_DATE}}</th>
        <th class="px-6 py-3">{{RotasTableHeaderConstants.ROTA_DATE_START}}</th>
        <th class="px-6 py-3">{{RotasTableHeaderConstants.ROTA_DATE_END}}</th>
        <th class="px-6 py-3">{{RotasTableHeaderConstants.ROTA_USER_NAME}}</th>
        <th class="px-6 py-3">{{RotasTableHeaderConstants.ROTA_DETAIL}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="rota in rotas" :key="rota.id" :id="rota.id.toString()" class="border-b-2">
        <td class="px-6 py-4 font-medium text-gray-900"><span>{{rota.type}}</span></td>
        <td class="px-6 py-4 font-medium text-gray-900"><span>{{rota.date}}</span></td>
        <td class="px-6 py-4 font-medium text-gray-900"><span>{{rota.startDate}}</span></td>
        <td class="px-6 py-4 font-medium text-gray-900"><span>{{rota.endDate}}</span></td>
        <td class="px-6 py-4 font-medium text-gray-900"><span v-if="rota.user">{{rota.user.name}}</span></td>
        <td class="px-6 py-4 font-medium text-gray-900">
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  @click.stop.prevent="RotasTableEventsHandlers.rotasDetailsClickHandlers(rota)"
          >{{RotasTableHeaderConstants.ROTA_DETAIL_BUTTON}}</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup lang="ts">
import {PropType} from "vue";
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";
import {RotasTableHeaderConstants} from "./utils/rotas-table-header.constants";
import {RotasTableEventsHandlers} from "./utils/rotas-table-events.handlers";

defineProps({
  rotas: {
    type: Array as PropType<RotaDTO[]>,
    required: false,
    default: () => []
  },
});

</script>

<style scoped>

</style>
