import { CATEGORIES, SIZES, FILTER_COLORS } from '../../data/products.js';

function Group({ title, children }) {
  return (
    <fieldset className="mb-7">
      <legend className="mb-3 text-sm uppercase tracking-wide">{title}</legend>
      <div className="space-y-2">{children}</div>
    </fieldset>
  );
}

function Check({ label, checked, onChange, swatch }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm uppercase text-ink/80">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-3.5 w-3.5 accent-brand-dark" />
      {swatch && <span className="h-4 w-4 rounded-full border border-black/15" style={{ backgroundColor: swatch }} aria-hidden="true" />}
      {label}
    </label>
  );
}

export default function ProductFilters({ filters, onToggle, onClear, hasFilters }) {
  return (
    <div>
      <Group title="Prenda">
        {CATEGORIES.map((c) => (<Check key={c} label={c} checked={filters.prenda.includes(c)} onChange={() => onToggle('prenda', c)} />))}
      </Group>
      <Group title="Talla">
        {SIZES.map((s) => (<Check key={s} label={s} checked={filters.talla.includes(s)} onChange={() => onToggle('talla', s)} />))}
      </Group>
      <Group title="Color">
        {FILTER_COLORS.map((c) => (<Check key={c.nombre} label={c.nombre} swatch={c.codigo} checked={filters.color.includes(c.nombre)} onChange={() => onToggle('color', c.nombre)} />))}
      </Group>
      {hasFilters && (
        <button type="button" onClick={onClear} className="text-xs uppercase tracking-wide underline hover:text-brand">Limpiar filtros</button>
      )}
    </div>
  );
}
