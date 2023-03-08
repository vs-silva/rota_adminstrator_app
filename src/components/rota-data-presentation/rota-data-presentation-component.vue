<template>
  <div id="rotaComponentContainer" class="overflow-x-auto border-x border-t">
    {{rotas}}
    <table class="table-auto w-full">
      <thead class="border-b">
      <tr class="bg-gray-100">
        <th class="text-left p-4 font-medium">
          Name
        </th>
        <th class="text-left p-4 font-medium">
          Email
        </th>
        <th class="text-left p-4 font-medium">
          Role
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="border-b hover:bg-gray-50">
        <td class="p-4">
          Prof. Lucie Waters
        </td>
        <td class="p-4">
          basic@example.com
        </td>
        <td class="p-4">
          Administrator
        </td>
      </tr>
      <tr class="border-b hover:bg-gray-50">
        <td class="p-4">
          Anahi Bashirian (You)
        </td>
        <td class="p-4">
          admin@example.com
        </td>
        <td class="p-4">
          Super Administrator
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import type {RotaDTO} from "../../integration/rotas/business/dtos/rota.dto";

defineProps({
  rotas: {
    type: Array as PropType<RotaDTO[]>,
    required: false,
    default: () => <RotaDTO[]>[]
  }
});

</script>

<style scoped>

</style>
