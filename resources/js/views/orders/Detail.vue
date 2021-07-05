<template>
  <div>
    Hello Detail
  </div>
</template>

<script>
export default {

  props: ['id'],

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
    console.log('Example mounted.', this.id)
  }
}
</script>

<style>

.pt-10 {
  padding-top: 10px;
}

</style>
