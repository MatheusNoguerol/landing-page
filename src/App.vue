
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data(){
    return{
      isMobile: false
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
  }
  
}
</script>


<template>
  <div id="app" style="">
    
    <b-container>
      <b-row class="pt-5">
        <div id="navBar" class="text-center justify-content-center">
          <b-col lg="1"><b-button variant="transparent">About</b-button></b-col>
          <b-col lg="1"><b-button variant="transparent">Journey</b-button></b-col>
          <b-col lg="1"><b-button variant="transparent">Projects</b-button></b-col>
          <b-col lg="1"><b-button variant="transparent">Contact</b-button></b-col>
        </div>
      </b-row>
      
      <section id="about">
        <hr class="hr-custom">
        <b-row>
          <b-col lg="6" class="order-lg-1 text-center" style="padding-top: 100px;">
            <img class="img-fluid rounded" style="transform: scale(1.7); height: 200px;" src="../public/minhaFoto2.png" id="minhaFoto" alt="Foto pessoal" title="Foto pessoal">
          </b-col>

          <b-col lg="6" class="d-flex align-items-center justify-content-center text-center order-lg-2 mt-4 mt-lg-0">
            <div>
              <b-row>
                <b-col lg="12">
                  <h1 id="saudacao">OLÁ,</h1>
                  <h2 id="apresentacao" class="animate-slide-right">Me chamo Matheus Noguerol, e sou</h2>
                  <p class="ocupation animate-slide-right">FULL STACK web DEVELOPER</p>
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

        <b-row style="padding-top: 10em;  padding-left: 16em;">
          <b-col lg="2" style="padding-top: 3em;" v-if="isMobile">
            <h4><b>ABOUT</b></h4>
          </b-col>
          <b-col lg="10" style="padding-left: 7em;">
            <div class="colunaSobre">
              
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum eos ullam harum, odio fuga eveniet officia cum itaque sint quis quaerat vero porro. Saepe, deserunt tenetur! Suscipit, quo quia?
              
            </div>
          </b-col>

        </b-row>
      </section>
    </b-container>
    
  </div>
</template>

<style scoped>
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
    }

    img#minhaFoto{
      padding-bottom: 2em;
    }

    div.colunaSobre{
      padding-left: 1em;
    }


  }

  #navBar{
    display: flex;
    flex-direction: row;
    flex-wrap: rap;
    text-align: center;
  }

  .colunaSobre{
    border-left: 1px solid black;
    height: 8em;
    padding-left: 10em;
  }
</style>