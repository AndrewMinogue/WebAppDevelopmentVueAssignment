<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment small" style="padding: 4px"></i>{{messagetitle}}</h3>
    <h2 class="vue-title1">Waterford Store only</h2>
    <p>email :  pizzaparty@gmail.com</p>
    <p>Phone Number :  1800123456</p>
  </div>
</template>

<script>
  export default {
    name: 'ContactUs',
    data () {
      return {
        messagetitle: ' Contact information '
      }
    }
  }
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 40pt;
    margin-bottom: 10px;
  }
  .vue-title1 {
    margin-top: 30px;
    text-align: center;
    font-size: 35pt;
    margin-bottom: 10px;
  }
  .hero{
    font-weight: 100;
    font-size: 20pt;
  }
</style>
