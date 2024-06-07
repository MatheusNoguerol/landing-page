
<script>
import LandingNavbar from './components/LandingNavbar.vue'
import LandingHome from './components/LandingHome.vue'
import LandingAbout from './components/LandingAbout.vue'
  export default {
    name: 'App',
    components: {
      LandingNavbar,
      LandingHome,
      LandingAbout,
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
    <LandingNavbar/>

    <section id="home">
      <LandingHome/>
    </section>

    <section id="sobre">
      <landingAbout/>
    </section>

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
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
  *{
    font-family: 'JetBrains Mono';
  }
</style>