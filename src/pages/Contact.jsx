import { Mail, Phone } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm.jsx';
import Accordion from '../components/common/Accordion.jsx';
import SocialLinks from '../components/common/SocialLinks.jsx';
import { WhatsAppIcon } from '../components/common/SocialIcons.jsx';
import { site, faqs } from '../config/site.js';
import { buildWhatsappLink } from '../services/whatsappService.js';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const h = 'font-serif text-sm font-semibold uppercase';
const row = 'mt-2 flex items-center gap-3 text-xs tracking-wide hover:text-brand';

export default function Contact() {
  useDocumentTitle('Contacto');
  const wa = buildWhatsappLink('Hola, quiero más información sobre ELIECO.');
  return (
    <>
      <section className="container-x py-10 sm:py-14">
        <p className="eyebrow">Contacto</p>
        <h1 className="title-xl mt-2">¿Tienes alguna duda, pedido o idea maravillosa?</h1>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.9fr]">
          <div className="space-y-7 px-1 lg:px-5">
            <div><h2 className={h}>Correo</h2><a href={`mailto:${site.email}`} className={`${row} break-all uppercase`}><Mail size={15} />{site.email}</a></div>
            <div>
              <h2 className={h}>WhatsApp</h2>
              {wa ? (
                <a href={wa} target="_blank" rel="noopener noreferrer" className={row}><WhatsAppIcon />{site.phoneDisplay}</a>
              ) : (
                <p className={`${row} cursor-default hover:text-inherit`}><WhatsAppIcon />{site.phoneDisplay}</p>
              )}
            </div>
            <div><h2 className={h}>Celular</h2><a href={`tel:${site.phoneTel}`} className={row}><Phone size={15} />{site.phoneDisplay}</a></div>
            <SocialLinks />
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="container-x pb-20 pt-6">
        <p className="eyebrow">Sostenibilidad</p>
        <h2 className="title-xl mt-2">Procesos responsables</h2>
        <div className="mt-8 lg:max-w-[88%]"><Accordion items={faqs} /></div>
      </section>
    </>
  );
}
