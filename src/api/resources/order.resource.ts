import { COOKIE_ACCESS_TOKEN } from '../../constants/cookies'
import { getCookie } from '../../utils/cookies'
import { YandexApi } from '../config'
import { resource } from '../resource'

export const postOrder = (ids: string[]) =>
  resource({
    url: `${YandexApi}orders`,
    method: 'POST',
    headers: {
      authorization: getCookie(COOKIE_ACCESS_TOKEN) || '',
    },
    body: {
      ingredients: ids,
    },
  }).then(res => res.order)
