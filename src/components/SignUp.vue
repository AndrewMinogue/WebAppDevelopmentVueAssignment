<template>
  <div id="app1" class="hero">
    <h3  class="vue-title"><i class="fa fa-lock" style="padding: 3px"></i>{{messagetitle}}</h3><br/><br/>
      <input type="text"  id="email" name="email" placeholder="Enter Email" v-model="email"/><br/>
      <br/>
      <input type="password" id="password" name="password" placeholder="Enter Password" v-model="password"/><br/>
      <br/>
      <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Retype Password" v-model="confirmPassword"/><br/>
      <br/>
      <button @click="onSignup">Sign Up</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messagetitle:'Sign Up',
        email: '',
        password: '',
        confirmPassword: '',
        error:[]
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignup () {
        if(this.password !== this.confirmPassword){
          this.$swal('ERROR', 'Passwords do not match' + 'error')
        }
        else{
          this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
          this.$swal('Success', ' You are signed up to the Pizza Party' , 'success')
        }
      }
    }
  }
</script>


<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    color: #000000;
  }
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000000;
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
    border: 1px solid black;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 400px;
  }

</style>
