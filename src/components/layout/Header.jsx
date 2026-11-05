import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Logo from '../common/Logo.jsx';
import { navLinks } from '../../config/site.js';

const linkClass = ({ isActive }) =>
  `text-xs uppercase tracking-wide transition hover:text-brand ${isActive ? 'font-semibold text-brand-dark' : 'text-ink'}`;

// Componente a nivel de módulo: si se declarara dentro de Header se remontaría en cada tecla y el input perdería el foco.
function SearchBox({ id, q, setQ, onSearch }) {
  return (
    <form onSubmit={onSearch} role="search" className="flex w-full items-center border-b border-black/20 md:w-56">
      <label htmlFor={id} className="sr-only">Buscar prendas</label>
      <input id={id} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar prendas" className="w-full bg-transparent py-1.5 text-xs outline-none placeholder:text-muted" />
      <button type="submit" aria-label="Buscar" className="p-1.5 text-ink"><Search size={15} /></button>
    </form>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
  setOpen(false);
}, [pathname]);

  const onSearch = (e) => {
    e.preventDefault();
    const term = q.trim();
    navigate(term ? `/tienda?q=${encodeURIComponent(term)}` : '/tienda');
    setQ('');
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="hidden md:block"><SearchBox id="search-desktop" q={q} setQ={setQ} onSearch={onSearch} /></div>
        <button type="button" className="p-2 md:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/10 bg-white md:hidden">
          <nav aria-label="Principal móvil" className="container-x flex flex-col gap-4 py-5">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>
            ))}
            <SearchBox id="search-mobile" q={q} setQ={setQ} onSearch={onSearch} />
          </nav>
        </div>
      )}
    </header>
  );
}
