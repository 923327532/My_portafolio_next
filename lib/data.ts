import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'achanvear',
    title: 'Achanvear - Freelancer-to-Enterprise Platform',
    description: 'Plataforma full-stack que conecta freelancers con empresas para gestion de proyectos, incluyendo procesamiento de pagos, perfiles de usuario verificados y sistema de gestion de proyectos. Arquitectura de microservicios con Next.js, Spring Boot (Java), PostgreSQL, Docker. Integracion de payment gateways, JWT/OAuth auth, APIs RESTful, despliegue en AWS/Oracle Cloud.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Java', 'TypeScript', 'Next.js', 'React', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Oracle Cloud', 'JWT', 'OAuth', 'REST APIs'],
    demoUrl: 'https://achanvear-demo.vercel.app',
    githubUrl: 'https://github.com/923327532',
    featured: true,
  },
  {
    slug: 'tiyuy-real-estate',
    title: 'Tiyuy - Real Estate Marketplace',
    description: 'Marketplace inmobiliario tipo Airbnb/Zillow con mapas interactivos, filtros avanzados, listados de propiedades e integracion de IA. Liderazgo completo como Jefe de Desarrollo: backend Spring Boot, frontend Next.js, despliegue AWS.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Java', 'Spring Boot', 'Next.js', 'React', 'AWS', 'Docker', 'PostgreSQL', 'TypeScript', 'AI Integration', 'REST APIs'],
    demoUrl: 'https://tiyuy.com',
    githubUrl: 'https://github.com/923327532',
    featured: true,
  },
  {
    slug: 'world-cup-prediction',
    title: 'World Cup Prediction System',
    description: 'Sistema de prediccion para World Cup con datos en tiempo real y arquitectura de microservicios. APIs RESTful, optimizacion de queries e indexacion, autenticacion segura con JWT/OAuth/Firebase.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'Next.js', 'PostgreSQL', 'Docker', 'AWS', 'JWT', 'OAuth', 'WebSockets', 'REST APIs'],
    githubUrl: 'https://github.com/923327532',
    featured: true,
  },
  {
    slug: 'linguodate',
    title: 'LinguoDate - Dating App con Finanzas',
    description: 'Aplicativo de dating con analisis financiero integrado. Combina matching social con evaluacion de perfil financiero. Arquitectura full-stack con autenticacion robusta y despliegue cloud.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'Next.js', 'React', 'PostgreSQL', 'Docker', 'AWS', 'JWT', 'OAuth', 'Firebase'],
    githubUrl: 'https://github.com/923327532',
    featured: false,
  },
  {
    slug: 'aplicacion-bancaria',
    title: 'Aplicacion Bancaria - QR Payments',
    description: 'Aplicacion bancaria completa con Python, Flask, PyMongo, Bootstrap. Sistema de administracion de cuentas, transferencias, pagos QR y gestion de transacciones. Arquitectura diferenciada para usuarios y administradores.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    technologies: ['Python', 'Flask', 'MongoDB', 'Bootstrap', 'HTML', 'CSS', 'REST APIs'],
    githubUrl: 'https://github.com/923327532',
    featured: false,
  },
  {
    slug: 'chirumarketplace',
    title: 'ChiruMarkeplace - Marketplace Platform',
    description: 'Marketplace estilo eBay desarrollado con NestJS backend y React Native para mobile. Integracion de sistemas de pago y gestion de inventario.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    technologies: ['NestJS', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/923327532',
    featured: false,
  },
];

