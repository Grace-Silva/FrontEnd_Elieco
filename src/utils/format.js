export const formatCOP = (value) =>
  `COP $${new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(value)}`;
