import http from './request'

// APPID: 79461679
// APPSecret: Q8cJGQFt 
const APPID = '79461679'
const appsecret = 'Q8cJGQFt'
export function getNowWeather() {
    return http({
        url: "http://www.tianqiapi.com/api?version=v9&appid=" + APPID + "&appsecret=" + appsecret,
        method: 'get'
    })
}