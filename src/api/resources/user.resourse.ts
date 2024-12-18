import {
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN,
} from '../../constants/cookies'
import { getCookie, setCookie } from '../../utils/cookies'
import { YandexApi } from '../config'
import { resource } from '../resource'

export const postRegister = <T>(body: T) =>
  resource<T>({
    url: `${YandexApi}auth/register`,
    method: 'POST',
    body,
  }).then(res => {
    setCookie(COOKIE_ACCESS_TOKEN, res.accessToken)
    setCookie(COOKIE_REFRESH_TOKEN, res.refreshToken)

    return res.user
  })

export const postLogin = <T>(body: T) =>
  resource<T>({
    url: `${YandexApi}auth/login`,
    method: 'POST',
    body,
  }).then(res => {
    setCookie(COOKIE_ACCESS_TOKEN, res.accessToken)
    setCookie(COOKIE_REFRESH_TOKEN, res.refreshToken)

    return res.user
  })

export const postLogout = () =>
  resource({
    url: `${YandexApi}auth/logout`,
    method: 'POST',
    body: { token: getCookie(COOKIE_REFRESH_TOKEN) },
  }).then(res => {
    return res.message
  })

export const updateToken = () =>
  resource({
    url: `${YandexApi}auth/token`,
    method: 'POST',
    body: { token: getCookie(COOKIE_REFRESH_TOKEN) },
  })
    .then(res => {
      setCookie(COOKIE_ACCESS_TOKEN, res.accessToken)
      setCookie(COOKIE_REFRESH_TOKEN, res.refreshToken)
    })
    .catch(err => {
      throw err
    })

export const getUser = () =>
  resource({
    url: `${YandexApi}auth/user`,
    method: 'GET',
    headers: {
      authorization: getCookie(COOKIE_ACCESS_TOKEN) || '',
    },
  })
    .then(res => res.user)
    .catch(err => {
      if (err.message === 'jwt expired') {
        updateToken()
          .then(() => getUser())
          .catch(() => {
            return null
          })
      }
      throw err
    })

export const updateUser = <T>(body: T) =>
  resource<T>({
    url: `${YandexApi}auth/user`,
    method: 'PATCH',
    headers: {
      authorization: getCookie(COOKIE_ACCESS_TOKEN) || '',
    },
    body,
  })
    .then(res => res.user)
    .catch(err => {
      if (err.message === 'jwt expired') {
        updateToken()
          .then(() => updateUser(body))
          .catch(() => null)
      }
      return null
    })

export const postForgotPassword = (email: string) =>
  resource({
    url: `${YandexApi}password-reset`,
    method: 'POST',
    body: { email },
  }).then(res => res.message)

export const postResetPassword = <T>(body: T) =>
  resource<T>({
    url: `${YandexApi}password-reset/reset`,
    method: 'POST',
    body,
  }).then(res => res.message)
