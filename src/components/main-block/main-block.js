export default {
  name: "main-block",
  methods:{
    scrollToId(id){
      document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"})
    }
  }
}
