<template>
  <div id="app" class="background">
    <b-navbar toggleable="md" variant="info" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/pizzacake.jpg" class="img-circle" height="50px" width="50px" style="padding: 5px">
      <b-navbar-brand to="/">Pizza Party</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav >
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px; color: white;"> Home</i></b-nav-item>
          <b-nav-item to="/OrderPizza"><i class="fa fa-list" style="padding: 5px; color: white;"> Make Orders</i></b-nav-item>
          <b-nav-item to="/Pizzas"><i class="fa fa-money" style="padding: 5px; color: white;"> List of Orders</i></b-nav-item>
          <b-nav-item to="/Map"><i class="fa fa-globe" style="padding: 5px; color: white;"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/AboutUs"><i class="fa fa-info" style="padding: 5px; color: white;"> About Us</i></b-nav-item>
          <b-nav-item to="/ContactUs"><i class="fa fa-comment" style="padding: 5px; color: white;"> Contact Us</i></b-nav-item>
          <b-nav-item to="/Login"><i class="fa fa-sign-in" style="padding: 5px; color: white;"> Login</i></b-nav-item>
          <b-nav-item to="/SignUp"><i class="fa fa-sign-out" style="padding: 5px; color: white;" > SignUp</i></b-nav-item>
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
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
            {class: 'face', title: 'Sign up', link: '/SignUp'},
            {class: 'lock_open', title: 'Sign in', link: '/Login'},
            {class: 'fa fa-info', title: 'About Us', link: '/AboutUs'},
            {class: 'fa fa-comment', title: 'Contact Us', link: '/ContactUs'},
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {class: 'supervisor_account', title: 'View Meetups', link: '/OrderPizza'},
            {class: 'room', title: 'Organize Meetup', link: '/Pizzas'},
            {class: 'person', title: 'Profile', link: '/Mapx'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
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

