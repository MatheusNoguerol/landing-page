
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
      
      <section>
        <hr class="hr-custom">
        <b-row>
          <b-col lg="7">
            <b-row>
              <b-col lg="12" id="texto">
                <h3><b>Olá, meu nome é <span id="nome">Matheus Noguerol!</span></b></h3>
              </b-col>
            </b-row>

            <b-row>
              <b-col lang="12">
                <img class="img-fluid mx-auto rounded" src="../public/fullstack.png" id="Sistema Total On" alt="Parceria Total+" title="Parceria Total+">
              </b-col>
            </b-row>
          </b-col>

          <b-col lg="5" class="my-10">
            <img class="img-fluid rounded" style="transform: scale(1.7);" src="../public/minhaFoto2.png" id="Sistema Total On" alt="Parceria Total+" title="Parceria Total+">
          </b-col>
        </b-row>
      </section>
    </b-container>
    
  </div>
</template>

<style scoped>
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
</style>