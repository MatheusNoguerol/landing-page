

<script>
    export default {
        name: 'LandingAbout',
        mounted() {
            const myObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
                });
            });

            const elements = document.querySelectorAll(".hiddenElement");

            elements.forEach((element) => myObserver.observe(element));

            // Escuta o scroll da página
            window.addEventListener("scroll", this.verificaSecaoAtual);

            // Botão para ir para o topo
            window.addEventListener("scroll", this.verificaBotaoTopo);
        },
        methods: {

        },
    }
</script>

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

            <div class="row align-items-center text-center m-1">
                <b-col lg="12" class="p-4 bg-white rounded mb-4 mb-lg-0">
                    <p>
                        Desenvolvedor fullstack com experiência nas tecnologias citadas acima, bem como NODE.js, diversas bibliotecas de JS, UI Design, UX Design e consumo de APIs REST. Apaixonado pelo desenvolvimento de aplicações de gestão empresarial, profissional e pessoal. Formado em Análise e Desenvolvimento de Sistemas e cursando Especialização em mobile (React Native).
                    </p>
                </b-col>
            </div>

            <div class="row align-items-center text-center">
                

                <!-- Coluna das Imagens -->
                <b-col lg="12">
                    <b-container fluid class="p-2">
                        <b-row class="d-flex justify-content-center hiddenElement">
                            <!-- Imagem 1 -->
                            <b-col xs="12" sm="6" lg="4" class="d-flex justify-content-center mb-3">
                                <img 
                                    src="../../public/ML.jpg" 
                                    alt="Descriptive Text" 
                                    class="img-fluid rounded"
                                    style="height: 10rem; object-fit: cover; width: 100%;" />
                            </b-col>

                            <!-- Imagem 2 -->
                            <b-col xs="12" sm="6" lg="4" class="d-flex justify-content-center mb-3">
                                <img 
                                    src="../../public/NS.jpg" 
                                    alt="Descriptive Text" 
                                    class="img-fluid rounded"
                                    style="height: 10rem; object-fit: cover; width: 100%;" />
                            </b-col>

                            <!-- Imagem 3 -->
                            <b-col xs="12" sm="6" lg="4" class="d-flex justify-content-center mb-3">
                                <img 
                                    src="../../public/IFOOD_branco.jpg" 
                                    alt="Descriptive Text" 
                                    class="img-fluid rounded"
                                    style="height: 10rem; object-fit: cover; width: 100%;" />
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </div>



        </section>
    </div>
</template>
  
<style scoped>
    .hiddenElement {
        opacity: 0;
        filter: blur(15px);
        transition: all 2s;
        transform: translateX(-100%);
    }
    .show {
        opacity: 1;
        filter: blur(0px);
        transition: all 2s;
        transform: translateX(0);
    }
</style>
  