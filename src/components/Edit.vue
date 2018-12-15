<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i style="padding: 1px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <order-form :pizzas="pizzas" orderTitle="Update Order"
                           @order-is-created-updated="updateOrder"></order-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
  import OrderPizzaForm from '@/components/OrderPizzaForm'
  import listpizzas from "@/services/listpizzas";

  export default {
    data () {
      return {
        pizzas: {},
        childDataLoaded: false,
        temp: {},
        messagetitle: ' '
      }
    },
    components: {
      'order-form': OrderPizzaForm
    },
    created () {
      this.getOrder()
    },
    methods: {
      getOrder: function () {
        listpizzas.fetchOrder(this.$router.params)
          .then(response => {
            this.temp = response.data
            this.pizzas = this.temp[0]
            this.childDataLoaded = true
            console.log('Getting Order to Edit: ' + JSON.stringify(this.pizzas, null, 5))
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      updateOrder: function (pizzas) {
        console.log('Before PUT ' + JSON.stringify(pizzas, null, 5))
        listpizzas.putOrder(this.$router.params, pizzas)
          .then(response => {
            console.log(response)
            console.log('AFTER PUT ' + JSON.stringify(pizzas, null, 5))
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
