import { Link } from 'react-router-dom';

export default function Logo({ className = 'h-14 w-14', to = '/' }) {
  return (
    <Link to={to} aria-label="ELIECO - Inicio" className="shrink-0">
      <img src="/logo/logos.png" alt="ELIECO" className={className} />
    </Link>
  );
}
