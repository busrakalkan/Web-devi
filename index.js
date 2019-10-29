/*---Slider--- */
new Vue({
    el: '.image-carousel',
    data: {
        images: ['img/ekiminsert_maxpalet_8102019.jpg',
         'img/ekiminsert_simplemaske_131019.jpg', 
         'img/ekiminsert_ogx30_131019.jpg', 
         'img/ekiminsert_lpmdus50_8102019.jpg', 
         'img/ekiminsert_arkonem2a1o_8102019.jpg'],
        currentNumber: 0,
        timer: null,
    },
    /*mounted: function () {
        this.startRotation();
    },*/
    methods: {
        /*startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },
        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },*/
        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    },
    computed: {
    	currentImage: function() {
      	return this.images[Math.abs(this.currentNumber) % this.images.length];
      }
    }
});
/*---email ve şifrede boş bırakınca eror vermesi için */
const app=new Vue({
    el:'#app',

    data:{
        error1:[],
        error2:[],
        email:null,
        password: null,

    },
    methods: {
        checkForm: function (e) {
          this.error1 = [];
          this.error2=[];
    
          if (!this.password) {
            this.error2.push("Parola zorunludur");
          }
          if (!this.email) {
            this.error1.push('E-posta zorunludur');
          } else if (!this.validEmail(this.email)) {
            this.error1.push('Geçersiz giriş. Lütfen geçerli bir e-posta adresi girin; örneğin, john@smith.com.');
          }
    
          if (!this.error1.length && !this.errr2.length) {
            return true;
          }
    
          e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }
        }
});

/*----Üyelik sayfasındaki Erorlar için */
const app4=new Vue({
    el:'#üyelik',

    data:{
        error1:[],
        error2:[],
        error3:[],
        error4:[],
        error5:[],
        error6:[],
        error7:[],
        error8:[],

        ad:null,
        soyad:null,
        email:null,
        cep:null,
        tarih:null,
        cinsiyet:null,
        password: null,
        con_passwod:null,

    },
    methods: {
        checkForm: function (e) {
          this.error1 = [];
          this.error2=[];
          this.error3=[];
          this.error4=[];
          this.error5=[];
          this.error6=[];
          this.error7=[];
          this.error8=[];
    
          if (!this.ad) {
            this.error1.push("İsim zorunludur");
          }
          if (!this.soyad) {
            this.error2.push("Soyisim zorunludur");
          }
          if (!this.cep) {
            this.error4.push("Cep Telefonu zorunludur");
          }
          if (!this.tarih) {
            this.error5.push("Tarih zorunludur");
          }
          if (!this.cinsiyet) {
            this.error6.push("Cinsiyet zorunludur");
          }
          if (!this.password) {
            this.error7.push("Parola zorunludur");
          }
          if (!this.con_password) {
            this.error8.push("Lütfen parolanızı yeniden girin.");
          }
          if (!this.email) {
            this.error3.push('E-posta zorunludur');
          } else if (!this.validEmail(this.email)) {
            this.error3.push('Geçersiz giriş. Lütfen geçerli bir e-posta adresi girin; örneğin, john@smith.com.');
          }
    
          if (!this.error1.length && !this.errr2.length) {
            return true;
          }
    
          e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }
        }
});

/*---Tabların geçişleri için */
new Vue({
    el: '#tabs',
    data: { activetab: 1 },
});
/*----sepetteki ürün sayısını göstermek için*/ 
new Vue({
    el:'#deneme',
    
    data:{
        currentNumber: 0,
    },
    methods: {
        plus: function() {
            this.currentNumber += 1
        },
        minus: function() {
            this.currentNumber -= 1
        }
    },
    computed: {
        count:function(){
            return this.currentNumber;
        }
    }
});
/*---şifreyi görülebilir yapmak için */
const app2=new Vue({
    el:"#eyePassword",
    data (){
        return{
            passwordVisible:false,
        }
    },
    methods:{
        togglePasswordVisibility: function(){
            this.passwordVisible=!this.passwordVisible
        }
    }
});

const app3=new Vue({
    el:"#eyePassword2",
    data (){
        return{
            passwordVisible:false,
        }
    },
    methods:{
        togglePasswordVisibility: function(){
            this.passwordVisible=!this.passwordVisible
        }
    }
});