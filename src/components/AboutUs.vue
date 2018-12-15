<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-book small" style="padding: 4px"></i>About Us</h3>
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
  .video{
    margin-top:80px;
    align-content: center;
    width:300px;
    height:300px;
  }
</style>
