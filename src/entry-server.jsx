import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

/**
 * @param {string} url Pathname (e.g. `/tienda`)
 */
export function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]} initialIndex={0}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;
  return { html, helmet };
}
