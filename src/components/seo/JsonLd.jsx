import { Helmet } from 'react-helmet-async';

/**
 * @param {{ data: object | object[] }} props
 */
export default function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
}
