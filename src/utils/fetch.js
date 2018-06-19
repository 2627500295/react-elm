export const METHOD = {
  DELETE: 'DELETE',
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT',
};

export function fetchJSON(url, method = METHOD.GET, body) {
  const requestBody = typeof body === 'object' ? JSON.stringify(body) : body;
  const opts = {
    credentials: 'same-origin',
    body: requestBody,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
  };

  return window.fetch(url, opts)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error(`${method} ${url} ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType.includes('application/json')) {
        throw new Error(`${method} ${url} Invalid response`);
      }

      return response.json();
    });
}
