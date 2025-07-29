<template>
  <div>
    <InputText v-model="userName" />
    <InputText v-model="email" />
    <InputText v-model="gender" />
    <ButtonTodo @click="handleClick">Add User</ButtonTodo>
    <ul>
      <li v-for="(user, index) in userList" :key="index">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.gender }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import InputText from "../components/InputText.vue";
import ButtonTodo from "../components/ButtonTodo.vue";

export default {
  components: {
    InputText,
    ButtonTodo,
  },

  setup() {
    const state = reactive({
      userName: "",
      email: "",
      gender: "",
      userList: [],
    });

    const handleClick = () => {
      // contoh logika
      state.userList.push({
        name: state.userName,
        email: state.email,
        gender: state.gender,
      });

      // reset input
      state.userName = "";
      state.email = "";
      state.gender = "";
    };

    return {
      ...toRefs(state),
      handleClick,
    };
  },
};
</script>

<style lang="css" scoped></style>
