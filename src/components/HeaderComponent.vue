<template>
  <div id="app">
     <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgba(12, 12, 12, 0.696);">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <!-- Botão de alternância para dispositivos pequenos -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <!-- Itens da barra de navegação -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <!-- Adicione mais itens conforme necessário -->
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav{
    background: transparent;
    background-color: rgba(12, 12, 12, 0.696);
  }
</style>
