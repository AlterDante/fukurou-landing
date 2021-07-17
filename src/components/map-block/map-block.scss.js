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
      console.log(this.srcollWindow >= this.$refs.mapBlock.offsetTop - 1750)
      if(this.srcollWindow >= this.$refs.mapBlock.offsetTop - 1750){
        this.showMap =  true
      }
    })
  }
}
