<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment small" style="padding: 4px"></i>{{messagetitle}}</h3>
    <h2 class="vue-title1">Waterford Store only</h2>
    <p>email :  pizzaparty@gmail.com</p>
    <p>Phone Number :  1800123456</p>
    <div class="mapouter">
      <div class="gmap_canvas">
      <iframe width="100%" height="500" style="align-content: center" id="gmap_canvas" src="https://maps.google.com/maps?q=Ireland%2C%20Waterford&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
      </iframe><a href="https://www.crocothemes.net"></a></div></div>
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
  .hero {
    height: 100vh;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 40pt;
    margin-bottom: 10px;
  }
  .vue-title1 {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
  .mapouter{
    text-align:center;
    align-content: center;
    float:right;
    height:500px;
    width:600px;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    text-align:center;
    align-content: center;
    justify-content: center;
    height:500px;
    width:100%;
  }
</style>
