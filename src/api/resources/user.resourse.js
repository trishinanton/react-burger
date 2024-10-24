import { COOKIE_ACCESS_TOKEN, COOKIE_REFRESH_TOKEN } from "../../constants/cookies";
import { getCookie, setCookie } from "../../utils/cookies";
import { YandexApi } from "../config";
import { resource } from "../resource";

export const postRegister = body => resource({
    url: `${YandexApi}auth/register`,
    method: "POST",
    body
}).then(res => {
    setCookie(COOKIE_ACCESS_TOKEN, res.accessToken)
    setCookie(COOKIE_REFRESH_TOKEN, res.refreshToken)

    return res.user
})

export const postLogin = body => resource({
    url: `${YandexApi}auth/login`,
    method: "POST",
    body
}).then(res => {
    setCookie(COOKIE_ACCESS_TOKEN, res.accessToken)
    setCookie(COOKIE_REFRESH_TOKEN, res.refreshToken)

    return res.user
})

export const getUser = () => resource({
    url: `${YandexApi}auth/user`,
    method: "GET",
    headers: {
        authorization: getCookie(COOKIE_ACCESS_TOKEN)
    }
})
    .then(res => res.user)
    .catch(err => {
        if(err.message === "jwt expired") {
            return null
        }
        return null
    })
