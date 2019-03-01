<template>
    <div class="graphics-block" ref="graphicsBlock">
      <div class="title">
        Мы сравнили лампы Fukurou с конкурентами
      </div>
      <div class="graphics-container">
        <div class="item-graphics" :class="{show: showGraphics}">
          <img src="../../assets/images/graphics_1.png" alt="graphics_1">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eveniet!
          </div>
        </div>
        <div class="item-graphics" :class="{show: showGraphics}">
          <img src="../../assets/images/graphics_2.png" alt="graphics_2">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, nostrum!
          </div>
        </div>
        <div class="item-graphics" :class="{show: showGraphics}">
          <img src="../../assets/images/graphics_3.png" alt="graphics_3">
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, quis.
          </div>
        </div>

      </div>
    </div>
</template>

<script src="./graphics-block.js"></script>

<style scoped src="./graphics-block.scss" lang="scss"></style>
