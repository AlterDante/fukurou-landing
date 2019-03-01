export default {
  name: "graphics-block",
  data(){
    return {
      srcollWindow:0,
      showGraphics:false,
    }
  },
  mounted(){
    document.addEventListener('scroll',(event)=>{
      this.srcollWindow = window.pageYOffset
      if(this.srcollWindow >= this.$refs.graphicsBlock.offsetTop - 150){
        this.showGraphics =  true
      }
    })
  }
}
