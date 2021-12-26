<template>
 <div>
   <Header />
   <article>
     <div class="container">

       <div class="container_header">
         <img src="../assets/img/header_grey.png" alt="video" class="back">
         <h1 class="text">МЕЖДУНАРОДНАЯ ОНЛАЙН-ШКОЛА <br>ПРОГРАММИРОВАНИЯ</h1>
         <ul class="expert">

           <li> <h3 class="h3"> ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ, один на один с преподавателем </h3> </li>
           <li> <h3 class="h3"> ПОДСТРОИМСЯ ПОД РАСПИСАНИЕ, интенсивность и темп обучения студента </h3> </li>
           <li> <h3 class="h3"> С ЛЮБЫМ УРОВНЕМ ПОДГОТОВКИ. Обучаем программированию с разным уровнем знаний </h3> </li>
         </ul>
         <a href="" class="gradient-button">РЕГИСТРИРУЙТЕСЬ НА БЕСПЛАТНЫЙ УРОК</a>
       </div>
       <div class="container_free">
         <img src="../assets/img/header_grey.png" alt="video" class="back">
         <h1 class="text">РЕГИСТРИРУЙТЕСЬ НА БЕСПЛАТНЫЙ УРОК, НА КОТОРОМ:</h1>
         <div class="free1">
           <img src="../assets/img/back_free.jpg" alt="video" class="back1">
           <div class="free"> <img src="../assets/img/free1.png" alt="free1" class="img_free1"> <h4 class="h_free1"> Создадите своей первый <br>мини-проект</h4> </div>
           <div class="free"> <img src="../assets/img/free2.png" alt="free1" class="img_free1"> <h4 class="h_free1"> Подберем подходящее<br> направление обучения </h4> </div>
           <div class="free"> <img src="../assets/img/free3.png" alt="free1" class="img_free1"> <h4 class="h_free1"> Посмотрите всё об <br> обучении</h4> </div>
         </div>
       </div>

       <div class="container_text">
         <img src="../assets/img/header_grey.png" alt="video" class="back">
         <h1 class="text">IT COURSES</h1>
         <p class="about">
           Мы обучаем студентов программированию онлайн, ИНДИВИДУАЛЬНО, один на один с преподавателем. 100% времени только Вам.
           Благодаря индивидуальным занятиям, ученик формирует удобный для себя график обучения, интенсивность (количество занятий в неделю), и темп обучения, под который подстраивается преподаватель.
           После обучения в нашей онлайн школе программирования, сутденты получат знания по популярным языкам программирования, смогут самостоятельно создать программу/приложение/игру/сайт, а также работать с компьютерной графикой и создавать анимацию.

           "Лучший способ предсказать ваше будущее - создать его.“ -<br> &copy; Авраам Линкольн.
         </p>
         <a href="" class="gradient-button">РЕГИСТРИРУЙТЕСЬ НА БЕСПЛАТНЫЙ УРОК</a>
       </div>

       <div class="container_courses">
         <img src="../assets/img/header_grey.png" alt="video" class="back">
         <h1 class="text">НАШИ КУРСЫ:</h1>
         <div class="courses">
           <img src="../assets/img/py.png" alt="video" class="courses_img">
           <h3 class="courses_h"> Программирование на Python</h3>
           <div class="courses_text">
             <h3 class="courses_h"> Python необходим для создания:
               <ul style="text-align: justify">
                 <li>сайтов и WEB-приложений;</li>
                 <li>браузерных игр и чат-ботов;</li>
                 <li>искусственного интеллекта и робототехнике;</li>
                 <li>Яндекс и Google работают на нем. </li>
               </ul>
             </h3>
           </div>
         </div>
         <div class="courses">
           <img src="../assets/img/c++.jpg" alt="video" class="courses_img">
           <h3 class="courses_h"> Программирование на C++</h3>
           <div class="courses_text">
             <h3 class="courses_h"> C++ используется в создании сложных современных IT-продуктов: от беспилотных автомобилей и робототехники до веб-браузеров, микроконтроллеров, серверов и видеоигр.</h3>
           </div>
         </div>
         <div class="courses">
           <img src="../assets/img/html.jpg" alt="video" class="courses_img">
           <h3 class="courses_h"> Верстка сайтов. HTML + CSS</h3>
           <div class="courses_text">
             <h3 class="courses_h"> Языки HTML и. CSS предназначены для верстки сайтов (верстка - это размещение элементов сайта по нужным местам).</h3>
           </div>
         </div>
       </div>
       <footer>
         <div class="footer">
           <div class="info">
             <h3>ООО "IT COURSES" Свидетельство о госрегистрации № 4395159 <br> Copyright © 2020 IT COURSES
               |
               Все права защищены
             </h3>
           </div>
         </div>
       </footer>
     </div>


   </article>
 </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
