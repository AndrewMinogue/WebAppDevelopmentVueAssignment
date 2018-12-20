<template>
  <div id="app" class="background">
    <b-navbar toggleable="md" variant="info" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/pizzacake.jpg" class="img-circle" height="50px" width="50px" style="padding: 5px">
      <b-navbar-brand to="/">Pizza Party</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav >
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px; color: white;"> Home</i></b-nav-item>
          <b-nav-item-dropdown  style="color: white;" text="PizzaOrders" right>
            <b-dropdown-item to="/OrderPizza">Order Pizza</b-dropdown-item>
            <b-dropdown-item to="/Pizzas">View All Orders</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown style="color: white;"  text="PizzaDeals" right>
            <b-dropdown-item to="/MakePizzaDeal">Make Pizza Deal</b-dropdown-item>
            <b-dropdown-item to="/PizzaDeals">View Pizza Deals</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown style="color: white;" text="Information" right>
            <b-dropdown-item to="/AboutUs">About Us</b-dropdown-item>
            <b-dropdown-item to="/ContactUs">Contact Us</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item to="/Login">Login</b-dropdown-item>
            <b-dropdown-item to="/SignUp">Sign Up</b-dropdown-item>
          </b-nav-item-dropdown>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>

<style>

  #app {
    font-family: "Times New Roman", Times, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color:#5788D5;
    background-color: #d5dced;
    margin-top: 0px;
  }
</style>

