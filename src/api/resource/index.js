export const resource = ({ url, method, body }) => fetch(
    url,
    {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    }).then(res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
});
