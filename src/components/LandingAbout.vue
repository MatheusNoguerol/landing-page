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

        window.addEventListener("scroll", this.verificaSecaoAtual);
        window.addEventListener("scroll", this.verificaBotaoTopo);
    },
    methods: {}
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
                        Desenvolvedor <strong>Full Stack</strong> com mais de <strong>4 anos de experiência</strong>,
                        atuando na criação de soluções <strong>web e mobile</strong> do zero até produção,
                        sempre com foco em <strong>performance, escalabilidade e código bem estruturado</strong>.
                        Ao longo da minha trajetória, desenvolvi sistemas como <strong>ERPs, CRMs, aplicações mobile
                        e plataformas web</strong> voltadas para resolver problemas reais de negócio.
                    </p>

                    <p>
                        Possuo forte vivência com <strong>Laravel, Vue.js, Node.js, NestJS, React Native,
                        SQL, Redis, Docker e TailwindCSS</strong>, trabalhando em projetos que lidam com
                        <strong>regras de negócio complexas</strong>, alto volume de dados e integrações críticas.
                        Tenho experiência prática em arquitetura de sistemas, organização de código,
                        versionamento e boas práticas de desenvolvimento.
                    </p>

                    <p>
                        Já implementei <strong>integrações robustas com plataformas como iFood, Mercado Livre,
                        Nuvemshop e iMendes</strong>, atuando diretamente com <strong>APIs, webhooks,
                        sincronização de produtos e pedidos, filas, automações e processos em larga escala</strong>.
                        Esses projetos exigiram atenção especial à estabilidade, consistência dos dados
                        e desempenho das aplicações.
                    </p>

                    <p>
                        Gosto de <strong>resolver problemas complexos</strong>, pensar na arquitetura,
                        otimizar fluxos e transformar necessidades do negócio em
                        <strong>soluções técnicas simples, estáveis e eficientes</strong>.
                        Curto ambientes dinâmicos, com autonomia, troca técnica e foco em produto,
                        onde a tecnologia é usada para gerar impacto real.
                    </p>

                    <p class="mb-0">
                        🚀 Aberto a novos desafios, projetos e oportunidades — especialmente
                        onde a tecnologia é utilizada para resolver problemas reais.
                    </p>
                </b-col>
            </div>

            <div class="row align-items-center text-center">
                <b-col lg="12">
                    <b-container fluid class="p-2">
                        <b-row class="d-flex justify-content-center hiddenElement">
                            <b-col xs="12" sm="6" lg="4" class="d-flex justify-content-center mb-3">
                                <img 
                                    src="../../public/ML.jpg" 
                                    alt="Integração Mercado Livre" 
                                    class="img-fluid rounded"
                                    style="height: 10rem; object-fit: cover; width: 100%;" />
                            </b-col>

                            <b-col xs="12" sm="6" lg="4" class="d-flex justify-content-center mb-3">
                                <img 
                                    src="../../public/NS.jpg" 
                                    alt="Integração Nuvemshop" 
                                    class="img-fluid rounded"
                                    style="height: 10rem; object-fit: cover; width: 100%;" />
                            </b-col>

                            <b-col xs="12" sm="6" lg="4" class="d-flex justify-content-center mb-3">
                                <img 
                                    src="../../public/IFOOD_branco.jpg" 
                                    alt="Integração iFood" 
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
