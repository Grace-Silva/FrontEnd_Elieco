import { site } from '../../config/site.js';
import { InstagramIcon, FacebookIcon } from './SocialIcons.jsx';

export default function SocialLinks({ className = '' }) {
  const items = [
    { href: site.social.instagram, label: 'Instagram', Icon: InstagramIcon },
    { href: site.social.facebook, label: 'Facebook', Icon: FacebookIcon },
    //{ href: site.social.tiktok, label: 'TikTok', Icon: TikTokIcon },
  ];
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="transition hover:opacity-70">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
