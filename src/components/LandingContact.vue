<template>
  <section id="contato" class="py-5">
    <div class="container">
        <b-row class="text-center mb-5">
            <b-col>
                <h2 class="text-5 text-uppercase mb-2">Fale comigo</h2>
                <p class="text-muted mb-4">Entre em contato ou me encontre nas redes sociais</p>
            </b-col>
        </b-row>

        <b-row class="justify-content-center mb-5">
            <b-col cols="auto" class="text-center">
                <a href="https://github.com/MatheusNoguerol" target="_blank" class="contact-icon github">
                    <i class="fab fa-github fa-3x"></i>
                    <p class="mt-2">GitHub</p>
                </a>
            </b-col>
            <b-col cols="auto" class="text-center">
                <a href="https://www.linkedin.com/in/matheus-noguerol-7628a6253/" target="_blank" class="contact-icon linkedin">
                    <i class="fab fa-linkedin fa-3x"></i>
                    <p class="mt-2">LinkedIn</p>
                </a>
            </b-col>
        </b-row>

        <b-row class="justify-content-center g-3">
            <b-col cols="12" md="4">
                <div class="info-card text-center">
                <i class="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                <p class="mb-0">Rio de Janeiro / RJ</p>
                </div>
            </b-col>
            <b-col cols="12" md="4">
                <div class="info-card text-center">
                <i class="fas fa-phone fa-2x text-primary mb-2"></i>
                <p class="mb-0">(21) 96523-0293 (Whatsapp)</p>
                </div>
            </b-col>
            <b-col cols="12" md="4">
                <div class="info-card text-center">
                <i class="fas fa-envelope fa-2x text-primary mb-2"></i>
                <p class="mb-0">matheusnoguerol15@gmail.com</p>
                </div>
            </b-col>
        </b-row>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingContact',
};
</script>

<style scoped>
#contato {
  scroll-margin-top: 100px;
}

.contact-icon {
  display: inline-block;
  color: #333;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
}
.contact-icon i {
  display: block;
}
.contact-icon p {
  margin: 0;
  font-weight: 500;
}
.contact-icon:hover {
  transform: translateY(-5px);
  color: #007bff;
  font-weight: bolder;
}

.info-card {
  background: #fff;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.12);
}
</style>
