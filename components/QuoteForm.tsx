'use client';

import { useState } from 'react';
import { personalInfo } from '@/lib/data';

interface IndustryOption {
  value: string;
  label: string;
  subindustries: { value: string; label: string }[];
}

const industries: IndustryOption[] = [
  {
    value: 'bienes-raices',
    label: 'Bienes Raices',
    subindustries: [
      { value: 'inmobiliaria', label: 'Inmobiliaria' },
      { value: 'alquileres', label: 'Alquileres' },
      { value: 'venta-lotes', label: 'Venta de Lotes' },
      { value: 'corretaje', label: 'Corretaje' },
      { value: 'admin-propiedades', label: 'Administracion de Propiedades' },
    ],
  },
  {
    value: 'restaurantes',
    label: 'Restaurantes y Comida',
    subindustries: [
      { value: 'restaurante', label: 'Restaurante' },
      { value: 'dark-kitchen', label: 'Dark Kitchen' },
      { value: 'cafeteria', label: 'Cafeteria' },
      { value: 'pasteleria', label: 'Pasteleria' },
      { value: 'delivery', label: 'Delivery' },
    ],
  },
  {
    value: 'salud',
    label: 'Salud y Clinicas',
    subindustries: [
      { value: 'clinica', label: 'Clinica' },
      { value: 'consultorio-dental', label: 'Consultorio Dental' },
      { value: 'laboratorio', label: 'Laboratorio' },
      { value: 'psicologia', label: 'Psicologia' },
      { value: 'farmacia', label: 'Farmacia' },
    ],
  },
  {
    value: 'educacion',
    label: 'Educacion',
    subindustries: [
      { value: 'academia', label: 'Academia' },
      { value: 'colegio', label: 'Colegio' },
      { value: 'instituto', label: 'Instituto' },
      { value: 'cursos-online', label: 'Cursos Online' },
      { value: 'tutorias', label: 'Tutorias' },
    ],
  },
  {
    value: 'retail',
    label: 'Retail y E-commerce',
    subindustries: [
      { value: 'tienda-online', label: 'Tienda Online' },
      { value: 'moda', label: 'Moda' },
      { value: 'tecnologia', label: 'Tecnologia' },
      { value: 'marketplace', label: 'Marketplace' },
      { value: 'ventas-catalogo', label: 'Ventas por Catalogo' },
    ],
  },
  {
    value: 'transporte',
    label: 'Transporte y Logistica',
    subindustries: [
      { value: 'courier', label: 'Courier' },
      { value: 'transporte-carga', label: 'Transporte de Carga' },
      { value: 'delivery-local', label: 'Delivery Local' },
      { value: 'almacen', label: 'Almacen' },
      { value: 'flota', label: 'Flota' },
    ],
  },
  {
    value: 'servicios',
    label: 'Servicios Profesionales',
    subindustries: [
      { value: 'estudio-contable', label: 'Estudio Contable' },
      { value: 'agencia-marketing', label: 'Agencia Marketing' },
      { value: 'consultoria', label: 'Consultoria' },
      { value: 'legal', label: 'Legal' },
      { value: 'software', label: 'Software' },
    ],
  },
  {
    value: 'turismo',
    label: 'Turismo y Hoteles',
    subindustries: [
      { value: 'hotel', label: 'Hotel' },
      { value: 'agencia-viajes', label: 'Agencia de Viajes' },
      { value: 'tours', label: 'Tours' },
      { value: 'hospedaje', label: 'Hospedaje' },
      { value: 'transporte-turistico', label: 'Transporte Turistico' },
    ],
  },
];

const projectTypes = [
  { value: 'landing', label: 'Landing Page' },
  { value: 'web-app', label: 'Aplicacion Web' },
  { value: 'ecommerce', label: 'E-commerce / Tienda Online' },
  { value: 'mobile-app', label: 'App Mobile (React Native)' },
  { value: 'api-backend', label: 'API / Backend' },
  { value: 'rediseno', label: 'Rediseno Web' },
  { value: 'plataforma', label: 'Plataforma Compleja / SaaS' },
  { value: 'otro', label: 'Otro' },
];

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  presupuesto: string;
  tipoProyecto: string;
  industria: string;
  subrubro: string;
  descripcion: string;
}

interface FormErrors {
  [key: string]: string;
}

