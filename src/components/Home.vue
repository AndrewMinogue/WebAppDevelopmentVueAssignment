<template>
  <div class="hero">
    <p class="lead">Welcome To The Pizza Party</p>
    <table align="center">
      <tr>
        <td>
          <img src="../assets/images.png" alt="description here" width="150px" height="150px" class="img-circle" style="padding: 5px"/>
        </td>
      </tr>
    </table>
    <div align="center" class="middle border" >
        <img src="../assets/peoplepizza.jpg" alt="description here" style="float:right;padding: 30px;border-radius: 50%" height="300" width="300"/>
            <img src="../assets/pp1.jpg" alt="description here" style="float:left;padding: 30px;border-radius: 50%" height="300" width="300"/>
                <router-link to="/orderpizza"><i class="fa fa-plus">  Order Pizza</i></router-link>
              <p class="lead1"> Click above to order a delicious Pizza</p>
                <router-link to="/pizzas"><i class="fa fa-list">  View Pizzas</i></router-link>
              <br/>
                <p class="lead1">Want to view all previous orders</p>
                <router-link to="/contactus"><i class="fa fa-phone">  Contact Us</i></router-link>
              <br/>
                <p class="lead1"> Need to reach out us about job opportunities or want to order by phone</p>
                <router-link to="/aboutus"><i class="fa fa-info-circle">  About Us</i></router-link>
              <br/>
                <p class="lead1"> Want to learn more about our background and how we make our pizzas</p>
                <router-link to="/login"><i class="fa fa-user">  About Us</i></router-link>
                <p class="lead1"> Login to join the Party</p>
    </div>
  </div>
</template>


<style>
  .hero {
    height: 100vh;
    margin-top: 0px;
    border-style: solid;
    border-color: whitesmoke;
    border-width: 40px;
    border-position: fixed;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000;
  }
  .lead {
    font-family: "Rockwell Bold",serif;
    font-weight: 100;
    color: #000000;
    font-size: 1.7rem;
  }
  .lead1 {
    font-family: "Felix Titling italic";
    font-weight: 100;
    color: #000000;
    font-size: 1.0rem;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }

  .middle{
    width: 100%;
  }
</style>
