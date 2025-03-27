
<script>
  export default {
    name: 'LandingHome',
    
    mounted() {
      const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const elements = document.querySelectorAll(".hiddenElement");

      elements.forEach((element) => myObserver.observe(element));

      this.isSmallScreen = window.innerWidth < 768;

      // Escuta o scroll da página
      window.addEventListener("scroll", this.verificaSecaoAtual);

      // Botão para ir para o topo
      window.addEventListener("scroll", this.verificaBotaoTopo);
    },
    methods:{
      
    },
    data(){
      return{
        isSmallScreen: window.innerWidth < 768
      }
    },
  }
</script>

<template>
  <section class="home-section container my-5">
    <div class="row align-items-center m-1">
      <div class="col-md-6">
        <img 
          src="../../public/minhaFoto2.png" 
          alt="Descriptive Text" 
          class="img-fluid rounded animate__animated animate__fadeInLeft"
        />
      </div>
      <div class="col-md-6">
        <b-row class="bg-white p-4 rounded" :class="isSmallScreen ? 'text-center' : 'text-start'">
          <b-col lg="12">
            <h1>OLÁ!</h1>
            <h2 id="apresentacao" >Me chamo Matheus Noguerol</h2>
            <p>e atuo como FULL STACK web DEVELOPER.</p>
          </b-col>
        </b-row>
        <b-row class="mt-2 text-center">
          <b-col class="logos">
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-brands fa-2x fa-laravel p-5"></i>
              <div>Laravel</div>
            </div>
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-brands fa-2x fa-php p-5"></i>
              <div>PHP</div>
            </div>
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-solid fa-2x fa-database p-5"></i>
              <div>MYSQL</div>
            </div>
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-brands fa-2x fa-js p-5"></i>
              <div>JavaScript</div>
            </div>
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-brands fa-2x fa-vuejs p-5"></i>
              <div>Vue.js</div>
            </div>
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-brands fa-2x fa-html5 p-5"></i>
              <div>HTML5</div>
            </div>
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-brands fa-2x fa-css3-alt p-5"></i>
              <div>CSS3</div>
            </div>
            <div class="text-center d-inline-block hiddenElement">
              <i class="fa-brands fa-2x fa-bootstrap p-5"></i>
              <div>Bootstrap</div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>
  
  
<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
  
  .hiddenElement {
    opacity: 0;
    filter: blur(15px);
    transition: all 2s;
    transform: translateX(-100%);
  }
  .show {
    opacity: 1;
    filter: blur(0px);
    transition: all 2s;
    transform: translateX(0);
  }
  .logos *:nth-child(1) {
    transition-delay: 200ms;
  }
  .logos *:nth-child(2) {
    transition-delay: 250ms;
  }
  .logos *:nth-child(3) {
    transition-delay: 300ms;
  }
  .logos *:nth-child(4) {
    transition-delay: 350ms;
  }
  .logos *:nth-child(5) {
    transition-delay: 400ms;
  }
  .logos *:nth-child(6) {
    transition-delay: 500ms;
  }
</style>
  