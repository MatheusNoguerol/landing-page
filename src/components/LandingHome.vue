<script>
export default {
  name: 'LandingHome',

  data() {
    return {
        isSmallScreen: window.innerWidth < 768,
        tecnologias: [
            { nome: 'Laravel', icon: 'fa-laravel', cor: '#FF2D20' },
            { nome: 'PHP', icon: 'fa-php', cor: '#777BB4' },
            { nome: 'MySQL', icon: '', cor: '#4479A1' },
            { nome: 'JavaScript', icon: 'fa-js', cor: '#F7DF1E' },
            { nome: 'Vue.js', icon: 'fa-vuejs', cor: '#42B883' },
            { nome: 'Node.js', icon: 'fa-node-js', cor: '#3C873A' },
            { nome: 'React Native', icon: 'fa-react', cor: '#61DAFB' },
            { nome: 'Docker', icon: 'fa-docker', cor: '#2496ED' },
            { nome: 'Tailwind CSS', icon: '', cor: '#FFC222' },
            { nome: 'Git', icon: 'fa-git-alt', cor: '#F05032' },
        ]
    }
  },

  mounted() {
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    document
      .querySelectorAll(".hiddenElement")
      .forEach((el) => myObserver.observe(el));

    window.addEventListener("resize", () => {
      this.isSmallScreen = window.innerWidth < 768;
    });
  }
}
</script>

<template>
  <section class="home-section container my-5">
    <div class="row align-items-center m-1">

      <div class="col-md-6">
        <img 
          src="../../public/minhaFoto2.png" 
          alt="Matheus Noguerol"
          class="img-fluid rounded animate__animated animate__fadeInLeft"
        />
      </div>

      <div class="col-md-6">
        <b-row 
          class="bg-white p-4 rounded"
          :class="isSmallScreen ? 'text-center' : 'text-start'"
        >
            <b-col>
                <h1>{{ $t('home.greeting') }}</h1>
                <h2 id="apresentacao">{{ $t('home.presentation') }}</h2>
                <p class="lead" v-html="$t('home.description')"></p>
            </b-col>
        </b-row>

        <b-row class="mt-3 text-center">
            <b-col class="logos">
                <div
                    v-for="(tech, index) in tecnologias"
                        :key="index"
                        class="tech-card hiddenElement"
                        :style="{ '--hover-color': tech.cor }"
                    >
                    <template v-if="tech.nome === 'MySQL'">
                        <i class="fa fa-database fa-2x" aria-hidden="true"></i>
                    </template>

                    <template v-else-if="tech.nome === 'Tailwind CSS'">
                        <i class="fa fa-bolt fa-2x" aria-hidden="true"></i>
                    </template>

                    <template v-else>
                        <i :class="`fa-brands fa-2x ${tech.icon}`"></i>
                    </template>

                    <div class="tech-name">{{ tech.nome }}</div>
                </div>
            </b-col>
        </b-row>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

/* Intersection animation */
.hiddenElement {
  opacity: 0;
  filter: blur(15px);
  transform: translateX(-50px);
  transition: all 0.8s ease;
}
.show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

/* Tecnologias */
.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tech-card {
  width: 120px;
  margin: 10px;
  padding: 16px;
  border-radius: 12px;
  background: #fff;
  transition: all 0.3s ease;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tech-card i {
  transition: all 0.3s ease;
  color: #444;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}

.tech-name {
  margin-top: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}

/* Hover com cor da tecnologia */
.tech-card:hover {
  transform: scale(1.1);
}

.tech-card:hover i {
  color: var(--hover-color);
}
</style>