const budgetOptions = [
  { value: '500-1500', label: 'S/ 500 - S/ 1,500' },
  { value: '1500-3000', label: 'S/ 1,500 - S/ 3,000' },
  { value: '3000-6000', label: 'S/ 3,000 - S/ 6,000' },
  { value: '6000-10000', label: 'S/ 6,000 - S/ 10,000' },
  { value: '10000+', label: 'S/ 10,000 a mas' },
  { value: 'a-conversar', label: 'Por conversar' },
];

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    presupuesto: '',
    tipoProyecto: '',
    industria: '',
    subrubro: '',
    descripcion: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedIndustry = industries.find((ind) => ind.value === formData.industria);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo invalido';
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'El telefono es obligatorio';
    if (!formData.presupuesto) newErrors.presupuesto = 'Selecciona un presupuesto';
    if (!formData.tipoProyecto) newErrors.tipoProyecto = 'Selecciona un tipo de proyecto';
    if (!formData.industria) {
      newErrors.industria = 'Selecciona una industria';
    } else if (!formData.subrubro) {
      newErrors.subrubro = 'Selecciona un subrubro';
    }
    if (!formData.descripcion.trim()) newErrors.descripcion = 'Describe tu proyecto';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const phoneRaw = personalInfo.phone.replace(/[^0-9]/g, '');
    const phone = `51${phoneRaw}`;

    const message = `Hola, quiero solicitar una cotizacion.
Nombre: ${formData.nombre}
Correo: ${formData.correo}
Telefono: ${formData.telefono}
Direccion: ${formData.direccion || 'No especificada'}
Presupuesto: ${budgetOptions.find((b) => b.value === formData.presupuesto)?.label || formData.presupuesto}
Tipo de proyecto: ${projectTypes.find((p) => p.value === formData.tipoProyecto)?.label || formData.tipoProyecto}
Industria: ${industries.find((i) => i.value === formData.industria)?.label || formData.industria}
Subrubro: ${selectedIndustry?.subindustries.find((s) => s.value === formData.subrubro)?.label || formData.subrubro}
Descripcion: ${formData.descripcion}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    // Reset subrubro when industria changes
    if (field === 'industria') {
      setFormData((prev) => ({ ...prev, industria: value, subrubro: '' }));
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white'} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm`;

  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';
  const errorClass = 'text-xs text-red-500 mt-1';

  return (
    <section id="cotiza" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Cotiza tu Proyecto
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cotiza <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Conmigo</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Llevemos tu negocio a internet con una solucion moderna, rapida y pensada para crecer.
              Cuentame lo que necesitas y te respondere con una propuesta clara y enfocada en resultados.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Nombre */}
              <div>
                <label className={labelClass}>
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ej: Juan Perez"
                  value={formData.nombre}
                  onChange={(e) => handleChange('nombre', e.target.value)}
                  className={inputClass('nombre')}
                />
                {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
              </div>

              {/* Correo */}
              <div>
                <label className={labelClass}>
                  Correo Electronico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Ej: juan@email.com"
                  value={formData.correo}
                  onChange={(e) => handleChange('correo', e.target.value)}
                  className={inputClass('correo')}
                />
                {errors.correo && <p className={errorClass}>{errors.correo}</p>}
              </div>

              {/* Telefono */}
              <div>
                <label className={labelClass}>
                  Telefono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Ej: 999 888 777"
                  value={formData.telefono}
                  onChange={(e) => handleChange('telefono', e.target.value)}
                  className={inputClass('telefono')}
                />
                {errors.telefono && <p className={errorClass}>{errors.telefono}</p>}
              </div>

              {/* Direccion */}
              <div>
                <label className={labelClass}>Direccion <span className="text-gray-400">(opcional)</span></label>
                <input
                  type="text"
                  placeholder="Ej: Av. Principal 123"
                  value={formData.direccion}
                  onChange={(e) => handleChange('direccion', e.target.value)}
                  className={inputClass('direccion')}
                />
              </div>

              {/* Presupuesto */}
              <div>
                <label className={labelClass}>
                  Presupuesto Estimado <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.presupuesto}
                  onChange={(e) => handleChange('presupuesto', e.target.value)}
                  className={inputClass('presupuesto')}
                >
                  <option value="">Selecciona un presupuesto</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.presupuesto && <p className={errorClass}>{errors.presupuesto}</p>}
              </div>

              {/* Tipo de Proyecto */}
              <div>
                <label className={labelClass}>
                  Tipo de Proyecto <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.tipoProyecto}
                  onChange={(e) => handleChange('tipoProyecto', e.target.value)}
                  className={inputClass('tipoProyecto')}
                >
                  <option value="">Selecciona un tipo</option>
                  {projectTypes.map((pt) => (
                    <option key={pt.value} value={pt.value}>{pt.label}</option>
                  ))}
                </select>
                {errors.tipoProyecto && <p className={errorClass}>{errors.tipoProyecto}</p>}
              </div>

              {/* Industria */}
              <div>
                <label className={labelClass}>
                  Industria Principal <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.industria}
                  onChange={(e) => handleChange('industria', e.target.value)}
                  className={inputClass('industria')}
                >
                  <option value="">Selecciona una industria</option>
                  {industries.map((ind) => (
                    <option key={ind.value} value={ind.value}>{ind.label}</option>
                  ))}
                </select>
                {errors.industria && <p className={errorClass}>{errors.industria}</p>}
              </div>

              {/* Subrubro */}
              <div>
                <label className={labelClass}>
                  Subrubro <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.subrubro}
                  onChange={(e) => handleChange('subrubro', e.target.value)}
                  className={inputClass('subrubro')}
                  disabled={!formData.industria}
                >
                  <option value="">
                    {formData.industria ? 'Selecciona un subrubro' : 'Primero selecciona una industria'}
                  </option>
                  {selectedIndustry?.subindustries.map((sub) => (
                    <option key={sub.value} value={sub.value}>{sub.label}</option>
                  ))}
                </select>
                {errors.subrubro && <p className={errorClass}>{errors.subrubro}</p>}
              </div>
            </div>

            {/* Descripcion */}
            <div>
              <label className={labelClass}>
                Otro / Describe tu proyecto <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Cuentame en detalle que necesitas, cuales son tus objetivos y cualquier informacion relevante..."
                value={formData.descripcion}
                onChange={(e) => handleChange('descripcion', e.target.value)}
                className={`${inputClass('descripcion')} resize-none`}
              />
              {errors.descripcion && <p className={errorClass}>{errors.descripcion}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  'Solicitar Cotizacion'
                )}
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">
                Recibiras una respuesta via WhatsApp en menos de 24 horas
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}