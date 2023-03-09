<template>
  <div class="table-component-container">
    <table class="table-auto">
      <thead>
      <tr>
        <th class="p-2"><span>{{RotasTableComponentHeadersConstants.ROTA_TYPE}}</span></th>
        <th class="p-2"><span>{{RotasTableComponentHeadersConstants.ROTA_DATE}}</span></th>
        <th class="p-2"><span>{{RotasTableComponentHeadersConstants.ROTA_DATE_START}}</span></th>
        <th class="p-2"><span>{{RotasTableComponentHeadersConstants.ROTA_DATE_END}}</span></th>
        <th class="p-2"><span>{{RotasTableComponentHeadersConstants.ROTA_USER_NAME}}</span></th>
        <th class="p-2"><span>{{RotasTableComponentHeadersConstants.ROTA_VIEW_DETAILS}}</span></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="rota in rotas" :key="rota.id" :id="rota.id" :class="setRotaRowColor(rota.type)">
        <td class="p-2"><span>{{rota.type}}</span></td>
        <td class="p-2"><span>{{rota.date}}</span></td>
        <td class="p-2"><span>{{rota.startDate}}</span></td>
        <td class="p-2"><span>{{rota.endDate}}</span></td>
        <td class="p-2"><span v-if="rota.user">{{rota.user.name}}</span></td>
        <td class="p-2">
          <div class="flex justify-center space-x-2">
            <button class="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    @click.stop.prevent="RotasTableComponentEventHandlers.handleRotaDetailViewClick(rota.id)"
            >
              {{RotasTableComponentHeadersConstants.ROTA_VIEW_DETAILS_TRIGGER}}
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";
import {RotasTableComponentHeadersConstants} from "./utils/rotas-table-component-headers.constants";
import {RotasTableComponentEventHandlers} from './utils/rotas-table-component-event.handlers';

defineProps({
  rotas: {
    type: Array as PropType<RotaDTO[]>,
    required: false,
    default: () => []
  }
});

function setRotaRowColor(rotaType: string) :string {
  return rotaType.toLowerCase().trim() === 'morning' ? 'bg-amber-500' : 'bg-slate-500';
}

</script>

<style scoped>

</style>
