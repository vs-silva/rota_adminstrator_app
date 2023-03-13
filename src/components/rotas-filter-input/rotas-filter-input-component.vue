<template>
  <div class="rotas-filter-input-container">
    <div class="flex">
      <div class="mr-4">
        <InputDateComponent :inputID="'rotas-start-input'" :inputLabel="'Start Date'" :changeHandler="handlerStartInputDateChange"/>
      </div>
      <div class="mr-4">
        <InputDateComponent :inputID="'rotas-end-input'" :inputLabel="'End Date'" :changeHandler="handlerEndInputDateChange"/>
      </div>
      <div class="pt-6">
        <ResetButtonComponent :buttonLabel="'Reset Filters'"/>
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
import ResetButtonComponent from "../reset-button/reset-button-component.vue";

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

Eventbus.on(EventTypeConstants.RESET_DATE_INPUTS, () => {
  selectedStartDate.value = '';
  selectedEndDate.value = '';
  Eventbus.emit(EventTypeConstants.FILTER_ROTAS, <RotasOptionalFilterDTO>{
    startDate: selectedStartDate.value,
    endDate: selectedEndDate.value
  });
});

</script>

<style scoped>

</style>
