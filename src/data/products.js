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
  gris: { nombre: 'Gris', codigo: '#6E6E6E' },
  negro: { nombre: 'Negro', codigo: '#1C1C1C' },
  rosa: { nombre: 'Rosa', codigo: '#FFC0CB' },
  rosa_plata: { nombre: 'Rosa Plata', codigo: '#C4AEAD'},
  beige: { nombre: 'Beige', codigo: '#EDE8D0'},
  camel: {nombre: 'Camel', codigo: '#C19A6B'},
  cafe: {nombre: 'Cafe', codigo: '#6F4E37'},
  dorado: {nombre: 'Dorado', codigo: '#EFB810'},
  plata: {nombre: 'Plata', codigo: '#C0C0C0'},
};

const IMG = {
  vestido: '/images/productos/vestido-negro-dorado.jpg',
  vestido2: '/images/productos/vestido-negro-dorado-2.jpg',
  vestido3: '/images/productos/vestido-rosa-perla.jpg',
  vestido4: '/images/productos/vestido-jardinera-1.png',
  vestido5: '/images/productos/vestido-jardinera-2.png',
  vestido6: '/images/productos/vestido-flecos.png',
  vestido7: '/images/productos/vestido-princesa.png',
  conjunto1: '/images/productos/conjunto-girasol.png',
  conjunto2: '/images/productos/conjunto-verano.png',
  conjunto3: '/images/productos/conjunto-elegance.png',
  conjunto4: '/images/productos/conjunto-casual.png',
  conjunto5: '/images/productos/conjunto-casual-2.png',
  pantalon1: '/images/productos/pantalon-cuadros.png',
  pantalon2: '/images/productos/pantalon-cuadros-2.png',
  blusa: '/images/productos/blusa-clavel.png',
  blusa2: '/images/productos/blusa-fleco-blanca.png',
  blusa3: '/images/productos/blusa-fleco-negra.png',
  blusa4: '/images/productos/blusa-sencilla-cuello-V-negra.png',
  blusa5: '/images/productos/blusa-sencilla-cuello-V-rosa.png',
  blusa6: '/images/productos/blusa-huecos.png',
  chaleco: '/images/productos/chaleco.png',
  chaleco2: '/images/productos/chaleco-negro.png',
  sueter: '/images/productos/sueter-serena.png',
  blazer: '/images/productos/blazer-lina.png',
  blazer2: '/images/productos/blazer-lina-2.png',
  falda: '/images/productos/falda-flecos.png',
};

const impacto = (botellas, litros = 0) => ({ botellas, litros, amor: 100 });

