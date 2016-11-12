/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

import UserApi          from '../api/UserApi';
import Constants        from '../constants/Constants';
import Dispatcher       from '../dispatcher/Dispatcher';
import LoaderActions    from './LoaderActions';

const UserActions = {

    login(user) {
        //TODO: add error handling
        UserApi.activate(user)
            .then(res => {
                Dispatcher.dispatch({actionType: Constants.LOGIN_DONE, res});
                //TODO: create separate component for fetching and move turnOff to one place
                LoaderActions.turnOff();
            })
    },

    save() {},

    remove(id) {}
};

export default UserActions;
