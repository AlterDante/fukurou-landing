<template>
  <div class="footer-block">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="">
    </div>
    <div class="navigation">
      <span @click="scrollToId('markets')" class="item-nav">Где купить</span>
      <span @click="scrollToId('graphics')" class="item-nav" >Статьи и тесты</span>
      <span @click="scrollToId('article')" class="item-nav" >Информация</span>
      <span @click="scrollToId('company')" class="item-nav" >О компании</span>
      <span @click="scrollToId('feedback')" class="item-nav" >Связаться</span>
      <span @click="scrollToId('contacts')" class="item-nav" >Контакты</span>
    </div>
    <div class="social">
      <div class="title">Мы в социальных сетях</div>
      <div class="links">
        <a href="https://vk.com/fukurou_russia" target="_blank"><img src="../../assets/images/vk.png" alt=""></a>
        <!--<a href=""><img src="../../assets/images/ok.png" alt=""></a>-->
        <!--<a href=""><img src="../../assets/images/fb.png" alt=""></a>-->
      </div>
    </div>
  </div>
</template>

<script src="./footer-block.js"></script>

<style scoped src="./footer-block.scss" lang="scss"></style>
