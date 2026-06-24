import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    pt: {
        nav: { home: 'NoG', about: 'Sobre', projects: 'Projetos', contact: 'Contato' },

        home: {
            greeting: "Olá 👋",
            presentation: "Me chamo Matheus Noguerol",
            description: "Desenvolvedor <span style='font-weight: bold;'>Full Stack</span> focado em soluções web e mobile, performance, integrações e produtos reais."
        },

        about: {
            title: "Sobre Mim",
            subtitle: "Construindo soluções com precisão técnica",
            desc1: "Desenvolvedor <span style='font-weight: bold;'>Full Stack</span> com mais de <span style='font-weight: bold;'>4 anos de experiência</span>, especializado em transformar necessidades de negócio em soluções de alta performance.",
            desc2: "Minha expertise abrange todo o ciclo de vida do software, com foco em arquiteturas escaláveis. Atualmente, foco em Soluções Financeiras, Automações Inteligentes e Integrações de Alta Disponibilidade.",
            expertise: "Expertise em Integrações Críticas",
            finance: {
                title: "Soluções Financeiras & Bancárias",
                text: "Integrações robustas para gestão de pagamentos e transações.",
                tag: "Segurança e Confiabilidade máxima."
            },
            automation: {
                title: "Automação & Inteligência",
                item1: "✅ Automações de fluxo com <span style='font-weight: bold;'>n8n</span>",
                item2: "✅ Integrações nativas com <span style='font-weight: bold;'>WhatsApp API</span>",
                item3: "✅ Implementação de <span style='font-weight: bold;'>IA generativa no código</span>"
            },
            marketplace: {
                title: "Ecossistema de Marketplaces & E-commerce",
                text: "Desenvolvo integrações robustas que vão além da simples conexão. Implemento arquiteturas baseadas em <span style='font-weight: bold;'>webhooks</span> para garantir a <span style='font-weight: bold;'>sincronização em tempo real</span> de pedidos, controle rigoroso de estoque e atualização dinâmica de produtos. Gerencio toda a visibilidade do negócio através de <span style='font-weight: bold;'>relatórios e fluxos automatizados."
            }
        },

        projects: {
            title: "PROJETOS",
            footer_tip: "Acesse os links para melhor visualização!",
            footer_contact: "Para maiores informações entre em contato!",
            items: {
                zoperandi: {
                    title: "Zoperandi",
                    subtitle: "Landing Page de sistema CRM",
                    text: "Landing page desenvolvida para a divulgação de um sistema de CRM (Customer Relationship Management), projetado e personalizado para atender pequenas e médias empresas, com foco em organização, produtividade e conversão.",
                    link: "Site"
                },
                educa_terra: {
                    title: "EDUCA TERRA CORTESIA",
                    subtitle: "Gestão de cortesia em evento",
                    text: "Aplicação desenvolvida para gerenciar e divulgar brindes distribuídos em eventos por meio de QR Code, em parceria com um projeto de agroecologia comunitário localizado no bairro onde resido.",
                    link: "Repositório"
                },
                portfolio: {
                    title: "PORTFÓLIO PESSOAL",
                    subtitle: "Apresentação de projetos",
                    text: "Projeto desenvolvido para apresentar meus trabalhos de forma objetiva, permitindo a visualização rápida das aplicações em produção e o acesso direto aos respectivos repositórios de código.",
                    link: "Repositório"
                },
                isr: {
                    title: "ISR",
                    subtitle: "CRM personalizado",
                    text: "CRM personalizado para a gestão de clientes, vendas, custos e agendamentos, desenvolvido sob medida para atender as necessidades específicas de uma empresa do setor de higienização.",
                    link: "Site"
                },
                totalon: {
                    title: "TOTALON",
                    subtitle: "ERP completo para empresas de diversos ramos",
                    text: "ERP completo voltado para empresas de diferentes segmentos, oferecendo recursos avançados de gestão financeira, controle de estoque, vendas e geração de relatórios personalizados."
                },
                pac_app: {
                    title: "PAC APP",
                    subtitle: "Aplicativo mobile de projeto agroecológico",
                    text: "Aplicativo mobile em desenvolvimento que conecta agroecologia e tecnologia, promovendo a interação entre usuários de forma educativa e engajadora, com foco em impacto ambiental positivo."
                },
                controle_fin: {
                    title: "APP Controle financeiro",
                    subtitle: "Aplicativo IOS e Android",
                    text: "Projeto piloto de um aplicativo mobile integrado a uma API própria, voltado ao controle financeiro pessoal, com geração de relatórios, visualização de dados e dashboards analíticos."
                },
                apis: {
                    title: "API's",
                    subtitle: "Application Programming Interface",
                    text: "Desenvolvimento de APIs REST voltadas para aplicações web e mobile, focadas em organização de dados, desempenho, segurança e integração com diferentes plataformas."
                }
            }
        },

        contact: {
            title: "Fale comigo",
            subtitle: "Entre em contato ou me encontre nas redes sociais",
            github: "GitHub",
            linkedin: "LinkedIn",
            location: "Rio de Janeiro / RJ",
            phone: "(21) 96523-0293 (Whatsapp)",
            email: "matheusnoguerol15@gmail.com"
        }
    },
    en: {
        nav: { home: 'NoG', about: 'About', projects: 'Projects', contact: 'Contact' },

        home: {
            greeting: "Hello 👋",
            presentation: "My name is Matheus Noguerol",
            description: "<span style='font-weight: bold;'>Full Stack</span> developer focused on web and mobile solutions, performance, integrations, and real products."
        },

        about: {
            title: "About Me",
            subtitle: "Building solutions with technical precision",
            desc1: "Full Stack <span style='font-weight: bold;'>Developer</span> with over <span style='font-weight: bold;'>4 years of experience</span>, specialized in transforming business needs into high-performance solutions.",
            desc2: "My expertise spans the entire software lifecycle, focusing on scalable architectures. Currently, I focus on Financial Solutions, Intelligent Automation, and High Availability Integrations.",
            expertise: "Expertise in Critical Integrations",
            finance: {
                title: "Financial & Banking Solutions",
                text: "Robust integrations for payment and transaction management.",
                tag: "Maximum security and reliability."
            },
            automation: {
                title: "Automation & Intelligence",
                item1: "✅ Workflow automation with <span style='font-weight: bold;'>n8n</span>",
                item2: "✅ Native integrations with <span style='font-weight: bold;'>WhatsApp API</span>",
                item3: "✅ Implementation of <span style='font-weight: bold;'>generative AI in code</span>"
            },
            marketplace: {
                title: "Marketplace & E-commerce Ecosystem",
                text: "I develop robust integrations that go beyond simple connections. I implement <span style='font-weight: bold;'>webhook-based</span> architectures <span style='font-weight: bold;'>to ensure real-time synchronization</span> of orders, strict inventory control, and dynamic product updates. I manage full business visibility through <span style='font-weight: bold;'>reports and automated workflows</span>."
            }
        },

        projects: {
            title: "PROJECTS",
            footer_tip: "Access the links for better visualization!",
            footer_contact: "For more information, please get in touch!",
            items: {
                zoperandi: {
                    title: "Zoperandi",
                    subtitle: "CRM system Landing Page",
                    text: "Landing page developed to promote a CRM (Customer Relationship Management) system, designed and customized to serve small and medium-sized companies, focusing on organization, productivity, and conversion.",
                    link: "Website"
                },
                educa_terra: {
                    title: "EDUCA TERRA CORTESIA",
                    subtitle: "Event courtesy management",
                    text: "Application developed to manage and promote giveaways distributed at events via QR Code, in partnership with a community agroecology project located in my neighborhood.",
                    link: "Repository"
                },
                portfolio: {
                    title: "PERSONAL PORTFOLIO",
                    subtitle: "Project showcase",
                    text: "Project developed to present my work objectively, allowing quick viewing of applications in production and direct access to their respective code repositories.",
                    link: "Repository"
                },
                isr: {
                    title: "ISR",
                    subtitle: "Custom CRM",
                    text: "Custom CRM for managing clients, sales, costs, and appointments, tailored to meet the specific needs of a company in the cleaning sector.",
                    link: "Website"
                },
                totalon: {
                    title: "TOTALON",
                    subtitle: "Complete ERP for various business sectors",
                    text: "Complete ERP aimed at companies in different segments, offering advanced features for financial management, inventory control, sales, and custom report generation."
                },
                pac_app: {
                    title: "PAC APP",
                    subtitle: "Agroecological project mobile app",
                    text: "Mobile application in development that connects agroecology and technology, promoting user interaction in an educational and engaging way, with a focus on positive environmental impact."
                },
                controle_fin: {
                    title: "Financial Control App",
                    subtitle: "iOS and Android application",
                    text: "Pilot project of a mobile application integrated with a proprietary API, aimed at personal financial control, featuring report generation, data visualization, and analytical dashboards."
                },
                apis: {
                    title: "API's",
                    subtitle: "Application Programming Interface",
                    text: "Development of REST APIs for web and mobile applications, focused on data organization, performance, security, and integration with different platforms."
                }
            }
        },

        contact: {
            title: "Get in touch",
            subtitle: "Contact me or find me on social media",
            github: "GitHub",
            linkedin: "LinkedIn",
            location: "Rio de Janeiro / RJ", // Mantido o local pois é fixo
            phone: "(21) 96523-0293 (Whatsapp)", // Mantido o formato para clareza
            email: "matheusnoguerol15@gmail.com"
        }
    }
};

export const i18n = new VueI18n({
  locale: 'pt', // idioma padrão
  messages,
});