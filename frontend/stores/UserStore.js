/**
 * Created by Oleksandr Lisovyk on 1.11.2016.
 */
'use strict';

import Dispatcher   from '../dispatcher/Dispatcher';
import Constants    from '../constants/Constants';
import {Store} from 'flux/utils';

let __currentUser;

class UserStore extends Store {

    __onDispatch(action) {
        switch(action.actionType) {
            case Constants.LOGIN_DONE: {
                __currentUser = action.res;
                this.__emitChange();
            } break;
        }
    }

    getCurrentUser() {
        return __currentUser;
    }
}

export default new UserStore(Dispatcher);
