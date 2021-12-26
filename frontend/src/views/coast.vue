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
          <img src="../assets/img/header_grey.png" alt="video" class="back">
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
import image from "@/assets/img/c++.jpg"
import image1 from "@/assets/img/py.png"
import image2 from "@/assets/img/html.jpg"

export default {
  name: "coast",
  components: {Product , Header},
  data() {
    return {
      products: [
        {id: 1, name: 'Курс C++', price: 1000, img: image, inCart: false},
        {id: 2, name: 'Курс Python', price: 1200, img: image1, inCart: false},
        {id: 3, name: 'Курс JS', price: 1500, img: image2, inCart: false},
      ]
    }
  }
}
</script>

<style scoped>

</style>
