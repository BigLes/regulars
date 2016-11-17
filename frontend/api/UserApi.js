/**
 * Created by Oleksandr Lisovyk on 01.11.2016.
 */
'use strict';

import fetch    from '../utils/fetch';
import config   from 'config';

const url = config.apiUrl + 'users/';

const UserApi = {

    activate: (user) => {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    },

    update: (user) => {},

    remove: (id) => {}
};

export default UserApi;
