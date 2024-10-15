import { YandexApi } from "../config";
import { resource } from "../resource";

export const postOrder = ids => resource({
    url: `${YandexApi}orders`,
    method: "POST",
    body: {
        ingredients: ids
    }
}).then(res => res.order)
