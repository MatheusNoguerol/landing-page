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
                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/zoperandi.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">Zoperandi</b-card-title>
                                <b-card-sub-title class="mb-2 text-center">Landing Page de sistema CRM</b-card-sub-title>
                                <b-card-text>
                                    Landing page desenvolvida para a divulgação de um sistema de CRM (Customer Relationship Management), projetado e personalizado para atender pequenas e médias empresas, com foco em organização, produtividade e conversão.
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-laravel"></i> Laravel</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-vuejs"></i> Vues js</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-wind"></i> Tailwind</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-database"></i> MySql</b-list-group-item>
                            </b-list-group>

                            <b-card-body class="text-center">
                                <a href="https://zoperandi.space/" target="_blank" class="card-link">Site</a>
                            </b-card-body>

                            <b-card-footer class="text-center"><small>Acesse os links para melhor visualização!</small></b-card-footer>
                        </b-card>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/educaTerraCortesia.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">EDUCA TERRA CORTESIA</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">Gestão de cortesia em evento</b-card-sub-title>
                                <b-card-text>
                                    Aplicação desenvolvida para gerenciar e divulgar brindes distribuídos em eventos por meio de QR Code, em parceria com um projeto de agroecologia comunitário localizado no bairro onde resido.
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-laravel"></i> Laravel</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-vuejs"></i> Vues js</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-database"></i> MySql</b-list-group-item>
                            </b-list-group>

                            <b-card-body class="text-center">
                                <a href="https://github.com/MatheusNoguerol/landing-page-pac-cortesia" target="_blank" class="card-link">Repositório</a>
                            </b-card-body>

                            <b-card-footer class="text-center"><small>Acesse os links para melhor visualização!</small></b-card-footer>
                        </b-card>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/landingPage.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">PORTFÓLIO PESSOAL</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">Apresentação de projetos</b-card-sub-title>
                                <b-card-text>
                                    Projeto desenvolvido para apresentar meus trabalhos de forma objetiva, permitindo a visualização rápida das aplicações em produção e o acesso direto aos respectivos repositórios de código.
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

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/isr.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">ISR</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">CRM personalizado</b-card-sub-title>
                                <b-card-text>
                                    CRM personalizado para a gestão de clientes, vendas, custos e agendamentos, desenvolvido sob medida para atender as necessidades específicas de uma empresa do setor de higienização.
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-laravel"></i> Laravel</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-vuejs"></i> Vues js</b-list-group-item>

                                <b-list-group-item><i class="fa-solid fa-database"></i> MySql</b-list-group-item>
                            </b-list-group>

                            <b-card-body class="text-center">
                                <a href="https://isrhigienizacoes.com.br/" target="_blank" class="card-link">Site</a>
                            </b-card-body>

                            <b-card-footer class="text-center"><small>Acesse os links para melhor visualização!</small></b-card-footer>
                        </b-card>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/totalon.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">TOTALON</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">ERP completo para empresas de diversos ramos</b-card-sub-title>
                                <b-card-text>
                                    ERP completo voltado para empresas de diferentes segmentos, oferecendo recursos avançados de gestão financeira, controle de estoque, vendas e geração de relatórios personalizados.
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
                                <b-list-group-item><i class="fa-brands fa-laravel"></i> Laravel</b-list-group-item>
                                <b-list-group-item><i class="fa-brands fa-vuejs"></i> Vues js</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-wind"></i> Tailwind</b-list-group-item>
                                <b-list-group-item><i class="fa-solid fa-database"></i> MySql</b-list-group-item>
                            </b-list-group>

                            <b-card-footer class="text-center"><small>Para maiores informações entre em contato!</small></b-card-footer>
                        </b-card>
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/pacApp.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">PAC APP</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">Aplicativo mobile de projeto agroecológico</b-card-sub-title>
                                <b-card-text>
                                    Aplicativo mobile em desenvolvimento que conecta agroecologia e tecnologia, promovendo a interação entre usuários de forma educativa e engajadora, com foco em impacto ambiental positivo.
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

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/controlefin.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">APP Controle financeiro</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">Aplicativo IOS e Android</b-card-sub-title>
                                <b-card-text>
                                    Projeto piloto de um aplicativo mobile integrado a uma API própria, voltado ao controle financeiro pessoal, com geração de relatórios, visualização de dados e dashboards analíticos.
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

                    <div class="col-12 col-md-6 col-lg-3 hiddenElement d-flex py-4">
                        <b-card no-body img-alt="Image" img-top class="mb-4 project-card w-100">
                            <template #header>
                                <img src="../../public/api.png" alt="programa matheus do taxi erp" class="img-fluid rounded"/>
                            </template>

                            <b-card-body>
                                <b-card-title class="text-center">API's</b-card-title>
                                <b-card-sub-title class="mb-4 text-center">Application Programming Interface</b-card-sub-title>
                                <b-card-text>
                                    Desenvolvimento de APIs REST voltadas para aplicações web e mobile, focadas em organização de dados, desempenho, segurança e integração com diferentes plataformas.
                                </b-card-text>
                            </b-card-body>

                            <b-list-group flush>
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
    .project-card {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .project-card .card-body {
        flex-grow: 1;
    }
    .project-card .card-text {
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .project-card .list-group {
        flex-shrink: 0;
        min-height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .project-card .list-group-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0.5rem 1rem;
    }
    .project-card .card-footer {
        margin-top: auto;
    }
    .project-card .card-body.text-center {
        flex-grow: 0;
    }
    .project-card .card-body.text-center {
        min-height: 48px;
    }
</style>
  