<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid justify-content-center">
      <a class="navbar-brand" href="#">MinhaLandingPage</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#home" @click="scrollToSection">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#features" @click="scrollToSection">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" @click="scrollToSection">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" @click="scrollToSection">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'LandingNavbar',
  methods: {
    scrollToSection(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
</style>
