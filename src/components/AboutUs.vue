<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-book small" style="padding: 4px"></i>About Us</h3>
    <p style="color:black"> We are an Irish company that prides ourselves on our homegrown ingredients</p><br/>
    <p style="color:black"> The Company was created in 2018 by a man named Andrew Minogue</p><br/>
    <p style="color:black"> We Created this video to show you how to make the perfect pizza</p>
    <p> </p>
    <iframe width="700" height="500" src="https://www.youtube.com/embed/YQkC0Qs3aD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>


<script>
export default {
  data() {
    return {
      videoId:'lG0Ys-2d4MA'
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('\o/ we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
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
</style>
