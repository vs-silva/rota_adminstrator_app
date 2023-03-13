<template>
  <div class="user-input-text-component-container">

    <InputTextComponent
        :inputID="'userNameInputFilter'"
        :inputLabel="'Filter User'"
        :placeHolderText="'Type user name'"
        :changeHandler="handlerUserFilterInputChange"
    />

  </div>
</template>

<script setup lang="ts">
import InputTextComponent from '../input-text/input-text-component.vue';
import Eventbus from "../../eventbus";
import {EventTypeConstants} from "../../eventbus/event-type.constants";

function handlerUserFilterInputChange(event: Event): void {
  //@ts-ignore
  Eventbus.emit(EventTypeConstants.FILTER_USER_ROTAS, event.target.value);
}

</script>

<style scoped>

</style>
