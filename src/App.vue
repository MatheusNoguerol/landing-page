
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
  }
}
</script>

<template>
  <div id="app" style="background: linear-gradient(#469cfc, #3f5efb, #469cfc);">
    
    <b-container class="">
      <b-row class="pt-5" id="navBar">
        <b-col lg="2">
          
        </b-col>

        <b-col lg="2"></b-col>

        <b-col lg="1"><b-button variant="transparent">About</b-button></b-col>
        <b-col lg="1"><b-button variant="transparent">Journey</b-button></b-col>
        <b-col lg="1"><b-button variant="transparent">Projects</b-button></b-col>
        <b-col lg="1"><b-button variant="transparent">Contact</b-button></b-col>
      </b-row>
      
      <section id="about">
        <hr class="hr-custom">
        <b-row>
          <b-col lg="6" id="apresentacao" class="d-flex align-items-center justify-content-center">
            <div>
              <b-row>
                <b-col lg="12">
                  <h1 id="saudacao">OLÁ,</h1>
                  <p><b>Me chamo <span id="nome">Matheus Noguerol!</span></b></p>
                  <p class="ocupation">FULL STACK web DEVELOPER</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="12">
                  <div id="container-technology" class="bg-white rounded"> 
                    <img class="technology" src="../public/html.png" title="HTML5">  
                    <img class="technology" src="../public/css.png" title="CSS 3">
                    <img class="technology" src="../public/bootstrap.png" title="BOOTSTRAP 5">
                    <img class="technology" src="../public/js.png" title="JAVASCRIPT">
                    <img class="technology" src="../public/vue.png" title="VUEJS">
                    <img class="technology" src="../public/PHP.png" title="PHP">
                    <img class="technology" src="../public/laravel.png" title="LARAVEL">
                    <img class="technology" src="../public/mysql.png" title="MYSQL">
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>

          <b-col lg="6" style="padding-top: 100px;">
            <img class="img-fluid rounded" style="transform: scale(1.7); height: 200px;" src="../public/minhaFoto2.png" id="Sistema Total On" alt="Parceria Total+" title="Parceria Total+">
          </b-col>
        </b-row>
      </section>
    </b-container>
    
  </div>
</template>

<style scoped>
#app{
  height: 100vh;
}
#navBar{
  padding-right: 0;
  margin-right: 0;
}

#texto{
  padding-top: 2rem;
}

#nome{
  text-transform: uppercase;
  text-decoration: underline;
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
  }
  100% {
    transform: translateX(0);
  }
}

.ocupation {
  font-family: "Protest Strike", sans-serif;
  font-weight: 400;
  font-style: bolder;
  color: white;
  font-size: 3rem;
}

.technology {
  height: 7rem;
}

div#container-technology{
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
} 


/* section#about */
</style>