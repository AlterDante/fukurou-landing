export default {
  name: "article-block",
  data(){
    return {
      articleShow:0,
      countArticle:0,
    }
  },
  methods:{
    nextSlid(){
      if(this.articleShow===0){
        this.articleShow++
      }
      if(this.countArticle<5){
        this.countArticle++
      }
    },
    prewSlid(){
      if(this.articleShow===1){
        this.articleShow--
      }
      if(this.countArticle>0){
        this.countArticle--
      }
    },
    openAnswer(event){
      event.target.parentElement.classList.toggle('open')
      event.target.parentElement.getElementsByClassName('answer')[0].classList.toggle('open')
      console.log()

    }

  }
}
