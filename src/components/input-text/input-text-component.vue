<template>
  <div class="input-text-container">
    <label :for="inputID">{{inputLabel}}</label>
    <input
        :id="inputID"
        type="text"
        v-model="inputValue"
        :placeholder="placeHolderText"
        @input.prevent.stop="changeHandler"
        class="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
</template>

<script setup lang="ts">

import {PropType, ref} from "vue";
import Eventbus from "../../eventbus";
import {EventTypeConstants} from "../../eventbus/event-type.constants";

const inputValue = ref('');

defineProps({
  inputID: {
    type: String,
    required: false,
    default: () => ''
  },
  inputLabel: {
    type: String,
    required: false,
    default: () => ''
  },
  placeHolderText: {
    type: String,
    required: false,
    default: () => ''
  },
  changeHandler: {
    type: Function as PropType<(payload: Event) => void>,
    required: false,
    default: () => {
      console.log('using default handler. got changed');
    }
  }
});

Eventbus.on(EventTypeConstants.RESET_TEXT_INPUT, () => {
  inputValue.value = '';
});

</script>

<style scoped>

</style>
