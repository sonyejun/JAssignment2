const BASE_URL = 'http://localhost:4000/api/';

export async function fetchWithBaseUrl(path, options) {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url, options);
  return response.json();
}