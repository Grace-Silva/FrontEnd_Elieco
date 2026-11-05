import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border border-black/10 bg-white">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif text-sm font-semibold uppercase sm:text-base"
              >
                {item.q}
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </h3>
            {isOpen && (
              <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} className="spaced px-5 pb-5 text-ink/80">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
