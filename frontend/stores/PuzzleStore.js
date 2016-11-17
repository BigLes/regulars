/**
 * Created by Oleksandr Lisovyk on 17.11.2016.
 */
'use strict';

import Constants    from '../constants/Constants';
import Dispatcher   from '../dispatcher/Dispatcher';
import {Store}      from 'flux/utils';

let __puzzles = [];

class PuzzleStore extends Store {
    __onDispatch(action) {
        this.__emitChange();
    }

    getAll() {
        return __puzzles;
    }
}

export default new PuzzleStore(Dispatcher);
