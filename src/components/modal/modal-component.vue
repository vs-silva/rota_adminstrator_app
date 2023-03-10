<template>
  <div v-if="showModal" class="c-modal-background">
    <div class="c-modal-content">

      <!-- Modal header -->
      <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 class="text-xl font-semibold">
          <slot name="modalHeaderContent"></slot>
        </h3>
        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click.stop.prevent="closeModal">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>

      <!-- Modal body -->
      <div class="p-6 space-y-6">
        <slot name="modalBodyContent"></slot>
      </div>

      <!-- Modal footer -->
      <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
        <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
         @click.stop.prevent="closeModal"
        >Close</button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Eventbus from "../../eventbus";
import {EventTypeConstants} from "../../eventbus/event-type.constants";

const showModal = ref(false);

Eventbus.on(EventTypeConstants.OPEN_MODAL, () => {
  showModal.value = true;
});

function closeModal(): void {
  showModal.value = false;
}

</script>

<style scoped>
.c-modal-background {
  position: fixed;
  z-index: 40;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0 ,.5);
}

.c-modal-content {
  background-color: white;
  margin: 10% auto;
  padding: 1.6em;
  width: 50%;
  color: black;
  overflow: auto;
}

</style>
