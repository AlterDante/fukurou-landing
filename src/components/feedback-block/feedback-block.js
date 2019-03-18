import http from '@/services/http'

export default {
  name: "feedback-block",
  data(){
    return {
      captchaId:{
        question:null,
        request:null,
      },
      capcha:false,
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
      },
      showCapQ:false,
      showCapR:false,
    }
  },
  methods:{
    sendQuestion(){
      if(this.dataQuestion.email && this.dataQuestion.name && this.dataQuestion.message){
        this.showCapQ=true
      this.captchaId.question =   grecaptcha.render('capQ',
              {sitekey:'6LdFZZUUAAAAAPnJRrnkn7LE_QW_MofnmfY6Zaxy',
              callback:this.doneQ})
        this.errorMessage.question = false
      }else{
        this.errorMessage.question = true
      }
    },
    sendRequest(){
      if(this.dataRequest.email && this.dataRequest.name && this.dataRequest.message){
        this.showCapR=true
        this.captchaId.request =  grecaptcha.render('capR',
          {sitekey:'6LdFZZUUAAAAAPnJRrnkn7LE_QW_MofnmfY6Zaxy',
            callback:this.doneR})
      }else{
        this.errorMessage.request = true
      }

    },
    doneQ(){
      var formData = new FormData
      formData.append('email', this.dataQuestion.email)
      formData.append('name', this.dataQuestion.name)
      formData.append('message', this.dataQuestion.message)
      formData.append('subject', 'Задан вопрос с сайта')
      formData.append('g-recaptcha-response',grecaptcha.getResponse(this.captchaId.question))
      http.post('mail.php',formData).then((e)=>{
        this.doneStatus.question = true
        this.errorMessage.question = false
      }).catch(()=>{
        grecaptcha.reset()
      })
    },
    doneR(){
      var formData = new FormData
      formData.append('email', this.dataRequest.email)
      formData.append('name', this.dataRequest.name)
      formData.append('message', this.dataRequest.message)
      formData.append('subject', 'Заявка с сайта')
      formData.append('g-recaptcha-response',grecaptcha.getResponse(this.captchaId.request))
      http.post('mail.php',formData).then((e)=>{
        this.doneStatus.request = true
        this.errorMessage.request = false
      }).catch(()=>{
        grecaptcha.reset()
      })
    },
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
