<template>
    <div class="graphics-block" ref="graphicsBlock">
      <div class="title">
        Мы сравнили лампы Fukurou с конкурентами
      </div>
      <div class="graphics-container">
        <div class="item-graphics" :class="{show: showGraphics}">
          <img src="../../assets/images/graphics_1.png" alt="graphics_1">
          <div class="text">
            Сравнение дальнего света с лучшим показателем из всех протестированных ламп брендов А-класса, более подробная информация см.  ниже в протоколах испытаний

          </div>
        </div>

        <div class="item-graphics" :class="{show: showGraphics}">
          <img src="../../assets/images/graphics_2.png" alt="graphics_2">

          <div class="text">
            В сравнении с лампой с повышенной светоотдачей от Osram. Подробнее см. протокол испытания ниже
          </div>
        </div>
        <div class="item-graphics" :class="{show: showGraphics}">
          <img src="../../assets/images/graphics_3.png" alt="graphics_3">
          <div class="text">
            Согласно собственным внутренним испытаниям компании. Подробнее см ниже.
          </div>
        </div>

      </div>
    </div>
</template>

<script src="./graphics-block.js"></script>

<style scoped src="./graphics-block.scss" lang="scss"></style>
