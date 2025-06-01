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
  Moon
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

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
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

  // Work experience data
  const experiences = [
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
        'Collaborate with development, QA, and security teams to streamline processes and ensure compliance with best practices.'
      ]
    },
    {
      title: 'Senior DevOps Engineer',
      company: 'Instituto Atlantico',
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
      company: 'Techne Engenharia e Sistemas LTDA',
      period: '06/2019 - 01/2021',
      location: 'Brazil',
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
  ]

  // Projects data with diagrams
  const projects = [
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
      technologies: ['Mendix', 'Azure DevOps', 'SonarCloud', 'Splunk']
    },
    {
      title: 'AMPM - Azure',
      year: '2023',
      description: 'This project implements automated CI/CD pipelines for Databricks, Azure Data Factory, and Azure Functions, enabling seamless integration, testing, and deployment of data and application workflows across Azure cloud services.',
      achievements: [
        'Automated the build, test, and deployment processes for Databricks notebooks, jobs, and pipelines using CI/CD best practices.',
        'Streamlined the promotion of Azure Data Factory pipelines across development, test, and production environments to ensure data integrity and minimize manual errors.',
        'Enabled continuous integration and delivery for Azure Functions, reducing deployment times and improving release reliability.',
        'Improved collaboration and code quality by leveraging version control and Infrastructure as Code for all pipeline components.'
      ],
      image: ampmAzureImg,
      technologies: ['Databricks', 'Azure Data Factory', 'Azure Functions', 'CI/CD']
    },
    {
      title: 'CERC - Google Cloud',
      year: '2023',
      description: 'This project establishes automated pipelines for building and publishing Python and Node.js libraries to Google Cloud Artifact Registry, streamlining dependency management and distribution within GCP environments.',
      achievements: [
        'Automated the creation and deployment of Python and Node.js packages to Artifact Registry.',
        'Integrated CI/CD pipelines to ensure consistent and repeatable library builds and releases.',
        'Improved collaboration and code quality by centralizing package storage and versioning for development teams.'
      ],
      image: cercGcpImg,
      technologies: ['Google Cloud', 'Artifact Registry', 'Python', 'Node.js']
    },
    {
      title: 'Arcelor - Azure',
      year: '2022',
      description: 'This project focuses on building automated pipelines for resource provisioning in the Azure cloud using Terraform, enabling consistent, repeatable, and scalable infrastructure management.',
      achievements: [
        'Automated deployment of Azure resources through CI/CD pipelines, reducing manual intervention.',
        'Ensured infrastructure consistency and repeatability using Infrastructure as Code (IaC) practices.',
        'Improved scalability and maintainability of cloud environments with modular Terraform configurations.',
        'Enhanced collaboration and version control by managing infrastructure definitions as code.',
        'Minimized deployment errors and accelerated environment setup, supporting rapid development and testing cycles.'
      ],
      image: arcelorAzureImg,
      technologies: ['Azure', 'Terraform', 'CI/CD', 'Infrastructure as Code']
    },
    {
      title: 'CI/CD Solution for Data Analysis - AWS',
      year: '2021',
      description: 'This project delivers an AWS-based architecture with CI/CD pipelines for rapid development and deployment of data analysis workflows using Apache Airflow, enabling automated, scalable, and efficient orchestration of data pipelines.',
      achievements: [
        'Automated the deployment and version control of Airflow DAGs via CI/CD, accelerating workflow development and reducing manual steps.',
        'Created architecture-based in AWS using terraform strategy.',
        'Implemented scalable data pipeline orchestration using Apache Airflow on AWS infrastructure.',
        'Established automated testing and validation processes for data workflows.',
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
  ]

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

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-4">
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
              Senior DevOps Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AWS | Azure | DevOps | Python | Terraform
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I am a quick learner and a dedicated team player, committed to working hard and collaborating effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-3"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-3"
              >
                Get In Touch
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-muted-foreground mb-6">
                  With over 8 years of experience in DevOps and cloud engineering, I specialize in designing and implementing scalable infrastructure solutions across AWS, Azure, and Google Cloud platforms.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  My expertise spans from automating CI/CD pipelines to managing complex microservices architectures, always focusing on reliability, security, and operational excellence.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Trofa, Portugal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>alexsanderson.vsantos@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Cloud className="text-primary" size={32} />
                      <div>
                        <h3 className="font-semibold">Cloud Architecture</h3>
                        <p className="text-sm text-muted-foreground">AWS, Azure, GCP</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Server className="text-primary" size={32} />
                      <div>
                        <h3 className="font-semibold">Infrastructure as Code</h3>
                        <p className="text-sm text-muted-foreground">Terraform, Ansible</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Code className="text-primary" size={32} />
                      <div>
                        <h3 className="font-semibold">CI/CD Automation</h3>
                        <p className="text-sm text-muted-foreground">Jenkins, Azure DevOps</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Technical Skills</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Work Experience</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Projects</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Database className="text-primary" size={24} />
                  Education
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
                  Certifications
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in discussing new opportunities and exciting projects.
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
              <Button variant="outline" asChild>
                <a 
                  href="https://alexsanderson-santos.github.io/devportfolio/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Current Portfolio
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

