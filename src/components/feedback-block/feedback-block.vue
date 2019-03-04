<template>
    <div class="feedback-block" ref="feedbackBlock" id="feedback">
      <!--<div  class="g-recaptcha" v-if="!capcha" data-sitekey="6LdFZZUUAAAAAPnJRrnkn7LE_QW_MofnmfY6Zaxy"></div>-->
      <!--<div  id="123321"></div>-->
      <div class="title">
          Связаться с нами
        </div>
      <div class="feedback-container">
        <div class="form-wrapper question" :class="{show:showForms}">

          <div class="title">
            Остались вопросы?
            <span>Задайте их нам</span>
          </div>
          <transition name="fade" :mode="'out-in'">
          <div class="form"  v-if="!doneStatus.question" key="formQ">
            <input type="text" v-model="dataQuestion.name" placeholder="ФИО*">
            <input type="text" v-model="dataQuestion.email" placeholder="E-mail*">
            <textarea v-model="dataQuestion.message" placeholder="Ваш вопрос*"></textarea>
            <div class="captcha"  id="capQ"></div>
            <button v-if="!showCapQ" @click="sendQuestion()">Задать вопрос</button>
            <div class="error" v-if="errorMessage.question===true">Все поля обязательны к заполнению*</div>
          </div>
            <div class="done" key="doneQ" v-if="doneStatus.question">
              Спасибо за Ваш вопрос, мы обязательно на него ответим.
            </div>
          </transition>


        </div>
        <div class="form-wrapper form_feedback" :class="{show:showForms}">
          <div class="title">
          Приглашаем к сотрудничеству
          </div>
          <transition name="fade" :mode="'out-in'">
            <div class="text" key="text" v-if="!activeForm">
              <p>Наша основная цель - результаты наших партнеров</p>
              <p>Мы выстраиваем длительное  взаимовыгодное сотрудничество</p>
            </div>
            <div class="form" key="form" v-if="activeForm && !doneStatus.request">
            <input type="text" v-model="dataRequest.name" placeholder="ФИО*">
            <input type="text" v-model="dataRequest.email" placeholder="E-mail*">
            <textarea v-model="dataRequest.message" placeholder="Ваше сообщение*"></textarea>
              <div class="captcha"  id="capR"></div>

              <button  v-if="!showCapR" @click="sendRequest()">Отправить заявку</button>
              <div class="error" v-if="errorMessage.request===true">Все поля обязательны к заполнению*</div>
            </div>
            <div class="done" style="color: white" key="doneR" v-if="doneStatus.request">
              Спасибо за Вашу заявку, в ближаёшее время мы с вами свяжемся.
            </div>
          </transition>
          <button  v-if="!activeForm" @click="activeForm=true">Оставить заявку</button>

        </div>

      </div>
    </div>
</template>

<script src="./feedback-block.js"></script>
<style scoped src="./feedback-block.scss" lang="scss"></style>
