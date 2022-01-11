<template>
  <div>
    <video autoplay loop muted class="video">
      <source src="../assets/video/videoG2.mp4" type="video/mp4">
    </video>
    <div class="logo"> <img src="../assets/img/logo.png" alt="logo" class="logo1"> </div>
    <nav>
      <div class="menu"><router-link to="/">Главная</router-link></div>
      <div class="menu"><router-link to="/coast">Стоимость и оплата</router-link></div>
      <div class="menu"><router-link to="/contact">Контакты</router-link></div>
      <div class="menu"><router-link to="/">Вакансии</router-link></div>
    </nav>
    <div class="lk"> <router-link to="/reg">
      <img src="../assets/img/lk.svg" alt="личный кабинет" class="lk1">
      <h4 class="h4">Личный <br>кабинет </h4>
    </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style scoped>

</style>
