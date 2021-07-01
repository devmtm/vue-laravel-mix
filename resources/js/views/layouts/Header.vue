<template>
  <div>
    Header {{ firstName + ' ' + lastName }}
    <input :style="styles" :class="classes" class="ttt" type="text" :value="firstName" @input="firstNameChanged">
    <br>
    <input type="text" v-model="lastName">
  </div>
</template>

<script>

export default {
  props: ['firstName'],

  data: () => (
      {
        lastName: "Mahmoud",
        styles: "color: red;",
        classes: "hello"
      }
  ),

  created() {
    this.$emit('lastNameChanged', this.lastName)
  },

  mounted() {
    this.lastName = 'HHHHHHHHHHH'
  },

  methods: {
    lastNameChanged() {
      this.$emit('lastNameChanged', this.lastName)
    },
    firstNameChanged(event) {
      this.$emit('firstNameChanged', event.target.value)
    }
  },

  watch: {
    lastName(newVal, oldValue) {
      console.log('Watch')
      this.lastNameChanged()
    },
    firstName(newVal, oldValue) {
      console.log(newVal, oldValue)
    }
  }
}

</script>

<style>
 .hello {
   font-size: 20px
 }
</style>