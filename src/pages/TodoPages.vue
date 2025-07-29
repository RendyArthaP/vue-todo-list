<script setup lang="ts">
import { ref } from "vue";
import ButtonTodo from "../components/ButtonTodo.vue";
import InputText from "../components/InputText.vue";

const todoValue = ref("");
const todoList = ref<string[]>([]);

const handleClick = () => {
  todoList.value.push(todoValue.value);

  todoValue.value = "";
};
</script>

<template>
  <div>
    <InputText v-model="todoValue" />
    <ButtonTodo @click="handleClick" :disabled="todoValue === ''">
      Input
    </ButtonTodo>
    <ul>
      <li v-for="(todo, index) in todoList" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped></style>
