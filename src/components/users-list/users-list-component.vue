<template>
  <div class="user-list-component-container">

    <div>
      <ul>
        <li v-for="user in users" :key="user.id" :id="user.id.toString()" class="border-b-2">
          <div class="p-4">
            <p>{{user.name}}</p>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import {PropType} from "vue";
import type {UserDTO} from "../../integration/users/business/dtos/user.dto";

defineProps({
  users: {
    type: Array as PropType<UserDTO[]>,
    required: false,
    default: () => <UserDTO[]>[]
  }
});


</script>

<style scoped>

</style>
