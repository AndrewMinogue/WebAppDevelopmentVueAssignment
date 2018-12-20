<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i style="padding: 1px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <pizzadeal-form :pizzadeal="pizzadeal" pizzaDealTitle="Update Pizza Deal"
                        @order-is-created-updated="updatePizzaDeal"></pizzadeal-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
  import PizzaDealForm from '@/components/PizzaDealForm'
  import dealpizza from "@/services/dealpizza";

  export default {
    data () {
      return {
        pizzadeal: {},
        childDataLoaded: false,
        temp: {},
        messagetitle: ' '
      }
    },
    components: {
      'pizzadeal-form': PizzaDealForm
    },
    created () {
      this.getPizzaDeal()
    },
    methods: {
      getPizzaDeal: function () {
        dealpizza.fetchPizzaDeal(this.$router.params)
          .then(response => {
            this.temp = response.data
            this.pizzadeal = this.temp[0]
            this.childDataLoaded = true
            console.log('Getting Pizza Deal to Edit: ' + JSON.stringify(this.pizzadeal, null, 5))
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      updatePizzaDeal: function (pizzadeal) {
        console.log('Before PUT ' + JSON.stringify(pizzadeal, null, 5))
        dealpizza.putPizzaDeal(this.$router.params, pizzadeal)
          .then(response => {
            console.log(response)
            console.log('AFTER PUT ' + JSON.stringify(pizzadeal, null, 5))
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
