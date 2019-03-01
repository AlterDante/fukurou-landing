import MapBlock from './map-block/map-block.vue'
import MainBlock from './main-block/main-block.vue'
import GraphicsBlock from './graphics-block/graphics-block.vue'
import DocumentsBlock from './documents-block/documents-block.vue'
import FeedbackBlock from './feedback-block/feedback-block.vue'
import ArticleBlock from './article-block/article-block.vue'
import FooterBlock from './footer-block/footer-block.vue'
import ProductBlock from './product-block/product-block.vue'
import CompanyBlock from './company-block/company-block.vue'
import loader from './loader/loader.vue'


export default {
  name: 'page',
  components:{
    MapBlock,
    MainBlock,
    GraphicsBlock,
    DocumentsBlock,
    FeedbackBlock,
    ArticleBlock,
    FooterBlock,
    ProductBlock,
    CompanyBlock,
    loader,
  },
  data () {
    return {
      loading:false
    }
  },
  created(){
    var body = document.getElementsByTagName('body')
    body[0].style.overflow = 'hidden'
  },
  mounted(){
    window.addEventListener('load',()=>{
      this.loading = true;
      var body = document.getElementsByTagName('body')
      body[0].style.overflow = 'auto'
    })
  }

}
