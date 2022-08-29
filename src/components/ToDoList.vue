<template>
  <section>
    <ul>
      <div v-for="item in toDo" :key="item.id" class="box-todo">
        <li :class="{ active: item.checked }">
          <form v-if="item.isEdit" @submit.prevent="updateTodo(item.id)">
            <input class="input-edit" type="text" :id="item.id" v-model="item.name" />
            <button class="btn btn-update">Update</button>
          </form>
          <div v-else>
            <input
              type="checkbox"
              :model="data.name"
              :value="data.name"
              :checked="item.checked"
              @click="$emit('checkDoneTodo', item.id)"
            />
            <b>{{ item.name }}</b>
            <button @click="$emit('edit', item.id)" class="btn btn-edit">Edit</button>
            <button @click="$emit('delete', item.id)" class="btn btn-delete">Remove</button>
          </div>
        </li>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    toDo: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isEdit: false,
      data: {
        id: this.id,
        name: this.name
      }
    };
  },
  methods: {
    updateTodo(id) {
      console.log(id);
      this.$emit("update", id);
    }
  }
};
</script>
<style scoped>
.active {
  background: #a7a3f6;
}
.input-edit {
  width: 50%;
  display: inline;
}
.box-todo {
  width: 30rem;
}
.btn-edit {
  margin-left: 150px;
  position: relative;
}
</style>