<template>
  <div class="reset-button-component-container">
    <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
            @click.stop.prevent="handlerFilterReset"
    >{{buttonLabel}}</button>
  </div>
</template>

<script setup lang="ts">

import Eventbus from "../../eventbus";
import {EventTypeConstants} from "../../eventbus/event-type.constants";

defineProps({
  buttonLabel: {
    type: String,
    required: false,
    default: () => ''
  }
});

function handlerFilterReset(event: Event):void {
  event.preventDefault();
  Eventbus.emit(EventTypeConstants.RESET_DATE_INPUTS);
  Eventbus.emit(EventTypeConstants.RESET_TEXT_INPUT);
}
</script>

<style scoped>

</style>
