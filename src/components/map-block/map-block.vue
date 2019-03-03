<template>
  <div class="map-block" ref="mapBlock" id="contacts">
    <img src="../../assets/images/marker.png" style="display: none;" alt="">
    <div class="information">
      <div class="title">
        Контакты
      </div>
      <div class="text">
        ООО "Хигаши Рус"
      </div>
      <div class="address">
        430011, Саранск <br>
        улица Степана Разина, 44
      </div>
      <div class="email" >
        sales@fukurou.ru
      </div>
      <div class="time">
        Время работы Пн.-Пт. c 10:00 до 17:00
      </div>

    </div>
    <yandex-map
      zoom="16"
      :controls="[]"
      :coords="[54.189299, 45.166067]">
      <ymap-marker
        marker-id="2"
        marker-type="placemark"
        :icon="{
           layout: 'default#image',
           imageHref: src,
           imageSize: [43, 55],
           imageOffset: [-22, -55]
          }"
        :coords="[54.189421, 45.167615]"
        cluster-name="1"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script src="./map-block.scss.js"></script>

<style scoped src="./map-block.scss" lang="scss"></style>
