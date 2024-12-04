type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface ResourceOptions<T> {
  url: string
  method: HttpMethod
  body?: T
  withCredentials?: boolean
  headers?: Record<string, string>
}

export const resource = <T>({
  url,
  method,
  body,
  withCredentials,
  headers,
}: ResourceOptions<T>) => {
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
