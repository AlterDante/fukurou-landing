<template>
    <div class="main-block">
      <header>
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="logo">
        </div>
        <div class="information">
          <nav>
            <span @click="scrollToId('markets')" class="item-nav">где купить</span>
            <span @click="scrollToId('graphics')" class="item-nav" >Статьи и тесты</span>
            <span @click="scrollToId('article')" class="item-nav" >Информация</span>
            <span @click="scrollToId('company')" class="item-nav" >О компании</span>
            <span @click="scrollToId('feedback')" class="item-nav" >Связаться</span>
            <span @click="scrollToId('contacts')" class="item-nav" >Контакты</span>

          </nav>
          <div class="email">
            sales@fukurou.ru
          </div>
          <div class="time">
            Время работы Пн.-Пт. c 10:00 до 17:00
          </div>
        </div>
      </header>
      <div class="main-content">
        <div class="item-content">
          <div class="lamp">
            <div class="title">
              а вы знали , что есть <br> лампы лучше...?
            </div>
            <img src="../../assets/images/lamp.png" alt="">
          </div>
        </div>
        <!--<div class="item-content small">-->
          <!--<div class="man">-->
            <!--<div class="small-text">Наша основная цель - результаты наших партнеров</div>-->
            <!--<div class="big-text">ПРИГЛАШАЕМ К СОТРУДНЕЧЕСТВУ!</div>-->
            <!--<a class="feedback" href="#">ОСТАВИТЬ ЗАЯВКУ</a>-->
          <!--</div>-->
        <!--</div>-->
        <div class="item-content smal">
          <div class="bg">

            <img src="../../assets/images/man-min.png" alt="">
            <div class="small-text">Наша основная цель - результаты наших партнеров</div>
            <div class="big-text">ПРИГЛАШАЕМ К СОТРУДНЕЧЕСТВУ!</div>
            <span @click="scrollToId('feedback')" class="feedback" href="#">ОСТАВИТЬ ЗАЯВКУ</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script src="./main-block.js"></script>

<style scoped src="./main-block.scss" lang="scss"></style>
