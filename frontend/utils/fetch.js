/**
 * Created by Oleksandr Lisovyk on 13.11.2016.
 */
'use strict';

export default function (url, options) {
    return fetch(url, options).then(res => {
        if (res.status !== 200) {
            return res.json().then(json => Promise.reject(json));
        }
        return res.json().then(json => Promise.resolve(json));
    })
}
