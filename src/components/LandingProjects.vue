<script>
    export default {
        name: 'LandingProjects',
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

            this.isSmallScreen = window.innerWidth < 768;

            // Escuta o scroll da página
            window.addEventListener("scroll", this.verificaSecaoAtual);

            // Botão para ir para o topo
            window.addEventListener("scroll", this.verificaBotaoTopo);
        },
        data() {
            return {
            projects: [
                {
                title: 'Project 1',
                image: 'https://via.placeholder.com/600x400',
                description: 'Description for project 1'
                },
                {
                title: 'Project 2',
                image: 'https://via.placeholder.com/600x400',
                description: 'Description for project 2'
                },
                // Adicione mais projetos conforme necessário
            ]
            };
        }
    };
</script>

<template>
    <div>
        <section id="projetos">
            <div class="container" style="padding-top: 10rem;">
                <b-row class="text-center">
                    <b-col>
                        <h2 class="mb-4 text-5 text-uppercase">PROJETOS</h2>
                    </b-col>
                </b-row>
            </div>

            <div class="container">
                <div class="row logos">
                    <div class="col-12 col-md-6 col-lg-3 hiddenElement">
                        <b-card no-body img-alt="Image" img-top class="mb-4">
                            <template #header>
                                <img src="../../public/matheusDoTaxi.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">Matheus do Táxi</b-card-title>
                                <b-card-sub-title class="mb-2 text-center">Sistema ERP</b-card-sub-title>
                                <b-card-text>
                                    Site e sistema de gestão de empresa, que comporta algumas formas de registro e controle de informações. A aplicação conta com esquema de login bem como diversas funcionaliades usuais para gerir um negócio.
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-laravel"></i> Laravel</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-vuejs"></i> Vues js</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-database"></i> MySql</b-list-group-item>
                            </b-list-group>

                            <b-card-body class="text-center">
                                <a href="https://erpdev.petpeloazul.com.br/" target="_blank" class="card-link">Site/Sistema</a>
                                <a href="https://github.com/MatheusNoguerol/MatheusDoTaxi" target="_blank" class="card-link">Repositório</a>
                            </b-card-body>

                            <b-card-footer class="text-center"><small>Acesse os links para melhor visualização!</small></b-card-footer>
                        </b-card>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement">
                        <b-card no-body img-alt="Image" img-top class="mb-4">
                            <template #header>
                                <img src="../../public/educaTerraCortesia.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">EDUCA TERRA CORTESIA</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">Gestão de cortesia em evento</b-card-sub-title>
                                <b-card-text>
                                    Aplicação para gerir e divulgar brindes a serem distribuídos em eventos via QR-CODE, em parceria com um projeto de agroecologia que reside no bairro onde moro.
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-laravel"></i> Laravel</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-vuejs"></i> Vues js</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-database"></i> MySql</b-list-group-item>
                            </b-list-group>

                            <b-card-body class="text-center">
                                <a href="https://educaterracortesia.petpeloazul.com.br/" target="_blank" class="card-link">Site/Sistema</a>
                                <a href="https://github.com/MatheusNoguerol/landing-page-pac-cortesia" target="_blank" class="card-link">Repositório</a>
                            </b-card-body>

                            <b-card-footer class="text-center"><small>Acesse os links para melhor visualização!</small></b-card-footer>
                        </b-card>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement">
                        <b-card no-body img-alt="Image" img-top class="mb-4">
                            <template #header>
                                <img src="../../public/landingPage.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">PORTFÓLIO PESSOAL</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">Apresentação de projetos</b-card-sub-title>
                                <b-card-text>
                                    Portfólio desenvolvido com o intuíto de apresentar de forma objetiva os projetos desenvolvidos por mim, com possibilidade de visualizar rapidamente tanto a aplicação quanto o código. 
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-vuejs"></i> Vues js</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-bootstrap"></i> BOOTSTRAP</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-css3-alt"></i> CSS</b-list-group-item>
                            </b-list-group>

                            <b-card-body class="text-center">
                                <a href="https://github.com/MatheusNoguerol/landing-page" target="_blank" class="card-link">Repositório</a>
                            </b-card-body>

                            <b-card-footer class="text-center"><small>Acesse os links para melhor visualização!</small></b-card-footer>
                        </b-card>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement">
                        <b-card no-body img-alt="Image" img-top class="mb-4">
                            <template #header>
                                <img src="../../public/pacApp.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">PAC APP</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">APP mobile projeto agroecológico</b-card-sub-title>
                                <b-card-text>
                                    Uma rede social que busca unir a agroecologia e a tecnologia, de forma que seja atrativo e divertido melhorar nosso meio ambiente. APP em desenvolvimento! 
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-react"></i> React Native</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-js"></i> TypeScript</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-laravel"></i> Laravel</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-database"></i> MySql</b-list-group-item>
                            </b-list-group>

                            <b-card-footer class="text-center"><small>Para maiores informações entre em contato!</small></b-card-footer>
                        </b-card>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<style scoped>
    #carousel-projects {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }
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
    .logos *:nth-child(2) {
        transition-delay: 200ms;
    }
    .logos *:nth-child(3) {
        transition-delay: 300ms;
    }
</style>
  