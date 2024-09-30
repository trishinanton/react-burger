export const resource = (url) => fetch(url).then(data => data.json());
