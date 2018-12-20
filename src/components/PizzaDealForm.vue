<template>
  <div id="app1" class="hero">
    <h3  class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group">
              <label class="form-label">Please Enter a deal name</label>
              <input class="form__input" id="deals" name="deals" v-model="deals"/>
            </div>
            <div class="form-group">
              <label class="form-label">Pick a Pizza type</label>
              <select type="text" v-model="pizza">
                <option value="null" selected disabled hidden>Pick A Pizza Type</option>
                <option value="Pepperoni">Pepperoni</option>
                <option value="MeatLover">MeatLover</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Plain">Plain</option>
                <option value="Ham">Ham</option>
                <option value="Pineapple">Pineapple</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">What Side would you Like?</label>
              <input class="form__input" id="deal" name="deal" v-model="deal"/>
            </div>
            <div class="form-group">
              <label class="form-label">Please pick a drink!</label>
              <select type="text" v-model="drink">
                <option value="null" selected disabled hidden>Pick A Pizza Type</option>
                <option value="Coke">Coke</option>
                <option value="7up">7up</option>
                <option value="Fanta">Fanta</option>
                <option value="Sprite">Sprite</option>
                <option value="Monster">Monster</option>
                <option value="Water">Water</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">PizzaDeal Price</label>
              <input class="form__input" id="price" name="price" v-model="price"/>
            </div>
            <div class="form-group">
              <label class="form-label">Give your order a rating</label>
              <select id="rating" name="rating" class="form-control" type="Number" v-model="rating">
                <option value="null" selected disabled hidden>Rate your order</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
            <p>
              <button class="btn btn-primary btn1" id = 'submit' type="submit" :disabled="submitStatus === 'PENDING'">Place Order</button>
            </p>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Order!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Error Complete Form / Or Not Logged in!</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Completing Order...</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuelidate from 'vuelidate'
  import VueForm from 'vueform'
  import { required, minLength, maxLength, between } from 'vuelidate/lib/validators';


  Vue.use(VueForm, {
    inputClasses: {
      valid: 'form-control-success',
      invalid: 'form-control-danger'
    }
  })

  Vue.use(Vuelidate)

  export default {
    name: 'MakePizzaDeal',
    props: ['pizzaDealTitle','pizzadeals'],
    data () {
      return {
        messagetitle: ' Place An Order ',
        deals: this.pizzadeals.deals,
        pizza: this.pizzadeals.pizza,
        side: this.pizzadeals.side,
        drink:this.pizzadeals.drink,
        price:this.pizzadeals.price,
        submitStatus: null,
        rating: 0,
        pizzas: {},
      }
    },
    validations: {
      deals:
        {
          required,
          minLength: minLength(4)
        },
      pizza: {
        required,
        maxLength: maxLength(20)
      },
      price: {
        required,
        between:between(10,300)
      },
      side: {
        required,
        maxLength: maxLength(6)
      },
      drink: {
        required,
        maxLength: maxLength(10)
      },
      rating: {
        required,
        maxLength: maxLength(10)
      },
    },
    methods: {
      submit () {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
            var pizzadeals = {
              deals: this.pizzadeals.deals,
              pizza: this.pizzadeals.pizza,
              side: this.pizzadeals.side,
              drink:this.pizzadeals.drink,
              price:this.pizzadeals.price,
            }
            this.pizzas = pizzas;
            console.log('Submitting in OrderForm : ' +
              JSON.stringify(this.pizzas, null, 5))
            this.$emit('order-is-created-updated', this.pizzas)
          }, 500)
        }
      },
    }
  }

</script>


<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
</style>
