import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Calendar,
  Award,
  Code,
  Server,
  Cloud,
  Database,
  Menu,
  X,
  Sun,
  Moon,
  Clock
} from 'lucide-react'
import './App.css'

// Import project diagrams
import azureSynapseImg from './assets/azure_synapse_cicd.png'
import vmwareAzureImg from './assets/vmware_azure_migration.png'
import azureMlImg from './assets/azure_ml_cicd.png'
import mendixImg from './assets/mendix_platform.png'
import ampmAzureImg from './assets/ampm_azure.png'
import cercGcpImg from './assets/cerc_gcp.png'
import arcelorAzureImg from './assets/arcelor_azure.png'
import awsDataImg from './assets/aws_data_analysis.png'
import pipelineSchedulerImg from './assets/pipeline_scheduler.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('en') // 'en' for English, 'pt' for Portuguese

  // Theme management
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Language management
  useEffect(() => {
    // Check for saved language preference or default to English
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  // Translations
  const translations = {
    en: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        publications: 'Publications',
        education: 'Education',
        contact: 'Contact'
      },
      // Hero Section
      hero: {
        title: 'Senior DevOps Engineer',
        subtitle: 'AWS | Azure | DevOps | Python | Terraform',
        description: 'I am a quick learner and a dedicated team player, committed to working hard and collaborating effectively.',
        viewProjects: 'View My Projects',
        getInTouch: 'Get In Touch'
      },
      // About Section
      about: {
        title: 'About Me',
        description1: 'With over 8 years of experience in DevOps and cloud engineering, I specialize in designing and implementing scalable infrastructure solutions across AWS, Azure, and Google Cloud platforms.',
        description2: 'My expertise spans from automating CI/CD pipelines to managing complex microservices architectures, always focusing on reliability, security, and operational excellence.',
        location: 'Trofa, Portugal',
        email: 'alexsanderson.vsantos@gmail.com',
        cloudArchitecture: 'Cloud Architecture',
        cloudArchitectureDesc: 'AWS, Azure, GCP',
        infrastructureAsCode: 'Infrastructure as Code',
        infrastructureAsCodeDesc: 'Terraform, Ansible',
        cicdAutomation: 'CI/CD Automation',
        cicdAutomationDesc: 'Jenkins, Azure DevOps'
      },
      // Skills Section
      skills: {
        title: 'Technical Skills',
        description: 'A comprehensive overview of my technical expertise and tools I work with regularly.'
      },
      // Experience Section
      experience: {
        title: 'Work Experience',
        current: 'Current'
      },
      // Projects Section
      projects: {
        title: 'Featured Projects',
        keyAchievements: 'Key Achievements:'
      },
      // Publications Section
      publications: {
        title: 'Publications',
        readArticle: 'Read Article',
        abstract: 'Abstract:',
        topics: 'Topics:'
      },
      // Education Section
      education: {
        title: 'Education & Certifications',
        educationTitle: 'Education',
        certificationsTitle: 'Certifications'
      },
      // Contact Section
      contact: {
        title: 'Get In Touch',
        description: "I'm always interested in discussing new opportunities and exciting projects.",
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        sendEmail: 'Send Email',
        linkedin: 'LinkedIn',
      }
    },
    pt: {
      // Navigation
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        experience: 'Experiência',
        projects: 'Projetos',
        publications: 'Publicações',
        education: 'Educação',
        contact: 'Contato'
      },
      // Hero Section
      hero: {
        title: 'Engenheiro DevOps Sênior',
        subtitle: 'AWS | Azure | DevOps | Python | Terraform',
        description: 'Sou uma pessoa que aprende rapidamente e um membro de equipe dedicado, comprometido em trabalhar duro e colaborar efetivamente.',
        viewProjects: 'Ver Meus Projetos',
        getInTouch: 'Entre em Contato'
      },
      // About Section
      about: {
        title: 'Sobre Mim',
        description1: 'Com mais de 8 anos de experiência em DevOps e engenharia de nuvem, sou especialista em projetar e implementar soluções de infraestrutura escaláveis nas plataformas AWS, Azure e Google Cloud.',
        description2: 'Minha expertise abrange desde a automação de pipelines CI/CD até o gerenciamento de arquiteturas complexas de microsserviços, sempre focando em confiabilidade, segurança e excelência operacional.',
        location: 'Trofa, Portugal',
        email: 'alexsanderson.vsantos@gmail.com',
        cloudArchitecture: 'Arquitetura em Nuvem',
        cloudArchitectureDesc: 'AWS, Azure, GCP',
        infrastructureAsCode: 'Infraestrutura como Código',
        infrastructureAsCodeDesc: 'Terraform, Ansible',
        cicdAutomation: 'Automação CI/CD',
        cicdAutomationDesc: 'Jenkins, Azure DevOps, GitLab, AWS Pipelines'
      },
      // Skills Section
      skills: {
        title: 'Habilidades Técnicas',
        description: 'Uma visão abrangente da minha expertise técnica e ferramentas com as quais trabalho regularmente.'
      },
      // Experience Section
      experience: {
        title: 'Experiência Profissional',
        current: 'Atual'
      },
      // Projects Section
      projects: {
        title: 'Projetos em Destaque',
        keyAchievements: 'Principais Conquistas:'
      },
      // Publications Section
      publications: {
        title: 'Publicações',
        readArticle: 'Ler Artigo',
        abstract: 'Resumo:',
        topics: 'Tópicos:'
      },
      // Education Section
      education: {
        title: 'Educação e Certificações',
        educationTitle: 'Educação',
        certificationsTitle: 'Certificações'
      },
      // Contact Section
      contact: {
        title: 'Entre em Contato',
        description: 'Estou sempre interessado em discutir novas oportunidades e projetos empolgantes.',
        email: 'Email',
        phone: 'Telefone',
        location: 'Localização',
        sendEmail: 'Enviar Email',
        linkedin: 'LinkedIn',
      }
    }
  }

  // Get current translation
  const t = translations[language]

  // Navigation items
  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'publications', label: t.nav.publications },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact }
  ]

  // Skills data
  const skills = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Ansible', category: 'Automation' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'Azure DevOps', category: 'CI/CD' },
    { name: 'Python', category: 'Programming' },
    { name: 'Shell Scripting', category: 'Programming' },
    { name: 'Git', category: 'Version Control' },
    { name: 'Splunk', category: 'Monitoring' },
    { name: 'SonarCloud', category: 'Quality' }
  ]

  // Work experience data with translations
  const getExperiences = (lang) => {
    const experiencesData = {
      en: [
        {
          title: 'Senior DevOps Engineer',
          company: 'Act Digital',
          period: '05/2022 - Current',
          location: 'Portugal',
          achievements: [
            'Design, implement, and maintain Azure DevOps CI/CD pipelines to ensure efficient and reliable software delivery.',
            'Automate infrastructure provisioning and configuration using Infrastructure as Code (IaC) tools like Terraform or Ansible in the Azure Cloud.',
            'Monitor system performance and set up alerting to identify and resolve issues proactively using Sonar Cloud and Splunk.',
            'Troubleshoot and resolve technical issues related to deployments, infrastructure, and application performance.',
            'Collaborate with development teams to optimize application deployment processes and improve overall system reliability.'
          ]
        },
        {
          title: 'Senior DevOps Engineer',
          company: 'Atlantic Institute',
          period: '01/2021 - 05/2022',
          location: 'Brazil',
          achievements: [
            'Architect scalable AWS infrastructure using Terraform to automate resource provisioning and management.',
            'Audit and refactor Terraform modules to ensure reusable, maintainable, and secure infrastructure code across AWS environments.',
            'Implement and optimize CI/CD pipelines that integrate Terraform workflows for automated AWS deployments.',
            'Configure AWS networking, security groups, and IAM policies through Terraform to enforce best practices and compliance.',
            'Monitor AWS resources and automate alerts for performance, security, and cost optimization using Terraform and native AWS tools.'
          ]
        },
        {
          title: 'DevOps Engineer',
          company: 'Techne Engineering Systems',
          period: '06/2019 - 01/2021',
          location: 'Portugal',
          achievements: [
            'Design and deploy microservices on AWS using container orchestration platforms like Kubernetes (EKS) to ensure scalability and resilience.',
            'Automate the provisioning and management of microservice infrastructure with Terraform for consistency and repeatability.',
            'Implement and maintain CI/CD pipelines tailored for microservices to enable rapid, reliable, and independent deployments.',
            'Monitor the health and performance of microservices using AWS tools like CloudWatch, setting up alerts to proactively address issues.',
            'Enforce security best practices and manage IAM roles, networking, and access controls for microservices across AWS environments.'
          ]
        },
        {
          title: 'Scientific Researcher',
          company: 'Intelligent and Advanced Networking Research Group - IANG',
          period: '03/2017 - 05/2019',
          location: 'Brazil',
          achievements: [
            'Design and simulate new routing algorithms for efficient data dissemination in Vehicular Ad Hoc Networks (VANETs) integrated with Software Defined Networking (SDN).',
            'Implement SDN controllers to manage dynamic network topologies and optimize vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communications.',
            'Analyze and evaluate the performance, scalability, and security of VANET-SDN architectures through experiments and simulations.',
            'Develop and test mobility models and network protocols using C++ to improve real-time communication and resource allocation in vehicular environments.',
            'Publish the final research findings on innovative VANET and SDN solutions.'
          ]
        },
        {
          title: 'Cloud Analyst / SRE Engineer',
          company: 'Systems and Database Laboratory (LSBD)',
          period: '10/2015 - 01/2017',
          location: 'Brazil',
          achievements: [
            'Automate provisioning, scaling, and configuration of VMware and OpenStack resources to improve operational efficiency and reduce manual toil.',
            'Monitor infrastructure health and performance and implement automated remediation workflows for both VMware and OpenStack clouds.',
            'Troubleshoot and resolve incidents in datacenter clouds, performing root cause analysis and collaborating with engineering teams for long-term fixes.',
            'Manage and execute regular upgrades, patching, and security hardening of virtualization platforms to ensure reliability and compliance.',
            'Develop and maintain Ansible scripts and automation playbooks for consistent, repeatable cloud operations across VMware and OpenStack platforms.'
          ]
        }
      ],
      pt: [
        {
          title: 'Engenheiro DevOps Sênior',
          company: 'Act Digital',
          period: '05/2022 - Atual',
          location: 'Portugal',
          achievements: [
            'Projetar, implementar e manter pipelines CI/CD do Azure DevOps para garantir entrega de software eficiente e confiável.',
            'Automatizar o provisionamento e configuração de infraestrutura usando ferramentas de Infraestrutura como Código (IaC) como Terraform ou Ansible na Nuvem Azure.',
            'Monitorar o desempenho do sistema e configurar alertas para identificar e resolver problemas proativamente usando Sonar Cloud e Splunk.',
            'Solucionar problemas técnicos relacionados a implantações, infraestrutura e desempenho de aplicações.',
            'Colaborar com equipes de desenvolvimento para otimizar processos de implantação de aplicações e melhorar a confiabilidade geral do sistema.'
          ]
        },
        {
          title: 'Engenheiro DevOps Sênior',
          company: 'Instituto Atlantico',
          period: '01/2021 - 05/2022',
          location: 'Brasil',
          achievements: [
            'Arquitetar infraestrutura escalável da AWS usando o Terraform para automatizar o provisionamento e o gerenciamento de recursos.',
            'Auditar e refatorar os módulos do Terraform para garantir um código de infraestrutura reutilizável, sustentável e seguro nos ambientes da AWS.',
            'Implementar e otimizar pipelines de CI/CD que integram fluxos de trabalho do Terraform para implementações automatizadas do AWS.',
            'Configurar a rede do AWS, os grupos de segurança e as políticas de IAM por meio do Terraform para aplicar as práticas recomendadas e a conformidade.',
            'Monitorar os recursos do AWS e automatizar alertas para otimização de desempenho, segurança e custos usando o Terraform e as ferramentas nativas do AWS.'
          ]
        },
        {
          title: 'Engenheiro DevOps',
          company: 'Techne Engenharia e Sistemas',
          period: '06/2019 - 01/2021',
          location: 'Brasil',
          achievements: [
            'Projetar e implantar microsserviços na AWS usando plataformas de orquestração de contêineres como Kubernetes (EKS) para garantir escalabilidade e resiliência.',
            'Automatizar o provisionamento e gerenciamento de infraestrutura de microsserviços com Terraform para consistência e repetibilidade.',
            'Implementar e manter pipelines CI/CD adaptados para microsserviços para permitir implantações rápidas, confiáveis e independentes.',
            'Monitorar a saúde e desempenho de microsserviços usando ferramentas AWS como CloudWatch, configurando alertas para abordar problemas proativamente.',
            'Aplicar melhores práticas de segurança e gerenciar funções IAM, redes e controles de acesso para microsserviços em ambientes AWS.'
          ]
        },
        {
          title: 'Pesquisador Científico',
          company: 'Grupo de Pesquisa em Redes Inteligentes e Avançadas - IANG',
          period: '03/2017 - 05/2019',
          location: 'Brasil',
          achievements: [
            'Projetar e simular novos algoritmos de roteamento para disseminação eficiente de dados em Redes Ad Hoc Veiculares (VANETs) integradas com Redes Definidas por Software (SDN).',
            'Implementar controladores SDN para gerenciar topologias de rede dinâmicas e otimizar comunicações veículo-para-veículo (V2V) e veículo-para-infraestrutura (V2I).',
            'Analisar e avaliar o desempenho, escalabilidade e segurança de arquiteturas VANET-SDN através de experimentos e simulações.',
            'Desenvolver e testar modelos de mobilidade e protocolos de rede usando C++ para melhorar a comunicação em tempo real e alocação de recursos em ambientes veiculares.',
            'Publicar os resultados finais da pesquisa sobre soluções inovadoras de VANET e SDN.'
          ]
        },
        {
          title: 'Analista de Nuvem / Engenheiro SRE',
          company: 'Laboratório de Sistemas e Banco de Dados (LSBD)',
          period: '10/2015 - 01/2017',
          location: 'Brasil',
          achievements: [
            'Automatizar provisionamento, dimensionamento e configuração de recursos VMware e OpenStack para melhorar a eficiência operacional e reduzir trabalho manual.',
            'Monitorar a saúde e desempenho da infraestrutura e implementar fluxos de trabalho de remediação automatizada para nuvens VMware e OpenStack.',
            'Solucionar problemas e resolver incidentes em nuvens de datacenter, realizando análise de causa raiz e colaborando com equipes de engenharia para correções de longo prazo.',
            'Gerenciar e executar atualizações regulares, patches e endurecimento de segurança de plataformas de virtualização para garantir confiabilidade e conformidade.',
            'Desenvolver e manter scripts Ansible e playbooks de automação para operações de nuvem consistentes e repetíveis em plataformas VMware e OpenStack.'
          ]
        }
      ]
    }
    return experiencesData[lang]
  }

  const experiences = getExperiences(language)
  // Projects data with translations
  const getProjects = (lang) => {
    const projectsData = {
      en: [
        {
          title: 'CI/CD solution for data analysis with Synapse - Azure',
          year: '2025',
          description: 'This project delivers a CI/CD solution for data analysis with Azure Synapse, automating the build, testing, and deployment of Synapse artifacts across development, test, and production environments to ensure efficient, reliable, and scalable data operations.',
          achievements: [
            'Automated the promotion of Synapse workspaces and artifacts (SQL scripts, notebooks, pipelines) between environments using Azure DevOps pipelines and ARM templates.',
            'Enabled version-controlled development and streamlined collaboration by integrating Synapse workspaces with Azure Repos git repository.',
            'Reduced deployment errors and manual intervention through standardized, repeatable CI/CD workflows for all data platform components.',
            'Enhanced data quality and reliability by incorporating automated testing and validation steps into the deployment pipelines.'
          ],
          image: azureSynapseImg,
          technologies: ['Azure Synapse', 'Azure DevOps', 'ARM Templates', 'CI/CD']
        },
        {
          title: 'Migration VMware VMs to Azure',
          year: '2025',
          description: 'This project focuses on migrating physical VMs from VMware Evea to Azure using Azure Migrate, streamlining the transition to cloud infrastructure while ensuring minimal downtime and data loss.',
          achievements: [
            'Assessed and inventoried VMware Evea VMs for migration readiness using Azure Migrate\'s discovery and assessment tools.',
            'Automated replication and migration of VMs to Azure.',
            'Performed test migrations to validate VM functionality in Azure before production cutover.',
            'Optimized post-migration performance and cost by right-sizing Azure resources.',
            'Updating resources management in Azure Cloud using Terraform.'
          ],
          image: vmwareAzureImg,
          technologies: ['Azure Migrate', 'VMware', 'Terraform', 'Azure']
        },
        {
          title: 'CI/CD for Azure Machine Learning',
          year: '2024',
          description: 'This project establishes a complete CI/CD process for Azure Machine Learning using Azure DevOps and Azure Repos, automating the lifecycle from code versioning through model training, evaluation, deployment, and monitoring to ensure rapid, reliable delivery of ML solutions on Azure.',
          achievements: [
            'Automated data preparation, model training, and deployment workflows using Azure Pipelines integrated with Azure Repos for version control.',
            'Enabled consistent model versioning, artifact management, and reproducible ML experiments through standardized CI/CD pipelines.',
            'Improved team collaboration, code quality, and traceability by leveraging Git-based workflows and Azure DevOps project management tools.'
          ],
          image: azureMlImg,
          technologies: ['Azure ML', 'Azure DevOps', 'MLOps', 'Python']
        },
        {
          title: 'Avail - Mendix Platform',
          year: '2023',
          description: 'This project established a comprehensive, Git-based CI/CD process in Azure DevOps for Mendix low code application environments, enabling automated build, test, and deployment workflows integrated with version control.',
          achievements: [
            'Integrated Mendix applications with Azure DevOps Git repositories for streamlined version control and collaboration.',
            'Automated build and deployment of Mendix apps across multiple environments using Azure DevOps Pipelines.',
            'Implemented continuous integration with quality gates in SonarCloud.',
            'Enabled rapid, consistent delivery cycles with reduced manual intervention and improved traceability.',
            'Enhanced monitoring and feedback loops with Splunk.'
          ],
          image: mendixImg,
          technologies: ['Mendix', 'Azure DevOps', 'CI/CD', 'Low-Code']
        },
        {
          title: 'AMPM - Azure',
          year: '2022',
          description: 'This project implements a comprehensive data processing and analytics solution on Azure, leveraging Databricks for advanced analytics, Azure Data Factory for data orchestration, and Azure Functions for serverless computing to create a scalable, efficient data platform.',
          achievements: [
            'Designed and deployed a scalable data architecture using Azure Databricks for big data processing and machine learning workloads.',
            'Orchestrated complex data workflows with Azure Data Factory, enabling automated data ingestion, transformation, and loading across multiple sources.',
            'Implemented serverless computing solutions with Azure Functions to handle event-driven data processing and real-time analytics.',
            'Optimized data storage and retrieval using Azure Data Lake and Azure SQL Database for improved performance and cost efficiency.',
            'Established monitoring and alerting systems to ensure data pipeline reliability and performance.'
          ],
          image: ampmAzureImg,
          technologies: ['Azure Databricks', 'Azure Data Factory', 'Azure Functions', 'Data Analytics']
        },
        {
          title: 'CERC - Google Cloud',
          year: '2021',
          description: 'This project focuses on automating the publication and management of Python libraries to Google Cloud Artifact Registry, streamlining the development workflow and ensuring consistent, reliable package distribution across cloud environments.',
          achievements: [
            'Automated Python library packaging and publication to Google Cloud Artifact Registry using CI/CD pipelines.',
            'Implemented version control and dependency management strategies for seamless library distribution.',
            'Established security and access controls for artifact repositories to ensure safe and controlled library access.',
            'Optimized build and deployment processes to reduce publication time and improve developer productivity.',
            'Created comprehensive documentation and guidelines for library development and publication workflows.'
          ],
          image: cercGcpImg,
          technologies: ['Google Cloud', 'Python', 'Artifact Registry', 'CI/CD']
        },
        {
          title: 'Arcelor - Azure',
          year: '2022',
          description: 'This project automates infrastructure provisioning and management on Azure using Terraform, implementing Infrastructure as Code practices to ensure consistent, scalable, and maintainable cloud environments.',
          achievements: [
            'Designed and implemented comprehensive Terraform modules for Azure infrastructure provisioning.',
            'Automated the deployment of complex multi-tier applications and supporting infrastructure.',
            'Established infrastructure versioning and change management processes using Git-based workflows.',
            'Implemented cost optimization strategies through automated resource scaling and lifecycle management.',
            'Created disaster recovery and backup solutions integrated with Terraform-managed infrastructure.'
          ],
          image: arcelorAzureImg,
          technologies: ['Terraform', 'Azure', 'Infrastructure as Code', 'Automation']
        },
        {
          title: 'CI/CD Solution for Data Analysis - AWS',
          year: '2021',
          description: 'This project implements a comprehensive CI/CD solution for data analysis workflows on AWS, utilizing Apache Airflow for orchestration and Terraform for infrastructure management to create a robust, scalable data processing platform.',
          achievements: [
            'Designed and deployed Apache Airflow on AWS for orchestrating complex data analysis workflows and ETL processes.',
            'Implemented Infrastructure as Code using Terraform to provision and manage AWS resources for data processing.',
            'Automated data pipeline deployment and testing through integrated CI/CD workflows.',
            'Established monitoring and logging solutions for data pipeline observability and troubleshooting.',
            'Enabled rapid deployment cycles for data analysis solutions with minimal downtime.'
          ],
          image: awsDataImg,
          technologies: ['AWS', 'Apache Airflow', 'Terraform', 'CI/CD']
        },
        {
          title: 'Pipeline Scheduler for Automatic Configurations',
          year: '2019',
          description: 'This project automates the configuration of applications hosted on AWS using Ansible and integrates Ansible-driven configuration management into Jenkins-controlled CI/CD pipelines, streamlining deployment and operational workflows.',
          achievements: [
            'Automated application setup and configuration on AWS instances using Ansible playbooks, reducing manual intervention and errors.',
            'Integrated Ansible with Jenkins pipelines to enable seamless, end-to-end deployment and configuration management.',
            'Centralized infrastructure and application configuration as code, improving consistency and traceability across environments.',
            'Accelerated deployment cycles and improved feedback loops by triggering Ansible tasks automatically from Jenkins on code changes.',
            'Enhanced operational reliability and security by standardizing configurations and automating repetitive tasks across AWS-hosted applications.'
          ],
          image: pipelineSchedulerImg,
          technologies: ['Ansible', 'Jenkins', 'AWS', 'Configuration Management']
        }
      ],
      pt: [
        {
          title: 'Solução CI/CD para análise de dados com Synapse - Azure',
          year: '2025',
          description: 'Este projeto entrega uma solução CI/CD para análise de dados com Azure Synapse, automatizando a construção, teste e implantação de artefatos Synapse em ambientes de desenvolvimento, teste e produção para garantir operações de dados eficientes, confiáveis e escaláveis.',
          achievements: [
            'Automatizou a promoção de workspaces Synapse e artefatos (scripts SQL, notebooks, pipelines) entre ambientes usando pipelines Azure DevOps e templates ARM.',
            'Habilitou desenvolvimento com controle de versão e colaboração simplificada integrando workspaces Synapse com repositório git Azure Repos.',
            'Reduziu erros de implantação e intervenção manual através de fluxos de trabalho CI/CD padronizados e repetíveis para todos os componentes da plataforma de dados.',
            'Melhorou a qualidade e confiabilidade dos dados incorporando etapas automatizadas de teste e validação nos pipelines de implantação.'
          ],
          image: azureSynapseImg,
          technologies: ['Azure Synapse', 'Azure DevOps', 'ARM Templates', 'CI/CD']
        },
        {
          title: 'Migração de VMs VMware para Azure',
          year: '2025',
          description: 'Este projeto foca na migração de VMs físicas do VMware Evea para Azure usando Azure Migrate, simplificando a transição para infraestrutura em nuvem garantindo tempo de inatividade mínimo e perda de dados.',
          achievements: [
            'Avaliou e inventariou VMs VMware Evea para prontidão de migração usando ferramentas de descoberta e avaliação do Azure Migrate.',
            'Automatizou replicação e migração de VMs para Azure.',
            'Realizou migrações de teste para validar funcionalidade de VMs no Azure antes da transição de produção.',
            'Otimizou desempenho e custo pós-migração dimensionando adequadamente recursos Azure.',
            'Atualizou gerenciamento de recursos na Nuvem Azure usando Terraform.'
          ],
          image: vmwareAzureImg,
          technologies: ['Azure Migrate', 'VMware', 'Terraform', 'Azure']
        },
        {
          title: 'CI/CD para Azure Machine Learning',
          year: '2024',
          description: 'Este projeto estabelece um processo CI/CD completo para Azure Machine Learning usando Azure DevOps e Azure Repos, automatizando o ciclo de vida desde versionamento de código até treinamento de modelo, avaliação, implantação e monitoramento para garantir entrega rápida e confiável de soluções ML no Azure.',
          achievements: [
            'Automatizou fluxos de trabalho de preparação de dados, treinamento de modelo e implantação usando Azure Pipelines integrado com Azure Repos para controle de versão.',
            'Habilitou versionamento consistente de modelo, gerenciamento de artefatos e experimentos ML reproduzíveis através de pipelines CI/CD padronizados.',
            'Melhorou colaboração em equipe, qualidade de código e rastreabilidade aproveitando fluxos de trabalho baseados em Git e ferramentas de gerenciamento de projeto Azure DevOps.'
          ],
          image: azureMlImg,
          technologies: ['Azure ML', 'Azure DevOps', 'MLOps', 'Python']
        },
        {
          title: 'Avail - Plataforma Mendix',
          year: '2023',
          description: 'Este projeto estabeleceu um processo CI/CD abrangente baseado em Git no Azure DevOps para ambientes de aplicação low code Mendix, habilitando fluxos de trabalho automatizados de construção, teste e implantação integrados com controle de versão.',
          achievements: [
            'Integrou aplicações Mendix com repositórios Git Azure DevOps para controle de versão simplificado e colaboração.',
            'Automatizou construção e implantação de apps Mendix em múltiplos ambientes usando Azure DevOps Pipelines.',
            'Implementou integração contínua com portões de qualidade no SonarCloud.',
            'Habilitou ciclos de entrega rápidos e consistentes com redução de intervenção manual e rastreabilidade melhorada.',
            'Melhorou monitoramento e loops de feedback com Splunk.'
          ],
          image: mendixImg,
          technologies: ['Mendix', 'Azure DevOps', 'CI/CD', 'Low-Code']
        },
        {
          title: 'AMPM - Azure',
          year: '2022',
          description: 'Este projeto implementa uma solução abrangente de processamento e análise de dados no Azure, aproveitando Databricks para análises avançadas, Azure Data Factory para orquestração de dados e Azure Functions para computação serverless para criar uma plataforma de dados escalável e eficiente.',
          achievements: [
            'Projetou e implantou uma arquitetura de dados escalável usando Azure Databricks para processamento de big data e cargas de trabalho de machine learning.',
            'Orquestrou fluxos de trabalho de dados complexos com Azure Data Factory, habilitando ingestão, transformação e carregamento automatizados de dados em múltiplas fontes.',
            'Implementou soluções de computação serverless com Azure Functions para lidar com processamento de dados orientado a eventos e análises em tempo real.',
            'Otimizou armazenamento e recuperação de dados usando Azure Data Lake e Azure SQL Database para melhor desempenho e eficiência de custo.',
            'Estabeleceu sistemas de monitoramento e alerta para garantir confiabilidade e desempenho do pipeline de dados.'
          ],
          image: ampmAzureImg,
          technologies: ['Azure Databricks', 'Azure Data Factory', 'Azure Functions', 'Data Analytics']
        },
        {
          title: 'CERC - Google Cloud',
          year: '2021',
          description: 'Este projeto foca na automação da publicação e gerenciamento de bibliotecas Python no Google Cloud Artifact Registry, simplificando o fluxo de trabalho de desenvolvimento e garantindo distribuição consistente e confiável de pacotes em ambientes de nuvem.',
          achievements: [
            'Automatizou empacotamento e publicação de bibliotecas Python no Google Cloud Artifact Registry usando pipelines CI/CD.',
            'Implementou estratégias de controle de versão e gerenciamento de dependências para distribuição perfeita de bibliotecas.',
            'Estabeleceu controles de segurança e acesso para repositórios de artefatos para garantir acesso seguro e controlado a bibliotecas.',
            'Otimizou processos de construção e implantação para reduzir tempo de publicação e melhorar produtividade do desenvolvedor.',
            'Criou documentação abrangente e diretrizes para fluxos de trabalho de desenvolvimento e publicação de bibliotecas.'
          ],
          image: cercGcpImg,
          technologies: ['Google Cloud', 'Python', 'Artifact Registry', 'CI/CD']
        },
        {
          title: 'Arcelor - Azure',
          year: '2022',
          description: 'Este projeto automatiza provisionamento e gerenciamento de infraestrutura no Azure usando Terraform, implementando práticas de Infraestrutura como Código para garantir ambientes de nuvem consistentes, escaláveis e mantíveis.',
          achievements: [
            'Projetou e implementou módulos Terraform abrangentes para provisionamento de infraestrutura Azure.',
            'Automatizou a implantação de aplicações multi-camadas complexas e infraestrutura de suporte.',
            'Estabeleceu processos de versionamento de infraestrutura e gerenciamento de mudanças usando fluxos de trabalho baseados em Git.',
            'Implementou estratégias de otimização de custo através de dimensionamento automatizado de recursos e gerenciamento de ciclo de vida.',
            'Criou soluções de recuperação de desastres e backup integradas com infraestrutura gerenciada por Terraform.'
          ],
          image: arcelorAzureImg,
          technologies: ['Terraform', 'Azure', 'Infrastructure as Code', 'Automation']
        },
        {
          title: 'Solução CI/CD para Análise de Dados - AWS',
          year: '2021',
          description: 'Este projeto implementa uma solução CI/CD abrangente para fluxos de trabalho de análise de dados na AWS, utilizando Apache Airflow para orquestração e Terraform para gerenciamento de infraestrutura para criar uma plataforma robusta e escalável de processamento de dados.',
          achievements: [
            'Projetou e implantou Apache Airflow na AWS para orquestrar fluxos de trabalho complexos de análise de dados e processos ETL.',
            'Implementou Infraestrutura como Código usando Terraform para provisionar e gerenciar recursos AWS para processamento de dados.',
            'Automatizou implantação e teste de pipeline de dados através de fluxos de trabalho CI/CD integrados.',
            'Estabeleceu soluções de monitoramento e logging para observabilidade e solução de problemas de pipeline de dados.',
            'Habilitou ciclos de implantação rápidos para soluções de análise de dados com tempo de inatividade mínimo.'
          ],
          image: awsDataImg,
          technologies: ['AWS', 'Apache Airflow', 'Terraform', 'CI/CD']
        },
        {
          title: 'Agendador de Pipeline para Configurações Automáticas',
          year: '2019',
          description: 'Este projeto automatiza a configuração de aplicações hospedadas na AWS usando Ansible e integra gerenciamento de configuração orientado por Ansible em pipelines CI/CD controlados por Jenkins, simplificando fluxos de trabalho de implantação e operacionais.',
          achievements: [
            'Automatizou configuração e setup de aplicações em instâncias AWS usando playbooks Ansible, reduzindo intervenção manual e erros.',
            'Integrou Ansible com pipelines Jenkins para habilitar gerenciamento de configuração e implantação perfeitos de ponta a ponta.',
            'Centralizou configuração de infraestrutura e aplicação como código, melhorando consistência e rastreabilidade em ambientes.',
            'Acelerou ciclos de implantação e melhorou loops de feedback disparando tarefas Ansible automaticamente do Jenkins em mudanças de código.',
            'Melhorou confiabilidade operacional e segurança padronizando configurações e automatizando tarefas repetitivas em aplicações hospedadas na AWS.'
          ],
          image: pipelineSchedulerImg,
          technologies: ['Ansible', 'Jenkins', 'AWS', 'Configuration Management']
        }
      ]
    }
    return projectsData[lang]
  }

  const projects = getProjects(language)

  // Publications data with translations
  const getPublications = (lang) => {
    const publicationsData = {
      en: [
        {
          title: 'Artificial Intelligence in DevOps and Cloud Computing: transforming business strategies',
          date: '03 June 2025',
          readTime: '15 min',
          publisher: 'Alter Solutions',
          url: 'https://www.alter-solutions.com/articles/artificial-intelligence-devops-cloud-computing',
          description: 'An in-depth exploration of how the integration of AI with DevOps practices and Cloud Computing environments is creating new strategic opportunities for companies, enabling greater efficiency, scalability and innovation.',
          topics: ['Cloud Computing', 'Artificial Intelligence', 'DevOps', 'Business Strategy'],
          abstract: 'This article explores how the synergy between AI, DevOps and Cloud Computing is creating new strategic opportunities for companies of all sizes. It analyzes the impacts of this integration, highlighting concrete benefits, implementation challenges and future trends that will shape the market in the coming years.'
        }
      ],
      pt: [
        {
          title: 'Inteligência Artificial em DevOps e Computação em Nuvem: transformando estratégias de negócio',
          date: '03 Junho 2025',
          readTime: '15 min',
          publisher: 'Alter Solutions',
          url: 'https://www.alter-solutions.com/articles/artificial-intelligence-devops-cloud-computing',
          description: 'Uma exploração aprofundada de como a integração da IA com práticas DevOps e ambientes de Computação em Nuvem está criando novas oportunidades estratégicas para empresas, permitindo maior eficiência, escalabilidade e inovação.',
          topics: ['Computação em Nuvem', 'Inteligência Artificial', 'DevOps', 'Estratégia de Negócio'],
          abstract: 'Este artigo explora como a sinergia entre IA, DevOps e Computação em Nuvem está criando novas oportunidades estratégicas para empresas de todos os tamanhos. Analisa os impactos desta integração, destacando benefícios concretos, desafios de implementação e tendências futuras que moldarão o mercado nos próximos anos.'
        }
      ]
    }
    return publicationsData[lang]
  }

  const publications = getPublications(language)

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-primary"
            >
              Alexsanderson Santos
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Theme Toggle and Language Toggle and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Toggle language"
              >
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-foreground" />
                ) : (
                  <Moon size={20} className="text-foreground" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t pt-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-3"
              >
                {t.hero.viewProjects}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-3"
              >
                {t.hero.getInTouch}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.about.title}</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-muted-foreground mb-6">
                  {t.about.description1}
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  {t.about.description2}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{t.about.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>{t.about.email}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Cloud className="text-primary" size={32} />
                      <div>
                        <h3 className="font-semibold">{t.about.cloudArchitecture}</h3>
                        <p className="text-sm text-muted-foreground">{t.about.cloudArchitectureDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Server className="text-primary" size={32} />
                      <div>
                        <h3 className="font-semibold">{t.about.infrastructureAsCode}</h3>
                        <p className="text-sm text-muted-foreground">{t.about.infrastructureAsCodeDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Code className="text-primary" size={32} />
                      <div>
                        <h3 className="font-semibold">{t.about.cicdAutomation}</h3>
                        <p className="text-sm text-muted-foreground">{t.about.cicdAutomationDesc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.skills.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="text-sm py-2 px-4 w-full">
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.experience.title}</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg font-medium text-primary">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.projects.title}</h2>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            <Badge variant="outline">{project.year}</Badge>
                          </div>
                          <CardDescription className="text-base">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {project.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                      <div className="p-6 flex items-center justify-center bg-muted/50">
                        <img
                          src={project.image}
                          alt={`${project.title} architecture diagram`}
                          className="w-full h-auto max-w-md rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.publications.title}</h2>
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2 leading-tight">
                            {publication.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              {publication.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={16} />
                              {publication.readTime}
                            </div>
                            <div className="font-medium text-primary">
                              {publication.publisher}
                            </div>
                          </div>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href={publication.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Read Article
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4 leading-relaxed">
                        {publication.description}
                      </CardDescription>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Abstract:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {publication.abstract}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {publication.topics.map((topic, topicIndex) => (
                            <Badge key={topicIndex} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{t.education.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" size={24} />
                  {t.education.educationTitle}
                </h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold">Master's Degree in Computer Science</h4>
                      <p className="text-muted-foreground">Federal University of Pernambuco</p>
                      <p className="text-sm text-muted-foreground">03/2017 - 05/2019 | Brazil</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold">Bachelor's degree in Computer Networks</h4>
                      <p className="text-muted-foreground">Federal University of Ceará</p>
                      <p className="text-sm text-muted-foreground">02/2011 - 02/2015 | Brazil</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="text-primary" size={24} />
                  {t.education.certificationsTitle}
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold">AWS Certified Solutions Architect Associate</h4>
                    <p className="text-muted-foreground">Amazon Web Services</p>
                    <p className="text-sm text-muted-foreground">2019</p>
                    <p className="text-xs text-muted-foreground">Credential ID: 80MKG54KH1QQ1T3C</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.contact.description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">alexsanderson.vsantos@gmail.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+351 913466544</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Trofa, Portugal</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a href="mailto:alexsanderson.vsantos@gmail.com" className="flex items-center gap-2">
                  <Mail size={16} />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href="https://www.linkedin.com/in/alex-vsantos/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Alexsanderson Santos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

