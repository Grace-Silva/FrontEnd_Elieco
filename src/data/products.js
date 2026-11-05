// ============================================================================
// CATÁLOGO DE DEMOSTRACIÓN
// Los productos y fotografías son de ejemplo (recortadas de las vistas de
// referencia). Para producción:
//   1. Guarda las fotos reales en /public/images/productos/
//   2. Reemplaza/añade objetos en este arreglo con la misma estructura.
// Cuando exista un backend de productos, solo hay que sustituir las funciones
// de acceso de más abajo (getProducts / getProductById) por llamadas a la API.
// ============================================================================

export const COLORS = {
  verde: { nombre: 'Verde', codigo: '#0F3320' },
  vino: { nombre: 'Vino', codigo: '#7A2A2A' },
  gris: { nombre: 'Gris', codigo: '#6E6E6E' },
  negro: { nombre: 'Negro', codigo: '#1C1C1C' },
};

const IMG = {
  vestido: '/images/productos/vestido-negro-dorado.jpg',
  vestido2: '/images/productos/vestido-negro-dorado-2.jpg',
  blusa: '/images/productos/blusa-negra-flecos.jpg',
  chaqueta: '/images/productos/chaqueta-gris.jpg',
};

const impacto = (botellas, litros = 0) => ({ botellas, litros, amor: 100 });

export const products = [
  { id: 'vestido-sirena-dorado', nombre: 'Vestido sirena dorado', categoria: 'Vestidos', coleccion: 'Colección Invierno 2026',
    descripcion: 'Vestido largo de corte sirena con detalles dorados. Tejido con fibras recicladas, ideal para ocasiones especiales.',
    precio: 289000, imagen: IMG.vestido, imagenes: [IMG.vestido, IMG.vestido2], tallas: ['S', 'M', 'L'],
    colores: [COLORS.verde, COLORS.vino, COLORS.negro], destacado: true, impacto: impacto(120) },
  { id: 'blusa-flecos-negra', nombre: 'Blusa de flecos', categoria: 'Blusas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Blusa tejida con hilos ecológicos y acabado en flecos. Fresca, ligera y elegante.',
    precio: 98000, imagen: IMG.blusa, imagenes: [IMG.blusa], tallas: ['S', 'M'],
    colores: [COLORS.verde, COLORS.vino, COLORS.negro], destacado: true, impacto: impacto(45) },
  { id: 'chaqueta-volantes-gris', nombre: 'Chaqueta de volantes', categoria: 'Chaquetas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Chaqueta tejida con volantes en el cuello. Hilos ecológicos, suave al tacto y de gran calidez.',
    precio: 185000, imagen: IMG.chaqueta, imagenes: [IMG.chaqueta], tallas: ['S', 'M', 'L'],
    colores: [COLORS.vino, COLORS.verde, COLORS.gris], destacado: true, impacto: impacto(90) },
  { id: 'vestido-noche-verde', nombre: 'Vestido de noche verde', categoria: 'Vestidos', coleccion: 'Colección Invierno 2026',
    descripcion: 'Vestido de noche con silueta estilizada y materiales sostenibles. Pieza de demostración.',
    precio: 265000, imagen: IMG.vestido2, imagenes: [IMG.vestido2, IMG.vestido], tallas: ['M', 'L'],
    colores: [COLORS.verde, COLORS.negro], destacado: false, impacto: impacto(110) },
  { id: 'blusa-esencial-vino', nombre: 'Blusa esencial', categoria: 'Blusas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Blusa básica de tejido suave, pensada para combinar con todo. Pieza de demostración.',
    precio: 89000, imagen: IMG.blusa, imagenes: [IMG.blusa], tallas: ['S', 'M', 'L'],
    colores: [COLORS.vino, COLORS.gris], destacado: false, impacto: impacto(40) },
  { id: 'chaqueta-cardigan-verde', nombre: 'Cárdigan natural', categoria: 'Chaquetas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Cárdigan largo tejido a mano con fibras recicladas. Pieza de demostración.',
    precio: 175000, imagen: IMG.chaqueta, imagenes: [IMG.chaqueta], tallas: ['M', 'L'],
    colores: [COLORS.verde, COLORS.gris], destacado: false, impacto: impacto(85) },
  { id: 'vestido-elegante-vino', nombre: 'Vestido elegante', categoria: 'Vestidos', coleccion: 'Colección Invierno 2026',
    descripcion: 'Vestido elegante de línea sirena con detalles artesanales. Pieza de demostración.',
    precio: 240000, imagen: IMG.vestido, imagenes: [IMG.vestido], tallas: ['S', 'M'],
    colores: [COLORS.vino, COLORS.negro], destacado: false, impacto: impacto(100) },
  { id: 'blusa-fresca-verde', nombre: 'Blusa fresca', categoria: 'Blusas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Blusa de punto con caída fluida y flecos delicados. Pieza de demostración.',
    precio: 95000, imagen: IMG.blusa, imagenes: [IMG.blusa], tallas: ['S', 'L'],
    colores: [COLORS.verde, COLORS.negro], destacado: false, impacto: impacto(42) },
  { id: 'chaqueta-gris-clasica', nombre: 'Chaqueta clásica', categoria: 'Chaquetas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Chaqueta de tejido grueso, silueta clásica y acabados cuidados. Pieza de demostración.',
    precio: 198000, imagen: IMG.chaqueta, imagenes: [IMG.chaqueta], tallas: ['S', 'M', 'L'],
    colores: [COLORS.gris, COLORS.negro], destacado: false, impacto: impacto(95) },
  { id: 'vestido-gala-negro', nombre: 'Vestido de gala', categoria: 'Vestidos', coleccion: 'Colección Invierno 2026',
    descripcion: 'Vestido de gala con panel dorado. Pieza de demostración.',
    precio: 310000, imagen: IMG.vestido2, imagenes: [IMG.vestido2], tallas: ['M', 'L'],
    colores: [COLORS.negro, COLORS.vino], destacado: false, impacto: impacto(130) },
  { id: 'blusa-tejida-gris', nombre: 'Blusa tejida', categoria: 'Blusas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Blusa tejida con hilos ecológicos. Pieza de demostración.',
    precio: 92000, imagen: IMG.blusa, imagenes: [IMG.blusa], tallas: ['S', 'M', 'L'],
    colores: [COLORS.gris, COLORS.verde], destacado: false, impacto: impacto(41) },
  { id: 'chaqueta-bosque', nombre: 'Chaqueta bosque', categoria: 'Chaquetas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Chaqueta con volantes en tono verde bosque. Pieza de demostración.',
    precio: 192000, imagen: IMG.chaqueta, imagenes: [IMG.chaqueta], tallas: ['M'],
    colores: [COLORS.verde, COLORS.vino], destacado: false, impacto: impacto(88) },
];

export const CATEGORIES = [...new Set(products.map((p) => p.categoria))];
export const SIZES = ['S', 'M', 'L'];
export const FILTER_COLORS = Object.values(COLORS);

// Capa de acceso (hoy local; mañana puede apuntar a una API)
export const getProducts = () => products;
export const getProductById = (id) => products.find((p) => p.id === id);
export const getFeatured = (n = 3) => products.filter((p) => p.destacado).slice(0, n);
export const getRelated = (id, n = 4) => products.filter((p) => p.id !== id).slice(0, n);
