<template>
  <div>
    <div>
      <router-link :to="{name:'home'}">Home</router-link>
      <router-link :to="{name:'example1'}">Example</router-link>
    </div>

    <router-view></router-view>
<!--    <example-component></example-component>-->
  </div>
</template>

<script>

import MyHeader from './Header.vue'
import ExampleComponent from "../../components/ExampleComponent";

export default {
  components: {
    ExampleComponent,
    MyHeader,
  },

  data: () => ({
    firstName: "Ahmed",
    lastName: "",
    id: 1
  }),

  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
  },

  created() {
    console.log('Layout Created!');
  },

  mounted() {
    console.log('Layout Mounted!');
  },

  methods: {

    lastNameChanged(name) {
      this.lastName = name
      console.log('lastNameChanged APP', name);

    },
    firstNameChanged(firstName) {
      this.firstName = firstName
      // console.log('lastNameChanged APP', firstName);

    }
  }
}

</script>