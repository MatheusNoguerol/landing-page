
<script>

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
      this.isMobile = window.innerWidth < 992;

      window.addEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize(){
        let self = this

        self.isMobile = window.innerWidth < 992
      },

      indicaNavItem(item) {
        this.activeItem = item

        document.querySelector('#sobre').style.backgroundColor = ''
        document.querySelector('#jornada').style.backgroundColor = ''
        document.querySelector('#projetos').style.backgroundColor = ''
        document.querySelector('#contato').style.backgroundColor = ''

        if (item === 'About') {
          document.querySelector('#sobre').style.backgroundColor = 'white'
          document.querySelector('#sobre').style.borderRadius = '1.5em'
        } else if (item === 'Journey') {
          document.querySelector('#jornada').style.backgroundColor = 'white'
          document.querySelector('#jornada').style.borderRadius = '1.5em'
        } else if (item === 'Projects') {
          document.querySelector('#projetos').style.backgroundColor = 'white'
          document.querySelector('#projetos').style.borderRadius = '1.5em'
        } else if (item === 'Contact') {
          document.querySelector('#contato').style.backgroundColor = 'white'
          document.querySelector('#contato').style.borderRadius = '1.5em'
        }

        
      },

      limpaNavItem(){
        let self = this

        self.activeItem = 'NoG'
        document.querySelector('#sobre').style.backgroundColor = ''
        document.querySelector('#jornada').style.backgroundColor = ''
        document.querySelector('#projetos').style.backgroundColor = ''
        document.querySelector('#contato').style.backgroundColor = ''
      }
    }
    
  }
</script>


<template>
  <div id="app">
    <div id="menu-navegacao">
      <b-navbar toggleable="lg" type="dark" variant="dark" style="width: 100%; z-index: 99999; opacity: .9; margin-bottom: 2em;">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" v-if="!isMobile" class="d-flex text-center justify-content-center align-items-center" is-nav>
          <b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item href="#logo" id="nog" @click="limpaNavItem()"><a style="color: white;">NoG</a></b-nav-item>
              <b-nav-item href="#about"><a :class="{ active: activeItem === 'About' }" @click="indicaNavItem('About')">About</a></b-nav-item>
              <b-nav-item href="#jornada"><a :class="{ active: activeItem === 'Journey' }" @click="indicaNavItem('Journey')">Journey</a></b-nav-item>
              <b-nav-item href="#projetos"><a :class="{ active: activeItem === 'Projects' }" @click="indicaNavItem('Projects')">Projects</a></b-nav-item>
              <b-nav-item href="#contato"><a :class="{ active: activeItem === 'Contact' }" @click="indicaNavItem('Contact')">Contact</a></b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
        
        <b-collapse id="nav-collapse" v-if="isMobile" is-nav>
          <b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item href="#logo" id="nog" @click="limpaNavItem()"><a style="color: white;">NoG</a></b-nav-item>
              <b-nav-item href="#sobre"><a :class="{ active: activeItem === 'About' }" @click="indicaNavItem('About')">About</a></b-nav-item>
              <b-nav-item href="#jornada"><a :class="{ active: activeItem === 'Journey' }" @click="indicaNavItem('Journey')">Journey</a></b-nav-item>
              <b-nav-item href="#projetos"><a :class="{ active: activeItem === 'Projects' }" @click="indicaNavItem('Projects')">Projects</a></b-nav-item>
              <b-nav-item href="#contato"><a :class="{ active: activeItem === 'Contact' }" @click="indicaNavItem('Contact')">Contact</a></b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div>
      <b-row>
        <b-col v-if="isMobile">
          <a alt="Ir para início da página" title="Ir para início da página" href="#menu-navegacao" style="position:fixed;width:40px;height:40px;bottom:40px;right:40px;text-align:center;font-size:30px;;
            z-index:1000;" target="_self">
                <b-icon icon="arrow-up" style="color: white;" animation="cylon-vertical" font-scale="1"></b-icon>
            </a>
        </b-col>

        <b-col v-if="!isMobile" style="margin-right: 3em;">
          <a alt="Ir para início da página" title="Ir para início da página" href="#menu-navegacao" style="position:fixed;width:40px;height:40px;bottom:40px;right:40px;text-align:center;font-size:30px;;
            z-index:1000;" target="_self">
                <b-icon icon="arrow-up" style="color: white;" animation="cylon-vertical" font-scale="1"></b-icon>
            </a>
        </b-col>
      </b-row>
    </div>

    <b-container>
      <section id="logo">
        <b-row style="padding-top: 10em;">
          <b-col lg="6" class="order-lg-1 text-center" style="padding-top: 9em;">
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

      <section id="about" style="padding-top: 5em; margin-top: 4em;">
        <article class="mx-auto text-center" style="margin-bottom: 30em;">
          <b-row style="margin-top: 20em; margin-bottom: 10em;" id="sobre">
            <b-col lg="6" style="margin-top: 3em;">
              <h4><b>ABOUT</b></h4>
            </b-col>

            <b-col lg="6">
              <p>Desenvolvedor fullstack com experiência nas tecnologias citadas acima bem como, NODE.js, diversas bibliotecas de JS, UI Design, UX Design e consumo de APIs REST. Apaixonado pelo desenvolvimento de aplicações de gestão empresarial, profissional e pessoal. Formando em Análise e Desenvolvimento de Sistemas e cursando Especialização em Flutter na Alura.</p>
            </b-col>
          </b-row>
        </article>
      </section>
      
      <section id="jornada">
        <article class="mx-auto text-center">
          <b-row style="padding-top: 5em;">
            <b-col lg="6" style="margin-top: 10em;">
              <h4><b>JORNADA</b></h4>
            </b-col>

            <b-col lg="6">
              <img src="../public/jornada.png" title="Jornada" class="w-100 img-fluid rounded" style="margin-bottom: .2em; padding-right: .9em;">
            </b-col>
          </b-row>
        </article>
      </section>

      <section id="projetos">
        <article style="margin-top: 28em;">
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
      </section>

      <section id="contato">
        <article style="margin-top: 28em;">
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
    border-radius: 1.2em;
    padding: .4em;
  }
  
  div#menu-navegacao a{
    text-decoration: none;
    text-transform: none;
  }

  div#menu-navegacao a:hover{
    color: linear-gradient(#469cfc, #3f5efb, #469cfc);
    font-weight: bolder;
    text-decoration: underline;
  }

  #saudacao{
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

  #apresentacao{
    color: white;
    font-family: "Protest Strike", sans-serif;
  }

  .animate-slide-right{
    animation: slideInRight 2s ease forwards;
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

  @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

  #nog {
    font-family: "Protest Strike", sans-serif;
    font-weight: 400;
    font-style: bolder;
    color: white;
    font-size: 1.2rem;
  }

  .ocupation{
    font-family: "Protest Strike", sans-serif;
    font-weight: 400;
    font-style: bolder;
    color: white;
    font-size: 3rem;
  }

  div#container-technology{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
  } 

  .technology img {
    height: 5rem;
    background-color: white;
    margin: 0.1em;
    border-radius: 1em;
  }
</style>