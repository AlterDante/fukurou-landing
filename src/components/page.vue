<template>
  <div class="page">
    <loader v-if="!loading"></loader>
    <div class="content" :class="{show:loading}">
      <main-block></main-block>
      <graphics-block id="graphics"></graphics-block>
      <!--93-->
      <documents-block></documents-block>
      <!--90-->
      <product-block></product-block>
      <!--91-->
      <article-block></article-block>
      <!--92-->
      <company-block></company-block>
      <!--87-->
      <feedback-block></feedback-block>
      <!--89-->
      <map-block></map-block>
      <!--43-->
      <footer-block></footer-block>
    </div>

  </div>
</template>

<script src="./page.js">

</script>

<style src="./page.scss" lang="scss">
</style>
