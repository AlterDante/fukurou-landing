export default {
  name: "documents-block",
  data(){
    return {
      showDocuments:false,
      images:[],
      index:null,
    }
  },
  mounted(){
    var collection = this.$refs.documentsContainer.getElementsByClassName('image-gallery')
    for(var key in collection){
      if(collection[key].src){
        collection[key].setAttribute('data-gallery-index', key)
        collection[key].addEventListener('click',(event)=>{
          this.index= parseInt(event.currentTarget.dataset.galleryIndex)
        })
        this.images.push(collection[key].src)
      }
    }
    document.addEventListener('scroll',(event)=>{
      this.srcollWindow = window.pageYOffset
      if(this.srcollWindow >= this.$refs.documentsBlock.offsetTop - 150){
        this.showDocuments =  true
      }
    })
  }
}
