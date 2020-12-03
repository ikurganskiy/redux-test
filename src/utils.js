
export const makeTitle = str => {
  const parts = str.replace('_', ' ')
  return parts.charAt(0).toUpperCase() + parts.slice(1);
}