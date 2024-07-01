<template>
  <section class="home-section container my-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img 
          src="../../public/minhaFoto2.png" 
          alt="Descriptive Text" 
          class="img-fluid rounded animate__animated animate__fadeInLeft"
        />
      </div>
      <div class="col-md-6 animate__animated animate__fadeInRight">
        <b-row class="bg-white p-4 rounded">
          <b-col lg="12">
            <h1>OLÁ!</h1>
            <h2 id="apresentacao" >Me chamo Matheus Noguerol</h2>
            <p>e atuo como FULL STACK web DEVELOPER.</p>
          </b-col>
        </b-row>
        <b-row class="mt-2 text-center">
          <b-col>
            <div class="text-center d-inline-block squad">
              <i class="fa-brands fa-2x fa-laravel p-4"></i>
              <div>Laravel</div>
            </div>
            <div class="text-center d-inline-block squad">
              <i class="fa-brands fa-2x fa-php p-4"></i>
              <div>PHP</div>
            </div>
            <div class="text-center d-inline-block squad">
              <i class="fa-solid fa-2x fa-database p-4"></i>
              <div>MYSQL</div>
            </div>
            <div class="text-center d-inline-block squad">
              <i class="fa-brands fa-2x fa-js p-4"></i>
              <div>JavaScript</div>
            </div>
            <div class="text-center d-inline-block squad">
              <i class="fa-brands fa-2x fa-vuejs p-4"></i>
              <div>Vue.js</div>
            </div>
            <div class="text-center d-inline-block squad">
              <i class="fa-brands fa-2x fa-html5 p-4"></i>
              <div>HTML5</div>
            </div>
            <div class="text-center d-inline-block squad">
              <i class="fa-brands fa-2x fa-css3-alt p-4"></i>
              <div>CSS3</div>
            </div>
            <div class="text-center d-inline-block squad">
              <i class="fa-brands fa-2x fa-bootstrap p-4"></i>
              <div>Bootstrap</div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>
  
<script>
  export default {
    name: 'LandingHome'
  }
</script>
  
<style scoped>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
  .squad:hover{
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
  }
</style>
  