export const getGlyphSrc = (ch) => {
  const upper = ch.toUpperCase();
  // Only A-Z and 0-9 are supported
  if (!/[A-Z0-9]/.test(upper)) return null;
  return `/images/${upper}.png`;
};