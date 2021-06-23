<template>
  <div>
    <div style="display: inline-flex">
      <p class="pt-10">Message: {{ message }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    <div class="pt-10">
      <ol>
        <li v-for="(todo, index) in todos">
          {{ todo.text }} <input v-model="todo.text"> <button @click="remove(index)">Remove</button>
        </li>
      </ol>

      <button v-on:click="addItem">Add Item</button>
      <button v-on:click="submitForm">Submit</button>

    </div>

  </div>
</template>

<script>
export default {

  data: () => (
      {
        message: 'Hello Yousef!',
        todos: [
          {text: 'Learn JavaScript'},
          {text: 'Learn Vue'},
          {text: 'Build something awesome'}
        ]

      }
  ),

  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },

    addItem() {
      this.todos.push({text: 'New ' + new Date().toLocaleString()})
    },

    remove(index) {
      this.todos.splice(index, 1)
    },

    submitForm() {
      console.log(this.todos)
    },
  },

  mounted() {
    console.log('Example mounted.')
  }
}
</script>

<style>

.pt-10 {
  padding-top: 10px;
}

</style>
