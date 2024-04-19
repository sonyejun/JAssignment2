const BASE_URL = 'https://j-assignment2-back.vercel.app/api/';

export async function fetchWithBaseUrl(path, options) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, options);
  return response.json();
}