<template>
  <div class="rotas-filter-input-container">
    <div class="flex">
      <div class="mr-4">
        <InputDateComponent inputID="rotas-start-input" :inputLabel="'Start Date'" :changeHandler="handlerStartInputDateChange"/>
      </div>
      <div>
        <InputDateComponent inputID="rotas-end-input" :inputLabel="'End Date'" :changeHandler="handlerEndInputDateChange"/>
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

function handlerStartInputDateChange(event: InputEvent) {

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

function handlerEndInputDateChange(event: InputEvent) {

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

</script>

<style scoped>

</style>
