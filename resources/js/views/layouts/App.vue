<template>
  <div>
    Hello Template
    <MyHeader></MyHeader>
    <span>***************************************</span>
    <example-component></example-component>
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

  created() {
    console.log('Layout Created!');
  },

  mounted() {
    console.log('Layout Mounted!');
  }
}

</script>