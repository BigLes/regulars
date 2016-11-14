/**
 * Created by Oleksandr Lisovyk on 14.11.2016.
 */
'use strict';

import Constants    from '../constants/Constants';
import Dispatcher   from '../dispatcher/Dispatcher';
import {Store}      from 'flux/utils';

let __messages = [];

class LoaderStore extends Store {

    __onDispatch(action) {
        switch(action.actionType) {
            case Constants.ADD_MESSAGE: {
                __messages.push(action.res);
            } break;
            case Constants.REMOVE_MESSAGE: {
                __messages.shift();
            } break;
        }
        this.__emitChange();
    }

    getMessages() {
        return __messages;
    }
}

export default new LoaderStore(Dispatcher);
