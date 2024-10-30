export const resource = ({ url, method, body, withCredentials, headers }) => {
  return fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      ...headers,
    },
    credentials: withCredentials ? 'include' : 'same-origin',
  }).then(res => {
    if (res.ok) {
      return res.json()
    }

    return res.json().then(errorData => {
      throw errorData
    })
  })
}
