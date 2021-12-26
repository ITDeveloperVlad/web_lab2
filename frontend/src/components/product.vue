<template>
  <div class="courses_coast">
    <h3 class="courses_h1_coast"> {{ product.name }}</h3>
    <h2 class="courses_h_coast"> {{ product.price }} $/урок</h2>
    <img alt="video" class="courses_img" :src="product.img"/>
    <button class="gradient-button" style="width:50%; margin-left:25%" v-on:click="product.inCart = !product.inCart" v-if="!product.inCart">Купить</button>
    <button class="gradient-button" v-if="product.inCart">В корзине</button>



  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['product'],
}
</script>

<style scoped>

</style>
