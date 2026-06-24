<template>
  <nav>
    <div>
      <ul class="nav justify-content-center text-center align-items-center">
        <li class="nav-item"><a class="nav-link" href="#app">{{
                            $t('nav.home')
                        }}</a></li>
        <li class="nav-item"><a class="nav-link" href="#sobre">{{
                            $t('nav.about')
                        }}</a></li>
        <li class="nav-item"><a class="nav-link" href="#projetos">{{
                            $t('nav.projects')
                        }}</a></li>
        <li class="nav-item"><a class="nav-link" href="#contato">{{
                            $t('nav.contact')
                        }}</a></li>

        <li class="nav-item ml-3">
          <button @click="changeLanguage('pt')" :class="{'active-lang': $i18n.locale === 'pt'}">PT</button>
          <span class="px-1">|</span>
          <button @click="changeLanguage('en')" :class="{'active-lang': $i18n.locale === 'en'}">EN</button>
        </li>
      </ul>
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
      },
      changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('user-lang', lang); // Salva a escolha [cite: 85]
    }
    },
    mounted() {
    // Carrega a preferência ao iniciar
    const savedLang = localStorage.getItem('user-lang');
    if (savedLang) {
      this.$i18n.locale = savedLang;
    }
  }
  }

</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}

a:hover{
  color: white;
}

.nav-link { color: black; text-decoration: none; }
.nav-link:hover { color: #007bff; } /* Azul profissional */

button {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #999;
  transition: color 0.3s;
}

button:hover { color: black; }

.active-lang {
  color: #000;
  text-decoration: underline;
  text-underline-offset: 5px;
}
</style>
