<template>
  <input
    type="text"
    :value="modelValue"
    @input="onInput"
    placeholder="Input your To Do..."
    class="input"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
}

const { modelValue } = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<style scoped lang="css">
.input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 14px;
}
</style>
