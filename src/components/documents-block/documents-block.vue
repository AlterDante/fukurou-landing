<template>
    <div class="documents-block" ref="documentsBlock">
      <gallery :images="images" :index="index" @close="index = null"/>
        <div class="title">Не верите? Вот доказательства <span>Лампы прошли испытания в государственном НИИ им. А.Н. Лодыгина</span></div>
        <div class="documents-container" ref="documentsContainer">
          <div class="document" :class="{show:showDocuments}">
            <img class="image-gallery" src="../../assets/images/document_1.jpg" alt="">
          </div>
          <div class="document" :class="{show:showDocuments}">
            <img class="image-gallery" src="../../assets/images/document_2.jpg" alt="">
          </div>
          <div class="document" :class="{show:showDocuments}">
            <img class="image-gallery" src="../../assets/images/document_3.jpg" alt="">
          </div>
        </div>
      <div class="text">
        <!--<div class="text-title">Лампы прошли испытания в НИИ</div>-->
        <p>Испытания на световой поток и срок службы проводились согласно ЕЭК ООН №37 при 13.2В в государственном научно-исследовательском институте источников света имени А. Н. Лодыгина – одним из ведущих научно-технических центров светотехнической отрасли.  Тест на стабильность показаний светового потока проводился специалистами ООО "Хигаши Рус" для внутреннего контроля качества.</p>
      </div>
    </div>
</template>

<script src="./documents-block.js"></script>

<style scoped src="./documents-block.scss" lang="scss"></style>
