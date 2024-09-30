import { YandexApi } from "../config";
import { resource } from "../resource";

export const getIngredients = () => resource(`${YandexApi}ingredients`).then(res => res.data)
