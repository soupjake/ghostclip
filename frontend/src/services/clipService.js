export async function createClip(content) {
  const res = await fetch(import.meta.env.VITE_API_URL + '/clip', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content })
  });
  return res.json();
}
