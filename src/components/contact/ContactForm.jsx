import { useRef, useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendContact, validateContactForm } from '../../services/contactService.js';

const EMPTY = { nombre: '', email: '', telefono: '', mensaje: '', website: '' };

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');
  const sendingRef = useRef(false); // evita envíos duplicados aunque se haga doble clic muy rápido

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sendingRef.current) return;

    const found = validateContactForm(values);
    if (Object.keys(found).length) {
      setErrors(found);
      setStatus('error');
      setFeedback('Revisa los campos marcados antes de enviar.');
      return;
    }

    sendingRef.current = true;
    setStatus('sending');
    setFeedback('');
    setErrors({});
    try {
      const res = await sendContact(values);
      setStatus('success');
      setFeedback(res.message || 'Mensaje enviado correctamente.');
      setValues(EMPTY); // solo se limpia tras confirmación real del backend
    } catch (err) {
      const fieldErrors = {};
      (err.errors || []).forEach(({ field, message }) => { if (field && !fieldErrors[field]) fieldErrors[field] = message; });
      setErrors(fieldErrors); // los datos escritos se conservan
      setStatus('error');
      setFeedback(
        err.status === 429
          ? 'Has enviado demasiadas solicitudes. Intenta nuevamente en unos minutos.'
          : err.message
      );
    } finally {
      sendingRef.current = false;
    }
  };

  const field = 'block w-full border-0 border-b border-black/25 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-brand-dark';
  const label = 'block font-serif text-sm font-semibold uppercase';
  const err = (n) => errors[n] && <p id={`${n}-error`} role="alert" className="mt-1 text-xs text-red-700">{errors[n]}</p>;
  const a11y = (n) => ({ 'aria-invalid': Boolean(errors[n]), 'aria-describedby': errors[n] ? `${n}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="border border-black/15 bg-white p-6 sm:p-8" aria-busy={status === 'sending'}>
      {status === 'success' && (
        <div role="status" className="mb-6 flex items-start gap-3 border border-brand/30 bg-brand-light p-4 text-sm text-brand-dark">
          <CheckCircle2 className="mt-0.5 shrink-0" size={18} />
          <div><strong className="font-serif">¡Gracias por escribirnos!</strong><p>{feedback} Te responderemos muy pronto.</p></div>
        </div>
      )}
      {status === 'error' && feedback && (
        <div role="alert" className="mb-6 flex items-start gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 shrink-0" size={18} /><p>{feedback}</p>
        </div>
      )}

      {/* Campo trampa: oculto con CSS (no type="hidden"), fuera del orden de tabulación */}
      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">No completar este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="nombre" className={label}>Nombre completo</label>
          <input id="nombre" name="nombre" autoComplete="name" maxLength={100} value={values.nombre} onChange={onChange} className={field} {...a11y('nombre')} />
          {err('nombre')}
        </div>
        <div>
          <label htmlFor="email" className={label}>Correo electrónico</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} className={field} {...a11y('email')} />
          {err('email')}
        </div>
        <div>
          <label htmlFor="telefono" className={label}>Celular/Teléfono <span className="font-sans text-[10px] normal-case text-muted">(opcional)</span></label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" value={values.telefono} onChange={onChange} className={field} {...a11y('telefono')} />
          {err('telefono')}
        </div>
        <div>
          <label htmlFor="mensaje" className={label}>¿Qué quieres decirnos?</label>
          <textarea id="mensaje" name="mensaje" rows={3} maxLength={2000} value={values.mensaje} onChange={onChange} className={`${field} resize-y`} {...a11y('mensaje')} />
          {err('mensaje')}
        </div>
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary mt-8">
        {status === 'sending' ? (<><Loader2 size={16} className="animate-spin" /> Enviando…</>) : (<>Enviar <Send size={15} /></>)}
      </button>
    </form>
  );
}
