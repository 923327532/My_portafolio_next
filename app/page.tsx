import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative w-28 h-28 mx-auto mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="rounded-full object-cover border-4 border-white shadow-xl relative"
                priority
                sizes="112px"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              {personalInfo.title}
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Ver Proyectos
              </Link>
              <Link
                href="/about"
                className="bg-white text-gray-700 px-8 py-3.5 rounded-xl font-semibold border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Sobre Mi
              </Link>
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: `${personalInfo.experience.length}+`, label: 'Experiencias' },
              { value: `${projects.length}+`, label: 'Proyectos' },
              { value: `${personalInfo.skills.length}+`, label: 'Tecnologias' },
              { value: 'AWS', label: 'Cloud Certified' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificaciones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certificaciones que respaldan mis competencias en infraestructura cloud, redes y comunicacion internacional.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {personalInfo.certifications.map((cert, index) => (
              <div key={index} className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white p-3 shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{cert.issuer}</p>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Cloud */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stack Tecnologico</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologias con las que trabajo diariamente para construir soluciones escalables.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {personalInfo.skills.sort((a, b) => b.level - a.level).map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-600 hover:shadow-sm transition-all"
            >
              {skill.name}
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proyectos que reflejan mi experiencia en desarrollo full-stack, arquitectura de microservicios y soluciones cloud.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            Ver todos los proyectos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}