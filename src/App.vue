
<script>
import LandingNavbar from './components/LandingNavbar.vue'
import LandingHome from './components/LandingHome.vue'
  export default {
    name: 'App',
    components: {
      LandingNavbar,
      LandingHome,
    },
    data(){
      return{

      }
    },
    mounted() {

    },
    methods: {

    }
    
  }
</script>


<template>
  <div id="app">
    <LandingNavbar />

    <section id="home">
      <LandingHome/>
    </section>

    <!-- <section id="about">
      <h1>About</h1>
      <p>Saiba mais sobre nós.</p>
        <article class="text-center">
          <b-row id="sobre">
            <b-col lg="4">
              <h4><b>ABOUT</b></h4>
            </b-col>

            <b-col lg="6">
              <p>Desenvolvedor fullstack com experiência nas tecnologias citadas acima bem como, NODE.js, diversas bibliotecas de JS, UI Design, UX Design e consumo de APIs REST. Apaixonado pelo desenvolvimento de aplicações de gestão empresarial, profissional e pessoal. Formando em Análise e Desenvolvimento de Sistemas e cursando Especialização em Flutter na Alura.</p>
            </b-col>
          </b-row>
        </article>
    </section> -->

    <!-- <section id="projects">
      <h1>Features</h1>
      <p>Confira nossas funcionalidades incríveis.</p>
      
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
    </section> -->

    
    <!-- <section id="contact">
      <h1>Contact</h1>
      <p>Entre em contato conosco.</p>
      
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
    </section> -->
    

    <div>
      <b-row>
        <b-col>
          <a alt="Ir para início da página" title="Ir para início da página" href="#app" style="position:fixed;width:40px;height:40px;bottom:40px;right:40px;text-align:center;font-size:30px;;
            z-index:1000;" target="_self">
                <b-icon icon="arrow-up" style="color: white;" animation="cylon-vertical" font-scale="1"></b-icon>
            </a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
    
</style>