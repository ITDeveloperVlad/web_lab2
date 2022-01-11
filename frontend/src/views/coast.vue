<template>
  <div>
    <Header />
    <article>
      <div class="container">

        <div class="container_text_coast">
          <img src="../assets/img/header_grey.png" alt="video" class="back">
          <h1 class="text_coast">ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ</h1>
          <p class="about_coast">
            Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий. Вы изучите фундаментальные знания, сделаете осознанный выбор специализации, прокачаетесь в выбранном направлении. Получите одну из самых востребованных IT-профессий. Вы освоите Python, научитесь писать программы и веб-приложения. Реализуете 7 проектов для портфолио, а мы дадим гарантию трудоустройства.
          </p>
          <a href="" class="gradient-button">РЕГИСТРИРУЙТЕСЬ НА БЕСПЛАТНЫЙ УРОК</a>
        </div>
        <div class="container_coast_block">
          <img src="../assets/img/header_grey.png" alt="image" class="back">
          <h1 class="text">ЦЕНЫ:</h1>
          <section class="row">
            <div v-for="item in products" class="col-md-3" v-bind:key="item.id">
              <Product :product="item"></Product>
            </div>
          </section>
        </div>
      </div>
    </article>
    <footer>
      <div class="footer_coast">
        <div class="info_coast">
          <h3>ООО "IT COURSES" Свидетельство о госрегистрации № 4395159 <br> Copyright © 2020 IT COURSES
            |
            Все права защищены
          </h3>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import Header from '@/components/Header';
import Product from "@/components/product";


export default {
  name: "coast",
  components: {Product , Header},
  data() {
    return {
      products: []
    }
  },
  created() {
        this.$http.get('/products')
            .then(response => this.products = response.data)
    }
}
</script>

<style scoped>

</style>
