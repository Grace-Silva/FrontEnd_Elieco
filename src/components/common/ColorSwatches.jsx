export default function ColorSwatches({ colors, size = 'h-6 w-6' }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Colores disponibles">
      {colors.map((c) => (
        <li key={c.nombre} title={c.nombre} className={`${size} border border-black/10`} style={{ backgroundColor: c.codigo }}>
          <span className="sr-only">{c.nombre}</span>
        </li>
      ))}
    </ul>
  );
}
