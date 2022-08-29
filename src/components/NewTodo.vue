<template>
  <form @submit.prevent="submitData" class="add-new">
    <h4>Add:</h4>
    <div>
      <input type="text" v-model="enterTodo" />
    </div>
    <div>
      <button>Add Todo</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-todo"],
  data() {
    return {
      enterTodo: ""
    };
  },
  methods: {
    submitData() {
      this.$emit("add-todo", this.enterTodo);
    }
  }
};
</script>