<template>
  <div id="app1">
    <v-client-table :columns="columns" :data="pizzadeals" :options="options">
      <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x VueTables__sortable"  @click="upvotePizzaDeal(props.row._id)"></a>
      <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x VueTables__sortable" @click="editPizzaDeal(props.row._id)"></a>
      <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x VueTables__sortable" @click="deletePizzaDeal(props.row._id)"></a>
    </v-client-table>
  </div>
</template>

<script>

  import pizzadeals from '@/services/pizzadeals'
  import Vue from 'vue'
  import VueTables from 'vue-tables-2'

  Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

  export default {
    name: 'Pizzas',
    data () {
      return {
        messagetitle: ' List of Pizzas ',
        pizzadeals: [{"deals" : String , "pizza" : String , "price" : Number , "side" : String , "drink" : String ,  "rating": Number }],
        errors: [],
        props: ['_id'],
        columns: ['_id', 'deals', 'pizza', 'price','side','drink','rating','upvote','remove','edit'],
        options: {
          sortable: ['upvotes'],
          firtable:[],
          perPage: 10,
          headings: {
            _id: 'ID',
            deals: 'Deal Name',
            pizza: 'Pizza Type',
            price: 'Price',
            drink: 'Drink',
            side: 'Side',
            rating: 'rating',
          }
        }
      }
    },

    created () {
      this.loadPizzaDeals()
    },
    methods: {
      loadPizzaDeals: function () {
        pizzadeals.fetchPizzaDeals()
          .then(response => {
            this.pizzas = response.data
            console.log(this.pizzas)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      upvotePizzaDeal: function (id) {
        pizzadeals.upvotePizzaDeal(id)
          .then(response => {

            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },

      deletePizzaDeal: function (id) {
        var user = firebase.auth().currentUser;
        if (user) {
          this.$swal({
            title: 'Are you sure?',
            text: 'You can\'t Undo this action',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
            showCloseButton: true,
            showLoaderOnConfirm: true
          }).then((result) => {
            console.log('SWAL Result : ' + result.value)
            if (result.value === true) {
              pizzadeals.deletePizzaDeal(id)
                .then(response => {
                  // JSON responses are automatically parsed.
                  this.message = response.data
                  console.log(this.message)
                  this.loadPizzaDeals()
                  Vue.nextTick(() => this.$refs.vuetable.refresh())
                  this.$swal('Deleted', 'Poof! Pizza Deal Deleted ', 'success')
                  console.log('Swal Result : ' + result.value)
                })
                .catch(error => {
                  this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
                  this.errors.push(error)
                  console.log(error)
                })
            } else {
              this.$swal('Cancelled', 'Your Deal lives another day!', 'info')
            }
          })
        }else{

        }
      },
      editPizzaDeal: function (id) {
        this.$router.params = id
        this.$router.push('edit')
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 100%;
    margin: 0 auto;
  }

  .VueTables__sortable {
    cursor: pointer;
  }
</style>
