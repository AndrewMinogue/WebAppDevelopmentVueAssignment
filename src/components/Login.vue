<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-sign-in" style="padding: 3px"></i>{{messagetitle}}</h3><br/><br/>
    <input type="text"  id="email" name="email" placeholder="Enter Email" v-model="email"/><br/>
    <br/>
    <input type="password" id="password" name="password" placeholder="Enter Password" v-model="password"/><br/>
    <br/>
    <button @click="onSignin">Sign In</button>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        messagetitle:'Sign In',
        email: '',
        password: ''
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
      onSignin () {
          this.$store.dispatch('signUserIn', {email: this.email, password: this.password}).then(() => {
            this.$swal('Success', ' Sign In Successful ', 'success')
          }).catch(() => {
                this.$swal('ERROR', 'Invalid Credentials' + 'error')
              })
      }
    }
  }
</script>


<style>
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
