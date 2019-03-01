<template>
  <div class="page">
    <loader v-if="!loading"></loader>
    <div class="content" :class="{show:loading}">
      <main-block></main-block>
      <graphics-block id="graphics"></graphics-block>
      <documents-block></documents-block>
      <product-block></product-block>
      <article-block></article-block>
      <company-block></company-block>
      <feedback-block></feedback-block>
      <map-block></map-block>
      <footer-block></footer-block>
    </div>

  </div>
</template>

<script src="./page.js">

</script>

<style src="./page.scss" lang="scss">
</style>
