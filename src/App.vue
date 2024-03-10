
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data(){
    return{
      isMobile: false,
      activeItem: 'NoG',
    }
  },
  mounted() {
    this.isMobile = window.innerWidth;

    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize(){
      let self = this

      self.isMobile = window.innerWidth > 600
    },

    beforeDestroy() {
      let self = this

      window.removeEventListener('resize', self.handleResize)
    },

    indicaNavItem(item) {
      this.activeItem = item;
      
      document.querySelector('#sobre').style.backgroundColor = '';
      document.querySelector('#jornada').style.backgroundColor = '';
      document.querySelector('#projetos').style.backgroundColor = '';
      document.querySelector('#contato').style.backgroundColor = '';

      if (item === 'About') {
        document.querySelector('#sobre').style.backgroundColor = 'white';
        document.querySelector('#sobre').style.borderRadius = '1.5em';
      } else if (item === 'Journey') {
        document.querySelector('#jornada').style.backgroundColor = 'white';
        document.querySelector('#jornada').style.borderRadius = '1.5em';
      } else if (item === 'Projects') {
        document.querySelector('#projetos').style.backgroundColor = 'white';
        document.querySelector('#projetos').style.borderRadius = '1.5em';
      } else if (item === 'Contact') {
        document.querySelector('#contato').style.backgroundColor = 'white';
        document.querySelector('#contato').style.borderRadius = '1.5em';
      }

      
    }
  }
  
}
</script>


<template>
  <div id="app" style="">
    
    <b-container>
      <section>
        <b-row style="padding-bottom: 12em; padding-top: 4em; padding-right: 3em;" id="logo">
          <div style="position: fixed; top: 0; display: flex; z-index: 9999; padding-top: 2em; padding-left: 18.5em;" class="nav mx-auto" v-if="isMobile">
            <b-col lg="2"><a href="#logo" class="gloria-hallelujah-regular" :class="{ active: activeItem === 'NoG' }" @click="indicaNavItem('NoG')">NoG</a></b-col>
            <b-col lg="1"><a href="#sobre" :class="{ active: activeItem === 'About' }" @click="indicaNavItem('About')">About</a></b-col>
            <b-col lg="1"><a href="#jornada" :class="{ active: activeItem === 'Journey' }" @click="indicaNavItem('Journey')">Journey</a></b-col>
            <b-col lg="1"><a href="#projetos" :class="{ active: activeItem === 'Projects' }" @click="indicaNavItem('Projects')">Projects</a></b-col>
            <b-col lg="1"><a href="#contato" :class="{ active: activeItem === 'Contact' }" @click="indicaNavItem('Contact')">Contact</a></b-col>
          </div>

          <div class="navbar" v-if="!isMobile">
            <a href="#sobre" class="active">logo</a>
            <a href="#jornada">Sobre</a>
            <a href="#projetos">Serviços</a>
            <a href="#contato">Contato</a>
          </div>
        </b-row>
      </section>
      
      <section>
        <b-row>
          <b-col lg="6" class="order-lg-1 text-center" style="padding-top: 100px;">
            <img class="img-fluid rounded" style="transform: scale(1.7); height: 200px;" src="../public/minhaFoto2.png" id="minhaFoto" alt="Foto pessoal" title="Foto pessoal">
          </b-col>

          <b-col lg="6" class="d-flex align-items-center justify-content-center text-center order-lg-2 mt-4 mt-lg-0">
            <div>
              <b-row>
                <b-col lg="12">
                  <h1 id="saudacao">OLÁ!</h1>
                  <h2 id="apresentacao" class="animate-slide-right">Me chamo Matheus Noguerol, e sou</h2>
                  <p class="ocupation animate-slide-right">FULL STACK web DEVELOPER.</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="12">
                  <div id="container-technology" class="technology animate-slide-right" style="padding-left: 2em;"> 
                    <img src="../public/html.png" title="HTML5">  
                    <img src="../public/css.png" title="CSS 3">
                    <img src="../public/bootstrap.png" title="BOOTSTRAP 5">
                    <img src="../public/js.png" title="JAVASCRIPT">
                    <img src="../public/vue.png" title="VUEJS">
                    <img src="../public/PHP.png" title="PHP">
                    <img src="../public/laravel.png" title="LARAVEL">
                    <img src="../public/mysql.png" title="MYSQL">
                    <!-- <img class="technology" src="../public/node.png" title="NODE"> -->
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </section>

      <section v-if="!isMobile"> 
        <article id="sobre">
          <b-row class="pt-4">
            <b-col lg="1">
              <h4><b>ABOUT <hr class="bg-secondary"></b></h4> 
            </b-col>
          
            <b-col lg="10">
              <p>Desenvolvedor fullstack com experiência nas tecnologias citadas acima bem como, NODE.js, diversas bibliotecas de JS, UI Design, UX Design e consumo de APIs REST. Apaixonado pelo desenvolvimento de aplicações de gestão empresarial, profissional e pessoal. Formando em Análise e Desenvolvimento de Sistemas e cursando Especialização em Flutter na Alura.</p>
            </b-col>
          </b-row>
        </article>

        <article id="jornada">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h1>foi</h1>
            <br>
            <br>
            <br>
            <br>
            <br>
        </article>

        <article id="projetos">
          <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h1>oi</h1>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </article>

        <article id="contato">
          <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h1>hehe</h1>
            <br>
            <br>
            <br>
            <br>
        </article>
      </section>

      <section v-if="isMobile">
        <article id="sobre" class="mx-auto text-center" style="margin-bottom: 10em;">
          <b-row style="margin-top: 20em;">
            <b-col lg="6">
              <h4><b>ABOUT</b></h4>
            </b-col>

            <b-col lg="6">
              <p>Desenvolvedor fullstack com experiência nas tecnologias citadas acima bem como, NODE.js, diversas bibliotecas de JS, UI Design, UX Design e consumo de APIs REST. Apaixonado pelo desenvolvimento de aplicações de gestão empresarial, profissional e pessoal. Formando em Análise e Desenvolvimento de Sistemas e cursando Especialização em Flutter na Alura.</p>
            </b-col>
          </b-row>
        </article>

        <article id="jornada" class="mx-auto text-center">
          <b-row class="mx-auto my-auto text-center">
            <b-col lg="6">
              <h4><b>JORNADA</b></h4>
            </b-col>

            <b-col lg="6">
              <img src="../public/jornada.png" title="MYSQL">
            </b-col>
          </b-row>
        </article>

        <article id="projetos">
          <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h1>oi</h1>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </article>

        <article id="contato">
          <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <h1>hehe</h1>
            <br>
            <br>
            <br>
            <br>
        </article>
      </section>
    </b-container>
    
  </div>
