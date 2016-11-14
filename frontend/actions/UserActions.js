/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

import UserApi          from '../api/UserApi';
import Constants        from '../constants/Constants';
import Dispatcher       from '../dispatcher/Dispatcher';
import PopupActions     from '../actions/PopupActions';

const UserActions = {

    login(user) {
        UserApi.activate(user)
            .then(res => Dispatcher.dispatch({actionType: Constants.LOGIN_DONE, res}))
            .catch(res => PopupActions.addBadMessage(res.error));
    },

    save() {},

    remove(id) {}
};

export default UserActions;
