<template>
<div>
    <section class="home-section container my-5">
        <div class="container" style="padding-top: 15rem;">
            <b-row class="text-center">
                <b-col>
                    <h2 class="mb-4 text-5 text-uppercase">sobre mim</h2>
                </b-col>
            </b-row>
        </div>
        <div class="row align-items-center text-center">
            <b-col lg="6" class="p-4 bg-white rounded">
                <p>Desenvolvedor fullstack com experiência nas tecnologias citadas acima bem como, NODE.js, diversas bibliotecas de JS, UI Design, UX Design e consumo de APIs REST. Apaixonado pelo desenvolvimento de aplicações de gestão empresarial, profissional e pessoal. Formando em Análise e Desenvolvimento de Sistemas e cursando Especialização em Flutter na Alura.</p>
            </b-col>
            <b-col lg="6">
                <b-container fluid class="p-4">
                    <b-row>
                        <b-col>
                            <img 
                                src="../../public/ML.jpg" 
                                alt="Descriptive Text" 
                                class="img-fluid rounded animate__animated animate__fadeInLeft"
                            />
                        </b-col>
                        <b-col>
                            <img 
                                src="../../public/NS.jpg" 
                                alt="Descriptive Text" 
                                class="img-fluid rounded animate__animated animate__fadeInLeft"
                            />
                        </b-col>
                    </b-row>
                </b-container>
            </b-col>
        </div>
    </section>
</div>
</template>
  
<script>
    export default {
    name: 'LandingAbout',
        methods: {

        }
    }
</script>
  
<style scoped>

</style>
  