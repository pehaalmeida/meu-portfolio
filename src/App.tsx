import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ExternalLink
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
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
    { name: 'C#', level: 90, icon: Code },
    { name: 'PHP', level: 85, icon: Server },
    { name: 'JavaScript', level: 80, icon: Globe },
    { name: 'React', level: 75, icon: Code },
    { name: 'HTML/CSS', level: 90, icon: Globe },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'MySQL', level: 80, icon: Database },
    { name: 'Git', level: 75, icon: Code }
  ];

  const experiences = [
    {
      title: "Desenvolvedor e Analista de Implantação Jr",
      company: "Linx, Stone Co",
      period: "Atual",
      description: "Desenvolvimento de soluções em C#, PHP e JavaScript. Análise e implantação de sistemas para clientes."
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
    },
    {
      title: "Auxiliar Administrativo",
      company: "Pires Materiais de Construções",
      period: "2018-2019",
      description: "Atividades administrativas e atendimento ao cliente."
    }
  ];

  const education = [
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Unifatecie",
      period: "2021-2023",
      description: "Tecnólogo focado em desenvolvimento de software e análise de sistemas."
    },
    {
      title: "Técnico em Informática",
      institution: "Senac",
      period: "2019-2020",
      description: "Formação técnica em informática com foco em hardware e software."
    },
    {
      title: "Curso PHP",
      institution: "Senac",
      period: "2020",
      description: "Curso especializado em desenvolvimento web com PHP."
    },
    {
      title: "Curso JavaScript e jQuery",
      institution: "Senac", 
      period: "2019",
      description: "Desenvolvimento front-end com JavaScript e jQuery."
    }
  ];

  const projects = [
    {
      title: "Sistema de Gestão Empresarial",
      description: "Sistema completo desenvolvido em C# para gestão de empresas, incluindo controle de estoque, vendas e relatórios.",
      technologies: ["C#", ".NET", "SQL Server", "WPF"],
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Plataforma de e-commerce responsiva desenvolvida com PHP e JavaScript, com painel administrativo completo.",
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
      github: "#",
      demo: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para análise de dados com gráficos dinâmicos e relatórios em tempo real.",
      technologies: ["React", "JavaScript", "Chart.js", "API REST"],
      github: "#",
      demo: "#"
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
              Pedro Almeida
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
                  Full Stack
                </span>
              </h1>
              <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Especialista em C#, PHP e JavaScript. Transformo ideias em soluções digitais inovadoras.
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
                  href="/Currículo - Pedro Almeida (2).pdf"
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
                  src="/Design sem nome (8).png"
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
                Sou um desenvolvedor full stack com mais de 4 anos de experiência, especializado em criar soluções robustas e escaláveis. 
                Minha jornada na tecnologia começou com curiosidade e evoluiu para uma paixão por resolver problemas complexos através do código.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Atualmente trabalho na Linx/Stone Co, onde desenvolvo sistemas empresariais e lidero projetos de implantação. 
                Tenho experiência sólida em C#, PHP, JavaScript e bancos de dados, sempre buscando as melhores práticas e tecnologias mais recentes.
              </p>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Paranavaí, PR - Brasil</span>
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
                <h4 className="font-bold mb-2">4+ Anos</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Experiência em Desenvolvimento</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <Briefcase className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-bold mb-2">50+ Projetos</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Projetos Concluídos</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <GraduationCap className="w-8 h-8 text-green-600 mb-4" />
                <h4 className="font-bold mb-2">Tecnólogo</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Análise e Desenvolvimento</p>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
                <User className="w-8 h-8 text-pink-600 mb-4" />
                <h4 className="font-bold mb-2">100+ Clientes</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Atendidos com Sucesso</p>
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
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
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
              href="mailto:pedro@email.com"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>pedro@email.com</p>
            </motion.a>

            <motion.a
              href="tel:+5544999999999"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Telefone</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>(44) 99999-9999</p>
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
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>pehaalmeida</p>
            </motion.a>

            <motion.a
              href="https://github.com/pedro"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300 text-center group`}
            >
              <Github className="w-8 h-8 text-gray-800 dark:text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>@pedro</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2024 Pedro Augusto Almeida Rodrigues. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;