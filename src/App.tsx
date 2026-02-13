import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Code,
  Database,
  Server,
  Globe,
  Briefcase,
  GraduationCap,
  User,
  ChevronDown,
  Container,
  LibraryBig,
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'C#', level: 85, icon: Code },
    { name: 'Python', level: 85, icon: Code },
    { name: 'JavaScript', level: 80, icon: Code },
    { name: 'PHP', level: 70, icon: Code },

    { name: 'HTML/CSS', level: 90, icon: Globe },

    { name: 'React', level: 75, icon: LibraryBig },
    { name: 'django', level: 75, icon: LibraryBig },
    { name: 'Vue.js', level: 30, icon: LibraryBig },

    { name: 'SQLServer', level: 80, icon: Database },
    { name: 'MySQL', level: 75, icon: Database },

    { name: 'Docker', level: 65, icon: Container },
    { name: 'Git', level: 75, icon: Github },

  ];

  const experiences = [
    {
      title: "Desenvolvedor Jr",
      company: "Linx, ToTVS",
      period: "Atual",
      description: "Atuação no desenvolvimento e manutenção de aplicações utilizando Delphi, C# (.NET) e Angular/TypeScript. Responsável por corrigir bugs, implementar novas funcionalidades e apoiar na evolução contínua dos sistemas internos."
    },
    {
      title: "Analista de Implantação",
      company: "Linx, Stone Co",
      period: "2023-2025",
      description: " Realização de implantação, treinamento e capacitação dos sistemas de PDV e ERP para clientes do varejo e franquias, Ativação dos serviços relacionados aos produtos do segmento Food Service, Exemplo Linx Degust e Taste One, TEF, Pay Hub e Reshop."
    },
    {
      title: "Analista de Suporte Jr I e II",
      company: "Linx, Stone Co", 
      period: "2020-2023",
      description: "Suporte técnico especializado, resolução de problemas complexos e atendimento ao cliente."
    },
    {
      title: "Operador Telemarketing",
      company: "Paschoalotto",
      period: "2019-2020",
      description: "Atendimento ao cliente e vendas por telefone."
    }
  ];

  const education = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Unifatecie",
      period: "2022–2024",
      description: "Curso superior de tecnologia com foco em desenvolvimento de software, análise de sistemas e soluções computacionais."
    },
    {
      title: "Técnico em Informática",
      institution: "Senac",
      period: "2019–2021",
      description: "Formação técnica abrangendo manutenção de hardware, redes, sistemas operacionais e desenvolvimento de software."
    },
    {
      title: "Cursos Recentes de Programação",
      institution: "Curso em Video, DIO.ME, Udemy",
      period: "2024–2025",
      description: "Participação em diversos cursos de curta duração voltados à programação e desenvolvimento de sistemas, com conteúdos como: Python, django, Vue.js e node.js bancos de dados relacionais (MySQL e SQL Server), além de práticas ágeis com Scrum e Kanban."
    },
    {
      title: "Conjunto de Cursos em Desenvolvimento Web – Senac",
      institution: "Senac",
      period: "2019–2020",
      description: "Participação em diversos cursos na instituição Senac, incluindo PHP, MySQL, JavaScript, jQuery, HTML e CSS, com foco na criação de sites e aplicações web."
    }
  ];

  const projects = [
    {
      title: "SubMAX - Plataforma de Gestão para Personal Trainers",
      description: "SubMax é uma aplicação web desenvolvida em Python 3.12 e Django 5.2, projetada para simplificar o gerenciamento diário de personal trainers, oferecendo cadastro de alunos, registro de avaliações físicas e agenda de eventos.",
      technologies: ["Python", "Django", "MySql", "Bootstrap"],
      github: "https://github.com/pehaalmeida",
      demo: "https://github.com/pehaalmeida"
    },
    {
      title: "Painel De Senha Vue.js",
      description: "Sistema responsivo feito com Vue 3, Pinia e Tailwind CSS para exibição e controle de senhas em ambientes de atendimento. Destaque: chamada de senhas por voz para mais acessibilidade.",
      technologies: ["Vue 3", "Vue Router", "Tailwind CSS", "Vite", "Node.js"],
      github: "https://github.com/pehaalmeida/Painel-de-senha-vue.js",
      demo: "https://github.com/pehaalmeida/Painel-de-senha-vue.js"
    },
    {
      title: "SsE-ContExped",
      description: "Sistema para controle de saída de cargas e pedidos na expedição de caminhões. Registra entradas, saídas e dados essenciais para o setor.",
      technologies: ["C#", ".NET Framework", "Sql SERVER"],
      github: "https://github.com/pehaalmeida/SsE-ContExped",
      demo: "#"
    },
    {
      title: "AUTOMONI - Monitor de IP",
      description: "Este sistema foi desenvolvido para monitorar um endereço IP específico dentro da rede local. Ele verifica continuamente a conectividade com o IP informado e registra qualquer falha detectada. Além disso, o sistema exibe na tela a quantidade total de erros ocorridos durante a execução.",
      technologies: ["Batchfile"],
      github: "https://github.com/pehaalmeida/AutoMoni",
      demo: "https://github.com/pehaalmeida/AutoMoni"
    },
    {
      title: "Sistema de Gerenciamento de Produtos - RESTAPI",
      description: "Aplicação full stack com Vue 3 e .NET Core para cadastro de produtos, com upload de imagem, integração com API externa (Fake Store) e interface responsiva.",
      technologies: ["ASP.NET CORE", "C#", "Entity Framework", "SQL Server", "Vue 3", "Vite", "JavaScript", "TailwindCSS", "Swagger"],
      github: "https://github.com/pehaalmeida/avaliacao-vue-dotnet",
      demo: "https://github.com/pehaalmeida/avaliacao-vue-dotnet"
    },
    {
      title: "MWP - Messenger WhatsApp processor",
      description: "MWP é um sistema de processamento de mensagens do WhatsApp, desenvolvido em Python, que utiliza a API (EVO e META) do WhatsApp para receber e processar mensagens. O sistema é projetado para ser flexível e escalável, permitindo a integração com diferentes serviços e plataformas por meio de uma API REST.",
      technologies: ["Python", "React", "Rest API", "Docker"],
      github: "https://github.com/pehaalmeida",
      demo: "https://github.com/pehaalmeida"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Augusto Almeida
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {item === 'home' ? 'Início' : 
                   item === 'about' ? 'Sobre' :
                   item === 'skills' ? 'Habilidades' :
                   item === 'experience' ? 'Experiência' :
                   item === 'education' ? 'Educação' :
                   item === 'projects' ? 'Projetos' :
                   'Contato'}
                </button>
              ))}
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Desenvolvedor
                </span>
                <br />
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  FullStack
                </span>
              </h1>
              <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Especialista em C#, PHP, Python e JavaScript. Transformo ideias em soluções digitais inovadoras.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Ver Projetos
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Currículo-Pedro Almeida.pdf"
                  download
                  className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:border-gray-500' 
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src={`${import.meta.env.BASE_URL}foto.png`} 
                  alt="Pedro Almeida"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Desenvolvedor Apaixonado por Tecnologia</h3>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Sou Desenvolvedor Júnior na Linx Sistemas/Totvs, atuando no desenvolvimento e manutenção de aplicações voltadas para soluções corporativas. Minha trajetória na tecnologia começou com a curiosidade e evoluiu para uma paixão por transformar desafios em soluções eficientes por meio do código.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Atualmente trabalho com desenvolvimento utilizando Delphi, C# (.NET) e Angular/TypeScript, contribuindo ativamente na correção de bugs, implementação de novas funcionalidades e na evolução contínua dos sistemas internos. Busco constantemente aprimorar minhas habilidades técnicas e aplicar boas práticas de desenvolvimento para entregar soluções robustas, organizadas e de alto desempenho.
                <br/>
                <br/>
                Estou sempre aberto a aprender novas tecnologias e colaborar em projetos que gerem impacto positivo e inovação.
              </p>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Bauru, SP – Brasil</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <Code className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-bold mb-2">Tecnólogo</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Formação em Análise e Desenvolvimento de Sistemas, com foco em arquitetura de software e melhores práticas de codificação.</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <Briefcase className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-bold mb-2">Projetos</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Vivência prática em projetos reais, atuando desde o levantamento de requisitos até a entrega final ao cliente.</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <GraduationCap className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="font-bold mb-2">Estudos</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Comprometido com o aprendizado contínuo e a atualização constante nas tecnologias mais modernas do mercado.</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <User className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="font-bold mb-2">Metodologias Ágeis</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Experiência sólida com metodologias ágeis como Scrum e Kanban, aplicadas em ambientes colaborativos e focados em resultados.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <skill.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">{skill.name}</h3>
                <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? 'bg-gray-700' : ''}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-500 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experiência Profissional</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                    {exp.period}
                  </span>
                </div>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Educação</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
                  <span className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{edu.institution}</p>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Estou sempre aberto a novas oportunidades e projetos interessantes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.a
              href="mailto:contato.pedroalmeida@hotmail.com"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>contato.pedroalmeida@hotmail.com</p>
            </motion.a>

            <motion.a
              href="tel:+5514998899162"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Telefone</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>(14) 99889-9162</p>
            </motion.a>

            <motion.a
              href="http://linkedin.com/in/pehaalmeida/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <Linkedin className="w-8 h-8 text-blue-700 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>peh.aalmeida</p>
            </motion.a>

            <motion.a
              href="https://github.com/peh.aalmeida"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <Github className="w-8 h-8 text-gray-800 dark:text-white mx-auto mb-4 group-hover:scale-110 transition-transform" stroke="#e5e7eb"/>
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>peh.aalmeida</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Pedro Augusto Almeida Rodrigues. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;