/**
 * Created by Oleksandr Lisovyk on 06.11.2016.
 */
'use strict';

import Constants    from '../constants/Constants';
import Dispatcher   from '../dispatcher/Dispatcher';
import {Store}      from 'flux/utils';

let __display = 'none !important';

class LoaderStore extends Store {

    __onDispatch(action) {
        switch(action.actionType) {
            case Constants.LOADER_ON: {
                __display = 'flex !important'
            } break;
            case Constants.LOADER_OFF: {
                __display = 'none !important';
            } break;
        }
        this.__emitChange();
    }

    getValue() {
        return __display;
    }
}

export default new LoaderStore(Dispatcher);
