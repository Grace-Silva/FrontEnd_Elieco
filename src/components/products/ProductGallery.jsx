import { useState } from 'react';

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0);
  const current = images[Math.min(active, images.length - 1)];
  return (
    <div>
      <div className="aspect-[3/4] overflow-hidden bg-brand-cream">
        <img
          src={current}
          alt={`${alt}, vista principal`}
          width={600}
          height={800}
          className="h-full w-full object-contain"
        />
      </div>
      {images.length > 1 && (
        <ul className="mt-3 flex gap-2">
          {images.map((src, i) => (
            <li key={src + i}>
              <button type="button" onClick={() => setActive(i)} aria-label={`Ver imagen ${i + 1}`} aria-current={i === active}
                className={`h-20 w-16 overflow-hidden border-2 ${i === active ? 'border-brand-dark' : 'border-transparent'}`}>
                <img src={src} alt="" width={64} height={80} aria-hidden className="h-full w-full object-contain" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
