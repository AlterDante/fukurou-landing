export default {
  name: "footer-block",
  methods:{
    scrollToId(id){
      document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"})
    }
  }
}
