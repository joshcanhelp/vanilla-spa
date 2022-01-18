export const fetchView = async (name) => {
  const fetchedHtml = await fetch(`../../views/${name}.html`);
  return await fetchedHtml.text();
}