export const products = [
  { id: 'vestido-largo-sirena', nombre: 'Vestido largo sirena', categoria: 'Vestidos', coleccion: 'Colección 2026',
    descripcion: 'Vestido tejido de punto,   ajustado al cuerpo,  con caida perfecta, convinación de negro y dorado que aporta luz y elegancia.',
    precio: 350000, imagen: IMG.vestido, imagenes: [IMG.vestido, IMG.vestido2], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.negro], destacado: true, impacto: impacto(80) },
  { id: 'vestido-rosa-perla', nombre: 'Vestido Rosa perla', categoria: 'Vestidos', coleccion: 'Colección 2026',
    descripcion: 'Vestido tejido sin mangas en tono rosado claro, cuello en V con borde ondulado, textura acanalada y largo a la rodilla. Incluye cinturón del mismo tejido con hebilla redonda brillante, que marca la cintura.',
    precio: 150000, imagen: IMG.vestido3, imagenes: [IMG.vestido3], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.rosa], destacado: true, impacto: impacto(100) },
  { id: 'vestido-jardinera', nombre: 'Vestido Jardinera', categoria: 'Vestidos', coleccion: 'Colección 2026',
    descripcion: 'Vestido juvenil tejido de punto,  imitacion de jardinera, elegante y casual para todo tipo de ocación.',
    precio: 180000, imagen: IMG.vestido4, imagenes: [IMG.vestido4, IMG.vestido5], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.rosa_plata], destacado: true, impacto: impacto(100) },
  { id: 'vestido-flecos', nombre: 'Vestido Flecos', categoria: 'Vestidos', coleccion: 'Colección 2026',
    descripcion: 'Vestido tejido de punto, elegante y sexy que demarca la silueta femenina sin perder el estilo.Ideal para eventos especiales.',
    precio: 350000, imagen: IMG.vestido6, imagenes: [IMG.vestido6], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.negro], destacado: true, impacto: impacto(100) },
  { id: 'vestido-princesa', nombre: 'Vestido Princesa', categoria: 'Vestidos', coleccion: 'Colección 2026',
    descripcion: 'Vestido tejido de punto en tonos neutros. Juvenil apto para diferentes climas, usalo con zapato elegante o sientete comoda con tennis y luce siempre perfecta.',
    precio: 210000, imagen: IMG.vestido7, imagenes: [IMG.vestido7], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.beige, COLORS.rosa, COLORS.negro, COLORS.verde], destacado: true, impacto: impacto(100) },
  { id: 'conjunto-girasol', nombre: 'Conjunto Girasol', categoria: 'Conjuntos', coleccion: 'Colección 2026',
    descripcion: 'Conjunto en tejido de punto. Material fresco y cómodo para toda época, estilo muy femenino y divertido, blusa de manga larga, cuello redondo, textura acanalada y detalle calado en el ruedo, corte corto que deja ver la cintura; y falda recta a la rodilla con flecos en el ruedo.',
    precio: 150000, imagen: IMG.conjunto1, imagenes: [IMG.conjunto1], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.negro, COLORS.verde], destacado: true, impacto: impacto(100) },
  { id: 'conjunto-verano', nombre: 'Conjunto Verano', categoria: 'Conjuntos', coleccion: 'Colección 2026',
    descripcion: 'Conjunto tejido de punto, minifalda de borde a mano, top apta para clima calido evocando serenidad y movimiento.',
    precio: 120000, imagen: IMG.conjunto2, imagenes: [IMG.conjunto2], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.verde, COLORS.negro, COLORS.beige, COLORS.rosa], destacado: true, impacto: impacto(90) },
  { id: 'conjunto-elegance', nombre: 'Conjunto Elegance', categoria: 'Conjuntos', coleccion: 'Colección 2026',
    descripcion: 'Pantalón a rayas con bolsillo lateral pretina con resorte trasero, comodo, elegante o casual según lo prefieras, combinado con blusa tejida con bordes a mano, sin mangas, con flor tejida en el pecho.',
    precio: 200000, imagen: IMG.conjunto3, imagenes: [IMG.conjunto3], tallas: ['6', '8', '10', '12', '14', '16'],
    colores: [COLORS.camel, COLORS.verde], destacado: true, impacto: impacto(110) },
  { id: 'conjunto-casual', nombre: 'Conjunto Casual', categoria: 'Conjuntos', coleccion: 'Colección 2026',
    descripcion: 'Conjunto falda corta recta y chaleco abierto sin botones frontales, dos botones en la parte de atrás en adornos, comodo, fresco y juvenil para usar casual o elegante según sea la ocasión.',
    precio: 180000, imagen: IMG.conjunto5, imagenes: [IMG.conjunto5, IMG.conjunto4], tallas: ['8', '10', '12', '14', '16'],
    colores: [COLORS.cafe], destacado: true, impacto: impacto(90) },
  { id: 'pantalon-cuadros', nombre: 'Pantalon Cuadros', categoria: 'Pantalones', coleccion: 'Colección 2026',
    descripcion: 'Pantalón ancho de tiro alto en tela a cuadros blanco y negro, bota recta y amplia. Corte que alarga la figura y da movimiento, ideal para un look relajado y elegante.',
    precio: 120000, imagen: IMG.pantalon1, imagenes: [IMG.pantalon1, IMG.pantalon2], tallas: ['8', '10', '12', '14', '16'],
    colores: [COLORS.negro], destacado: true, impacto: impacto(90) },
  { id: 'blusa-clavel', nombre: 'Blusa Clavel', categoria: 'Blusas', coleccion: 'Colección 2026',
    descripcion: 'Top tejido sin mangas, cuello en V, en tejido jaspeado  con franja horizontal crema en el pecho. Corte ajustado y corto, con terminación ondulada en el ruedo artesanal. Juvenil y versátil, se ve muy bien con jean, falda o pantalón.',
    precio: 90000, imagen: IMG.blusa, imagenes: [IMG.blusa], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.rosa, COLORS.negro, COLORS.verde], destacado: true, impacto: impacto(45) },
  { id: 'blusa-fleco', nombre: 'Blusa Fleco', categoria: 'Blusas', coleccion: 'Colección Invierno 2026',
    descripcion: 'Blusa tejida de punto, manga corta, cuello en V o camisero, textura acanalada. Detalle de flecos largos en el ruedo, que le dan movimiento. Corte entallado.  Prenda con carácter, ideal para un look moderno y con estilo.',
    precio: 95000, imagen: IMG.blusa2, imagenes: [IMG.blusa2, IMG.blusa3], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.negro, COLORS.beige, COLORS.rosa, COLORS.verde, COLORS.plata, COLORS.dorado], destacado: false, impacto: impacto(41) },
  { id: 'blusa-sencilla-cuello-V', nombre: 'Blusa Sencilla Cuello en V', categoria: 'Blusas', coleccion: 'Colección 2026',
    descripcion: 'Blusa tejida en cuello V, sencillas, versatiles, que se ajustan a cualquier cuerpo y combinan con todo tipo de prenda, prenda fresca y juvenil.',
    precio: 95000, imagen: IMG.blusa4, imagenes: [IMG.blusa4, IMG.blusa5], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.negro, COLORS.beige, COLORS.rosa, COLORS.verde, COLORS.plata, COLORS.dorado], destacado: false, impacto: impacto(42) },
  { id: 'blusa-huecos', nombre: 'Blusa Huecos', categoria: 'Blusas', coleccion: 'Colección 2026',
    descripcion: 'Blusas tejidas sin mangas con cuello redondo o V decoradas con huecos en la parte frontal, comodas, lindas y versatiles para cualquier ocasión.',
    precio: 95000, imagen: IMG.blusa6, imagenes: [IMG.blusa6], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.negro, COLORS.beige, COLORS.rosa, COLORS.verde, COLORS.plata, COLORS.dorado], destacado: true, impacto: impacto(40) },
  { id: 'chaleco', nombre: 'Chaleco', categoria: 'Blazers y chaquetas', coleccion: 'Colección 2026',
    descripcion: 'Chalecos tejidos en diferentes tonos, elegantes, frescos y comodos. Usalos con blusa debajo o solos',
    precio: 100000, imagen: IMG.chaleco, imagenes: [IMG.chaleco, IMG.chaleco2], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.negro, COLORS.beige, COLORS.rosa, COLORS.plata, COLORS.dorado], destacado: true, impacto: impacto(90) },
  { id: 'sueter-serena', nombre: 'Sueter Serena', categoria: 'Blazers y chaquetas', coleccion: 'Colección 2026',
    descripcion: 'Tejida de punto acanalado, manga larga y cuello redondo. Ajuste entallado que marca la cintura, con detalle calado en la parte inferior que le da un toque delicado. Ideal para combinar con falda o pantalón en tonos neutros.',
    precio: 150000, imagen: IMG.sueter, imagenes: [IMG.sueter], tallas: ['S', 'M', 'L', 'XL'],
    colores: [COLORS.beige, COLORS.negro, COLORS.verde, COLORS.plata, COLORS.negro, COLORS.dorado], destacado: false, impacto: impacto(85) },
  { id: 'blazer-lina', nombre: 'Blazer Lina', categoria: 'Blazers y chaquetas', coleccion: 'Colección 2026',
    descripcion: 'Cárdigan tejido abierto en tono gris jaspeado, manga larga 3/4, cuello alto y sin botones. Detalle de volantes fruncidos en todo el frente, que le dan elegancia y movimiento. Corte entallado a la cintura y largo a la cadera, con ruedo acanalado. Prenda versátil para usar abierta sobre blusa, vestido o top, ideal para un look sofisticado y abrigado.',
    precio: 220000, imagen: IMG.blazer, imagenes: [IMG.blazer, IMG.blazer2], tallas: ['S', 'M', 'L'],
    colores: [COLORS.gris, COLORS.negro], destacado: false, impacto: impacto(95) },
  { id: 'falda-flecos', nombre: 'Falda Midicon Flecos', categoria: 'Faldas', coleccion: 'Colección 2026',
    descripcion: 'Falda midi de tejido en color negro con flecos largos en capas, pretina ancha lisa y textura brillante sutil. Corte recto a la rodilla, con mucho movimiento gracias a los flecos. para un look elegante y romántico. Ideal para ocasiones especiales, cenas y eventos, también se puede usar con un top negro o dorado para un contraste más llamativo.',
    precio: 230000, imagen: IMG.falda, imagenes: [IMG.falda], tallas: ['XS', 'S', 'M', 'L'],
    colores: [COLORS.negro], destacado: false, impacto: impacto(88) },
];

export const CATEGORIES = [...new Set(products.map((p) => p.categoria))];
export const SIZES = ['S', 'M', 'L', 'XL', '6', '8', '10', '12', '14', '16'];
export const FILTER_COLORS = Object.values(COLORS);

// Capa de acceso (hoy local; mañana puede apuntar a una API)
export const getProducts = () => products;
export const getProductById = (id) => products.find((p) => p.id === id);
export const getFeatured = (n = 3) => products.filter((p) => p.destacado).slice(0, n);
export const getRelated = (id, n = 4) => products.filter((p) => p.id !== id).slice(0, n);
