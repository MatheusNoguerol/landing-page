

<script>
  export default {
    
data() {
    return {
        marketplaces: [
            { name: 'iFood', src: '/integracoes/marketplaces/ifood.jpg' },
            { name: 'Shopee', src: '/integracoes/marketplaces/shopee.png' },
            { name: 'Mercado Livre', src: '/integracoes/marketplaces/mercadolivre.png' },
            { name: 'Nuvemshop', src: '/integracoes/marketplaces/nuvemshop.png' },
            { name: 'Shopify', src: '/integracoes/marketplaces/shopify.png' }
        ]
    }
}
  }
</script>

<template>
    <section class="about-section container my-5">
        <div class="text-center mb-5">
            <h2 class="text-uppercase font-weight-bold">Sobre Mim</h2>
            <div class="divider mx-auto my-3"></div>
        </div>

        <div class="row justify-content-center mb-5">
            <div class="col-lg-10 about-card p-5">
                <div class="about-content">
                    <h3 class="mb-4">Construindo soluções com precisão técnica</h3>
                    <p class="lead mb-4">
                    Desenvolvedor <span style="font-weight: bold;">Full Stack</span> com mais de <span style="font-weight: bold;">4 anos de experiência</span>, especializado em transformar necessidades de negócio em soluções de alta performance.
                    </p>
                    <p class="mb-0">
                    Minha expertise abrange todo o ciclo de vida do software, com foco em arquiteturas escaláveis. 
                    Atualmente, foco em <span style="font-weight: bold;">Soluções Financeiras, Automações Inteligentes e Integrações de Alta Disponibilidade</span>.
                    </p>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mb-5">
            <div class="col-lg-10">
                <h4 class="mb-4">Expertise em Integrações Críticas</h4>
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 border-0 shadow-sm p-4 text-center">
                        <h5>Soluções Financeiras & Bancárias</h5>
                        <p class="text-muted">Integrações robustas para gestão de pagamentos e transações.</p>
                        <div class="d-flex justify-content-center align-items-center gap-4 py-3">
                            <img src="../../public/integracoes/bancos/conjunto.png" alt="Itaú">
                        </div>
                        <small class="text-primary font-weight-bold">Segurança e Confiabilidade máxima.</small>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="card h-100 border-0 shadow-sm p-4">
                            <h5>Automação & Inteligência</h5>
                            <ul class="list-unstyled">
                                <li>✅ Automações de fluxo com <strong>n8n</strong></li>
                                <li>✅ Integrações nativas com <strong>WhatsApp API</strong></li>
                                <li>✅ Implementação de <strong>IA generativa</strong> no código</li>
                            </ul>
                            <div class="d-flex justify-content-center align-items-center gap-4 py-3">
                                <img src="../../public/integracoes/conjuntoAut.png" alt="Itaú">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mb-5">
    <div class="col-lg-10">
      <div class="card border-0 shadow-sm p-4 p-md-5">
        <h4 class="mb-4">Ecossistema de Marketplaces & E-commerce</h4>
        
        <p class="mb-4">
          Desenvolvo integrações robustas que vão além da simples conexão. Implemento arquiteturas baseadas em <span style="font-weight: bold;">webhooks</span> para garantir 
          a <span style="font-weight: bold;">sincronização em tempo real</span> de pedidos, controle rigoroso de estoque e atualização dinâmica de produtos. 
          Gerencio toda a visibilidade do negócio através de <span style="font-weight: bold;">relatórios e fluxos automatizados.</span>
        </p>

        <div class="row align-items-center justify-content-center">
  <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3" v-for="logo in marketplaces" :key="logo.name">
    <div class="marketplace-card-v2">
      <img :src="logo.src" :alt="logo.name">
    </div>
  </div>
</div>
      </div>
    </div>
  </div>

    </section>
</template>

<style scoped>
.divider { width: 60px; height: 3px; background: #007bff; }
.card { transition: transform 0.3s ease; }
.card:hover { transform: translateY(-5px); }
.gap-4 { gap: 1.5rem; }

.about-card {
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* Sombra mais profunda e elegante */
  position: relative;
  transition: all 0.4s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.about-content .lead {
  font-size: 1.25rem;
  font-weight: 300;
  color: #333;
  line-height: 1.6;
}

.marketplace-card-v2 {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  /* Altura fixa garante que todos os cards fiquem alinhados */
  height: 100px; 
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.marketplace-card-v2 img {
  /* Garante que a imagem não ultrapasse o card e mantenha a proporção */
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  filter: grayscale(0%);
  transition: 0.3s;
}

.marketplace-card-v2:hover {
  background: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.marketplace-card-v2:hover img {
  filter: grayscale(0%);
}
</style>