export const personalInfo = {
  name: 'Roberto Lopez Calle',
  title: 'Full Stack Developer & Software Engineer',
  description: 'Desarrollador full-stack y emprendedor peruano especializado en arquitectura de microservicios, APIs RESTful, bases de datos relacionales y despliegue cloud. Construyo productos escalables y bien estructurados alineados a objetivos reales de empresa.',
  email: 'roberolopezcalle072@gmail.com',
  phone: '923327532',
  github: 'https://github.com/923327532',
  linkedin: 'https://www.linkedin.com/in/l%C3%B3pez2003',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://lopezdev.fun',
  whatsapp: 'https://wa.link/0ftotp',
  avatar: '/logo.png',
  location: 'Lima, Peru',
  cvUrl: '/cv/LOPEZ_CALLE_ROBERTO_CV.pdf',
  fullBio: `Soy Roberto Carlos Lopez Calle, un desarrollador full-stack y emprendedor peruano con base en Lima, especializado en arquitectura de microservicios, APIs RESTful, bases de datos relacionales y despliegue en la nube.

Trabajo con Java, TypeScript, JavaScript, SQL, Python, Next.js, React, Spring Boot, PostgreSQL, Docker, AWS y Oracle Cloud. Mi enfoque combina ingenieria tecnica solida con vision de negocio: construyo productos escalables, bien estructurados y alineados a objetivos reales de empresa.

En los ultimos anos, he desarrollado multiples plataformas full-stack desde cero. Cree Achanvear, una plataforma de conexion entre freelancers y empresas con procesamiento de pagos, usuarios verificados y gestion de proyectos; Tiyuy, un marketplace de real estate tipo Airbnb/Zillow con mapas, filtros avanzados y listados de propiedades; y un sistema de prediccion para World Cup con datos en tiempo real y arquitectura de microservicios. Tambien estoy construyendo LinguoDate, un aplicativo de dating con analisis financiero integrado.

Cada proyecto incluye diseno de APIs, modelado de bases de datos, autenticacion segura (JWT, OAuth, Firebase), optimizacion de queries e indexacion, y despliegue en produccion.

Me especializo en backend y DevOps: diseno arquitecturas resilientes, implemento contenedorizacion con Docker, configuro orquestacion de servicios, y manejo infraestructura en AWS y Oracle Cloud. Trabajo con git y GitHub en flujos colaborativos, uso CI/CD en la practica, y tengo experiencia en integracion de gateways de pago, WebSockets para funcionalidades en tiempo real, y sistemas de autenticacion robustos.

Estoy en el proceso de formar mi carrera academica en el programa de Diseno y Desarrollo de Software en Tecsup, Peru, mientras simultaneamente gestiono el desarrollo de mi startup y varios proyectos tecnicos. Mi ritmo de trabajo incluye sesiones intensas de desarrollo, testing y debugging constante, y documentacion orientada a mantener sistemas estables y escalables.

Busco roles donde pueda aportar en arquitectura de software, backend avanzado, integracion de sistemas complejos y despliegue en cloud. Me interesa especialmente trabajar en productos que requieran escalabilidad, confiabilidad y alta disponibilidad, con equipos que valoran la calidad tecnica y la claridad en la comunicacion.`,
  experience: [
    {
      role: 'Jefe de Desarrollo Full Stack & Founder',
      company: 'Lopez Software Solutions - Tiyuy.com',
      period: 'Nov 2025 - Actualidad',
      description: 'Liderazgo y coordinacion tecnica del proyecto. Desarrollo backend con Java y Spring Boot. Desarrollo frontend con Next.js y React. Gestion de despliegues y servicios cloud en AWS. Integracion de inteligencia artificial y automatizacion. Uso de Docker, microservicios y metodologias agiles Scrum.',
    },
    {
      role: 'Backend Developer',
      company: 'ChiruMarkeplace.Sac',
      period: 'Ene 2026 - Mar 2026',
      description: 'Desarrollo backend con NestJS y desarrollo mobile con React Native para plataforma marketplace estilo eBay.',
    },
  ],
  education: [
    {
      degree: 'Diseno y Desarrollo de Software (5to ciclo)',
      institution: 'Tecsup',
      period: '2024 - Actualidad',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2026',
      image: 'https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonwebservices&logoColor=white',
    },
    {
      name: 'Ciberseguridad Cisco',
      issuer: 'Cisco Networking Academy',
      year: '2023-2024',
      image: 'https://img.shields.io/badge/Cisco-1BA0D7?style=for-the-badge&logo=cisco&logoColor=white',
    },
    {
      name: 'Ingles Britanico',
      issuer: 'British Institute',
      year: 'En Formacion',
      image: 'https://img.shields.io/badge/English-0052CC?style=for-the-badge&logo=googletranslate&logoColor=white',
    },
  ],
  skills: [
    { name: 'Java', category: 'backend', level: 95 },
    { name: 'Spring Boot', category: 'backend', level: 92 },
    { name: 'TypeScript', category: 'language', level: 88 },
    { name: 'JavaScript', category: 'language', level: 90 },
    { name: 'Next.js', category: 'frontend', level: 85 },
    { name: 'React', category: 'frontend', level: 85 },
    { name: 'NestJS', category: 'backend', level: 80 },
    { name: 'Node.js', category: 'backend', level: 82 },
    { name: 'Python', category: 'language', level: 78 },
    { name: 'SQL', category: 'language', level: 85 },
    { name: 'PostgreSQL', category: 'database', level: 88 },
    { name: 'MongoDB', category: 'database', level: 80 },
    { name: 'Docker', category: 'devops', level: 85 },
    { name: 'AWS', category: 'devops', level: 82 },
    { name: 'Oracle Cloud', category: 'devops', level: 78 },
    { name: 'Firebase', category: 'backend', level: 75 },
    { name: 'React Native', category: 'mobile', level: 75 },
    { name: 'Flask', category: 'backend', level: 72 },
    { name: 'JWT', category: 'security', level: 88 },
    { name: 'OAuth', category: 'security', level: 85 },
    { name: 'WebSockets', category: 'backend', level: 80 },
    { name: 'Git', category: 'tools', level: 92 },
    { name: 'CI/CD', category: 'devops', level: 78 },
    { name: 'Scrum', category: 'tools', level: 82 },
  ],
};

export const techLogos: Record<string, string> = {
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'NestJS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Oracle Cloud': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
  'OAuth': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg',
  'JWT': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg',
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
  'WebSockets': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Scrum': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  'AI Integration': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
};