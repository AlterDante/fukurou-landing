<template>
    <div class="documents-block" ref="documentsBlock">
      <gallery :images="images" :index="index" @close="index = null"/>
        <div class="title">Не верите? Вот доказательства <span>Лампы прошли сертификацию и испытания в НИИ</span></div>
        <div class="documents-container" ref="documentsContainer">
          <div class="document" :class="{show:showDocuments}">
            <img class="image-gallery" src="../../assets/images/document_1.jpg" alt="">
          </div>
          <div class="document" :class="{show:showDocuments}">
            <img class="image-gallery" src="../../assets/images/document_3.jpg" alt="">
          </div>
          <div class="document" :class="{show:showDocuments}">
            <img class="image-gallery" src="../../assets/images/document_2.jpg" alt="">
          </div>
        </div>
    </div>
</template>

<script src="./documents-block.js"></script>

<style scoped src="./documents-block.scss" lang="scss"></style>
