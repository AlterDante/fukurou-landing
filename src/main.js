// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/page'
import router from './router'
import YmapPlugin from 'vue-yandex-maps'
import VueGallery from 'vue-gallery'

Vue.component('gallery', VueGallery)
Vue.use(YmapPlugin, {})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
