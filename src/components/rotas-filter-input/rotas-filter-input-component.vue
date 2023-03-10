<template>
  <div class="rotas-filter-input-container">
    <div class="flex">
      <div class="mr-4">
        <InputDateComponent inputID="rotas-start-input" :inputLabel="'Start Date'" :changeHandler="handlerStartInputDateChange"/>
      </div>
      <div class="mr-4">
        <InputDateComponent inputID="rotas-end-input" :inputLabel="'End Date'" :changeHandler="handlerEndInputDateChange"/>
      </div>
      <div class="pt-6">
        <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                @click.stop.prevent="handlerFilterReset"
        >Reset Filter</button>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import InputDateComponent from "../input-date/input-date-component.vue";
import Eventbus from "../../eventbus";
import {EventTypeConstants} from "../../eventbus/event-type.constants";
import type {RotasOptionalFilterDTO} from "../../integration/rotas/business/dtos/rotas-optional-filter.dto";
import {ref} from "vue";

const selectedStartDate = ref('');
const selectedEndDate = ref('');

function handlerStartInputDateChange(event: Event) {
  event.preventDefault();

  //@ts-ignore
  selectedStartDate.value = event.target.value;
  if(validDates()){
    Eventbus.emit(EventTypeConstants.FILTER_ROTAS, <RotasOptionalFilterDTO>{
      //@ts-ignore
      startDate: event.target.value,
      endDate: selectedEndDate.value
    });
  }
}

function handlerEndInputDateChange(event: Event) {
  event.preventDefault();

  //@ts-ignore
  selectedEndDate.value = event.target.value;

  if(validDates()){
    Eventbus.emit(EventTypeConstants.FILTER_ROTAS, <RotasOptionalFilterDTO>{
      startDate: selectedStartDate.value,
      //@ts-ignore
      endDate: event.target.value
    });
  }
}

function validDates():boolean {
  if(Date.parse(selectedEndDate.value) < Date.parse(selectedStartDate.value)) {
    alert('End date cannot be higher than start date');
    return false;
  }
  return true;
}

function handlerFilterReset(event: MouseEvent) {
  event.preventDefault();
  selectedStartDate.value = '';
  selectedEndDate.value = '';
  Eventbus.emit(EventTypeConstants.RESET_DATE_INPUTS);
  Eventbus.emit(EventTypeConstants.FILTER_ROTAS, <RotasOptionalFilterDTO>{
    startDate: selectedStartDate.value,
    endDate: selectedEndDate.value
  });
}

</script>

<style scoped>

</style>
