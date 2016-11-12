/**
 * Created by Oleksandr Lisovyk on 01.11.2016.
 */
'use strict';

//TODO: move to config
const url = 'http://localhost:3003/api/users';

const UserApi = {

    activate: (user) => {
        //TODO: validate user properties
        const path = url;
        return fetch(path, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },

    update: (user) => {},

    remove: (id) => {}
};

export default UserApi;
