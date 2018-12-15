<template>
  <div class="hero">
    <table align="center">
      <tr>
        <td>
          <img src="../assets/images.png" alt="description here" width="200px" height="200px" class="img-circle" style="padding: 5px"/>
        </td>
      </tr>
    </table>
    <p></p>
    <p class="lead">Welcome To <b>Pizza Party</b> Web app</p>
    <div class ="img1">
      <td>
        <img src="../assets/peoplepizza.jpg" alt="description here" class="img-circle" style="padding: 5px" height="300" width="300"/>
      </td>
    </div>
    <div class ="img2">
      <td>
        <img src="../assets/pp1.jpg" alt="description here" class="img-circle" style="padding: 5px" height="300" width="300"/>
      </td>
    </div>
  </div>
</template>


<style>
  .hero {
    height: 100vh;
    margin-top: 0px;
    border-style: solid;
    border-color: white;
    border-width: 50px;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
  }
  .hero .lead {
    font-family: "Felix Titling";
    font-weight: 100;
    color: #000000;
    font-size: 2.0rem;
  }
  .img1{
    position: fixed;
    bottom: 100px;
    right:100px;
  }
  .img2{
    position: fixed;
    bottom: 100px;
    left:100px;
  }

  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
