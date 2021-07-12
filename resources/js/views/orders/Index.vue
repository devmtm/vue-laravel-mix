<template>
  <div>
    Hello Index
    <ul>
      <li v-for="order in orders">{{ order.name }}</li>
    </ul>
    <router-link :to="{name: 'orders.create'}">New</router-link>
  </div>
</template>

<script>

export default {

  data: () => (
      {
        orders: null
      }
  ),

  methods: {

  },

  mounted() {
    let _this = this
    axios.get('/api/orders', {headers: [], params: {id: 10}})
        .then(function (response) {
          // handle success
          _this.orders = response.data.orders
          // console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    console.log('Orders Index mounted.')
  }
}
</script>

<style>

.pt-10 {
  padding-top: 10px;
}

</style>
