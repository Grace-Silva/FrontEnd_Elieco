import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ELIECO` : 'ELIECO | Moda que inspira, naturaleza que respira';
  }, [title]);
}
