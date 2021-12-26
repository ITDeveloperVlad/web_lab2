<template>
  <div>
    <Header />
    <article>
      <div class="container_reg">

        <div class="container_header_reg">
          <img src="../assets/img/header_grey.png" alt="video" class="back">
          <h1 class="text">РЕГИСТРАЦИЯ</h1>
          <div class="expert_reg">
            <table>
              <tbody>
              <tr>
                <td> <h3>Имя:</h3> </td>
                <td>
                  <label>
                    <input placeholder="Введите имя">
                  </label>
                </td>
              </tr>

              <tr>
                <td> <h3>Email: </h3></td>
                <td>
                  <label>
                    <input placeholder="Введите email">
                  </label>
                  <br>
                </td>
              </tr>

              <tr>
                <td> <h3>Пароль: </h3></td>
                <td>
                  <label>
                    <input placeholder="минимум 6 символов"><br>
                  </label>

                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <label>
                    <input class="reg_button" value="Зарегистрироватся!">
                  </label>
                </td>
              </tr>

              </tbody>
            </table>
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
  name: "reg.vue",
  components: {
    Header
  }
}
</script>

<style scoped>

</style>