</template>

<style scoped>
  .active{
    background-color: white;
    border-radius: 1.5em;
    padding: 1em;
  }

  .nav a{
    padding: 1em;
    color: black;
    text-decoration: none;
  }

  .nav a:hover{
    background-color: white;
    border-radius: 1.5em;
    padding: 1em;
  }

  #allSobre{
    padding: 2em;
  }

  /* .navBar {
    display: flex;
    flex-direction: row;
    flex-wrap: rap;
    text-align: center;
    position: fixed;
    top: 0;
    margin-top: .8em;
    left: 0;
    width: 100%;
    z-index: 1000; 
    background-color: linear-gradient(#469cfc, #3f5efb, #469cfc); 
  } */

  a.link-navbar {
    text-decoration: none;
    background-color: white;
    padding: 0.8em;
    border-radius: 1em;
    text-transform: none;
  }

  a.link-navbar:hover {
    color: linear-gradient(#469cfc, #3f5efb, #469cfc);
    padding: 2em;
    border-radius: 1em;
    text-decoration: none;
    text-transform: none;
  }

  section #saudacao{
    font-family: "Protest Strike", sans-serif;
    color: white;
    font-style: normal;
    animation: slideIn 2s ease forwards;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animate-slide-right{
    animation: slideInRight 2s ease forwards;
  }

  #apresentacao{
    color: white;
    font-family: "Protest Strike", sans-serif;
    /* background-color: linear-gradient(to bottom right, #ff7e5f, #feb47b); */
  }

  .ocupation {
    font-family: "Protest Strike", sans-serif;
    font-weight: 400;
    font-style: bolder;
    color: white;
    font-size: 3rem;
  }

  .technology img {
    height: 5rem;
    background-color: white;
    margin: 0.1em;
    border-radius: 1em;
  }

  div#container-technology{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
  } 

  /* section#about */

  @media only screen and (max-width: 600px) {
    div#container-technology {
      flex-direction: column;
      padding-right: 1em;
    }

    img#minhaFoto{
      padding-bottom: 2em;
    }

    div.colunaSobre{
      padding-left: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.5rem;
    }

    #colSobre{
      padding-left: 1em
    }

    .sobre-row {
      padding-top: 3em;
      padding-left: 1em; 
    }

    .navbar {
      overflow: hidden;
      background-color: #2b2b2bbc;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 9999;
    }

    .navbar a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 20px;
      text-decoration: none;
    }

    .navbar a:hover {
      background-color: #ddd;
      border-radius: .2em;
      color: black;
    }

    .navbar a.active {
      background-color: #4CAF50;
      color: white;
    }
  }

  .colunaSobre{
    border-left: 1px solid black;
    height: 8em;
    padding-left: 10em;
  }

  @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

  .gloria-hallelujah-regular {
    font-family: "Gloria Hallelujah", cursive;
    font-weight: 400;
    font-style: normal;
  }
</style>