import { Link } from 'react-router-dom';
import Logo from '../common/Logo.jsx';
import SocialLinks from '../common/SocialLinks.jsx';
import { site, helpLinks } from '../../config/site.js';

const heading = 'mb-5 font-serif text-sm font-semibold uppercase text-white';
const item = 'text-xs uppercase tracking-wide text-white/90 hover:text-white';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.2fr_1.4fr]">
        <div>
          <Logo className="h-20 w-20 rounded-full bg-white/90 p-0.5" />
          <p className="mt-5 max-w-[14rem] font-serif text-sm font-semibold uppercase leading-snug">
            Moda que inspira, naturaleza que respira
          </p>
        </div>
        <div>
          <h2 className={heading}>Enlaces</h2>
          <ul className="space-y-4">
            <li><Link className={item} to="/">Inicio</Link></li>
            <li><Link className={item} to="/tienda">Tienda</Link></li>
            <li><Link className={item} to="/nosotros">Nosotros</Link></li>
            <li><Link className={item} to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h2 className={heading}>Legales</h2>
          <ul className="space-y-4">
            {helpLinks.map((l) => (<li key={l}><span className={item}>{l}</span></li>))}
          </ul>
        </div>
        <div>
          <h2 className={heading}>Contacto</h2>
          <ul className="space-y-4">
            <li><a className={`${item} break-all`} href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className={item} href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></li>
            <li><span className={item}>{site.address}</span></li>
          </ul>
          <SocialLinks className="mt-6" />
        </div>
      </div>
    </footer>
  );
}
