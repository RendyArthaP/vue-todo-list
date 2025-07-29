<template>
  <button class="btn" @click="onClick" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const props = defineProps<ButtonProps>();
const emit = defineEmits<{
  (event: "click"): void;
}>();

const onClick = () => {
  if (props.disabled) return;
  emit("click");
};
</script>

<style lang="css">
.btn {
  padding: 10px 20px;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
}
</style>
