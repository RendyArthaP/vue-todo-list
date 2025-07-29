<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Todo</RouterLink> |
      <RouterLink to="/users">User</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 16px;
}
</style>
