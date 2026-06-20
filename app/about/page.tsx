import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre Mi',
  description: `Conoce mas sobre ${personalInfo.name}, ${personalInfo.title}`,
};

export default function AboutPage() {
  const skillCategories = [
    { name: 'Backend', category: 'backend', gradient: 'from-blue-500 to-blue-600' },
    { name: 'Frontend', category: 'frontend', gradient: 'from-purple-500 to-purple-600' },
    { name: 'Lenguajes', category: 'language', gradient: 'from-green-500 to-green-600' },
    { name: 'Bases de Datos', category: 'database', gradient: 'from-orange-500 to-orange-600' },
    { name: 'DevOps & Cloud', category: 'devops', gradient: 'from-red-500 to-red-600' },
    { name: 'Seguridad', category: 'security', gradient: 'from-yellow-500 to-yellow-600' },
    { name: 'Mobile', category: 'mobile', gradient: 'from-teal-500 to-teal-600' },
    { name: 'Herramientas', category: 'tools', gradient: 'from-indigo-500 to-indigo-600' },
  ];

  const bioParagraphs = personalInfo.fullBio.split('\n\n');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Sobre Mi
              </h1>
              <p className="text-lg text-gray-600">
                Conoce mi trayectoria, experiencia y habilidades tecnicas
              </p>
            </div>
            <div className="md:ml-auto flex-shrink-0">
              <a
                href={personalInfo.cvUrl}
                download
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile & Full Bio */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 text-center md:text-left space-y-1">
                <p className="text-sm text-gray-500">{personalInfo.location}</p>
                <p className="text-sm text-gray-500">{personalInfo.email}</p>
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar CV PDF
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hola, soy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Experiencia Laboral
            </h2>
            <div className="space-y-6">
              {personalInfo.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 bg-blue-600 rounded-full border-4 border-white shadow" />
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                      <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-500 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              Educacion
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-500">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-blue-600 font-medium mt-1 md:mt-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section with Logos */}
          <section id="certificaciones" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              Certificaciones
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {personalInfo.certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 p-2 flex items-center justify-center">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight">{cert.name}</h3>
                      <p className="text-xs text-gray-500">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section with Progress Bars */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              Habilidades Tecnicas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((cat) => {
                const skills = personalInfo.skills.filter((s) => s.category === cat.category);
                if (skills.length === 0) return null;
                return (
                  <div key={cat.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className={`font-bold text-gray-900 mb-4 inline-block bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent text-lg`}>
                      {cat.name}
                    </h3>
                    <div className="space-y-3">
                      {skills.sort((a, b) => b.level - a.level).map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                            <span className="text-xs text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}