'use strict';

/**
 * Keep the theme's BlogPosting image aligned with its Open Graph image.
 *
 * kratos-rebirth resolves `cover` correctly for og:image, but its JSON-LD
 * template concatenates the post path and cover path. Reusing og:image here
 * prevents invalid structured-data URLs without forking the whole theme.
 */
hexo.extend.filter.register('after_render:html', (html) => {
  if (typeof html !== 'string' || !html.includes('"@type":"BlogPosting"')) {
    return html;
  }

  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/);
  const schemaBlock = html.match(
    /<script type="application\/ld\+json">\s*(\{"@context":"https:\/\/schema\.org","@type":"BlogPosting"[\s\S]*?\})\s*<\/script>/
  );

  if (!ogImage || !schemaBlock) {
    return html;
  }

  try {
    const schema = JSON.parse(schemaBlock[1]);
    schema.image = ogImage[1];

    return html.replace(
      schemaBlock[0],
      `<script type="application/ld+json">\n    ${JSON.stringify(schema)}\n    </script>`
    );
  } catch {
    return html;
  }
});
