export default {
  name: "map-block",
  data(){
    return {
      src:'',
      showMap:false,
    }
  },
  mounted(){
    var img = this.$refs.mapBlock.getElementsByTagName('img')
    this.src = img[0].src
    document.addEventListener('scroll',(event)=>{
      this.srcollWindow = window.pageYOffset
      if(this.srcollWindow >= this.$refs.mapBlock.offsetTop - 750){
        this.showMap =  true
      }
    })
  }
}
