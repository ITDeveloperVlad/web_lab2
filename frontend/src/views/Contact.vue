<template>
  <div>
    <Header />
    <article>
      <div class="container_reg">

        <div class="container_header_reg">
          <img src="../assets/img/header_grey.png" alt="video" class="back">
          <h1 class="text">Вопросы</h1>
          <div class="expert_reg">
           <form @submit.prevent="onSubmit">
               <div class="form-group">
                   <label for="name" class="contact_label">Введите имя</label>
                   <input type="text" name="name" placeholder="Введите имя" id="name" class="contact_form">
               </div>

               <div class="form-group">
                   <label for="email" class="contact_label">Email</label>
                   <input type="text" name="email" placeholder="Введите email" id="email" class="contact_form">
               </div>

               <div class="form-group">
                   <label for="subject" class="contact_label">Тема сообщения</label>
                   <input type="text" name="subject" placeholder="Тема сообщения" id="subject" class="contact_form">
               </div>

               <div class="form-group">
                   <label for="message" class="contact_label">Сообщение</label>
                   <input type="text" name="message" placeholder="Сообщение" id="message" class="contact_form">
               </div>

               <button type="submit" class="contact_button">Отправить</button>

           </form>
          </div>

        </div>
      </div>
    </article>
    <footer>
      <div class="footer_reg">
        <div class="info_reg">
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
import Header from '@/components/Header'

export default {
    name: "contact",
    components: {
        Header
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                subject: null,
                message: null
            }
        }
    },
    methods: {
        onSubmit() {
            this.$http.post("/contact/submit", {
                params: this.form
            })

        }
    }
}
</script>

<style scoped>

</style>
