/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

import Dispatcher   from '../dispatcher/Dispatcher';
import Constants    from '../constants/constants';
import {Store} from 'flux/utils';

let __currentUser;

class UserStore extends Store {

    __onDispatch(action) {
        switch(action.actionType) {
            case Constants.LOGIN_DONE: {
                __currentUser = action.res
            } break;
        }
        this.__emitChange();
    }
}

export default UserStore;