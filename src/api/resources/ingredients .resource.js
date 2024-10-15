import { YandexApi } from "../config";
import { resource } from "../resource";

export const getIngredients = () => resource({
    url :`${YandexApi}ingredients`,
    method: "GET"
}).then(res => res.data)
