import http from '@/services/http'

export default {
  name: "feedback-block",
  data(){
    return {
      activeForm:false,
      showForms:false,
      errorMessage:{
        question:false,
        request:false,
      },
      doneStatus:{
      question:false,
        request:false,
    },
      dataQuestion:{
        name:'',
        email:'',
        message:'',
      },
      dataRequest:{
        name:'',
        email:'',
        message:'',
      }
    }
  },
  methods:{
    sendQuestion(){
      var formData = new FormData
      if(this.dataQuestion.email && this.dataQuestion.name && this.dataQuestion.message){
        formData.append('email', this.dataQuestion.email)
        formData.append('name', this.dataQuestion.name)
        formData.append('message', this.dataQuestion.message)
        formData.append('subject', 'Задан вопрос с сайта')
        http.post('mail.php',formData).then((e)=>{
          this.doneStatus.question = true
          this.errorMessage.question = false
        })
      }else{
        this.errorMessage.question = true
      }
    },
    sendRequest(){
      var formData = new FormData
      if(this.dataRequest.email && this.dataRequest.name && this.dataRequest.message){
        formData.append('email', this.dataRequest.email)
        formData.append('name', this.dataRequest.name)
        formData.append('message', this.dataRequest.message)
        formData.append('subject', 'Заявка с сайта')
        http.post('mail.php',formData).then((e)=>{
          this.doneStatus.request = true
          this.errorMessage.request = false
        })
      }else{
        this.errorMessage.request = true
      }

    }
  },
  mounted(){
    document.addEventListener('scroll',(event)=>{
      this.srcollWindow = window.pageYOffset
      if(this.srcollWindow >= this.$refs.feedbackBlock.offsetTop - 150){
        this.showForms =  true
      }
    })
  }
}
