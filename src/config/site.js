// Datos de la empresa centralizados. Edita aquí; se reflejan en todo el sitio.
// Valores marcados "POR DEFINIR" son pendientes de información real de ELIECO.
export const site = {
  name: 'ELIECO',
  tagline: 'Moda que inspira, naturaleza que respira',
  freeShippingText: 'Envío gratis a partir de $200.000',
  email: 'eliecomodasostenible@gmail.com',
  phoneDisplay: '+57 321 274 31 81',
  phoneTel: '+573212743181',
  address: 'Dirección física - por definir',
  social: {
    instagram: 'https://www.instagram.com/elieco26/',
    facebook: 'https://www.facebook.com/pages/ELIECO/167802563269012',
    tiktok: '#',
  },
};

export const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/tienda', label: 'Tienda' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

export const helpLinks = [
  'Envío y entrega',
  'Pagos',
  'Cambios y devoluciones',
  'Términos y condiciones',
  'Política de privacidad',
]; // TODO: crear páginas reales de políticas

// Contenido editable de "Procesos responsables" (acordeón de Contacto)
export const faqs = [
  {
    q: '¿Qué hace diferente a ELIECO de otras marcas de moda?',
    a: 'Diseñamos y confeccionamos prendas femeninas elegantes utilizando hilos ecológicos, fibras recicladas y materiales biodegradables.',
  },
  {
    q: '¿Cómo se seleccionan los materiales?',
    a: 'Priorizamos hilos ecológicos, botones y accesorios amigables con el ambiente, y proveedores que respeten su entorno.',
  },
  {
    q: '¿Cómo se desarrollan los procesos de producción?',
    a: 'Apoyamos a mujeres cabeza de familia y talentosas que por su edad ya no son contratadas en las empresas.',
  },
  {
    q: '¿Cuál es el compromiso de ELIECO con la sostenibilidad?',
    a: 'Usamos empaques en fibra de gelatina y bio cambrel, y etiquetas con semillas para incentivar la agricultura urbana.',
  },
];
