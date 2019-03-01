export default {
  name: "map-block",
  data(){
    return {
      src:''
    }
  },
  mounted(){
    var img = this.$refs.mapBlock.getElementsByTagName('img')
    this.src = img[0].src
  }
}
