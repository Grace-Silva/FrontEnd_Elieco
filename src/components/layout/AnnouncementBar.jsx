import { site } from '../../config/site.js';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-dark py-1.5 text-center text-sm text-white sm:text-base">{site.freeShippingText}</div>
  );
}
