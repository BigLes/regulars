/**
 * Created by Oleksandr Lisovyk on 17.11.2016.
 */
'use strict';

import Dispatcher       from '../dispatcher/Dispatcher';
import Constants        from '../constants/Constants';
import PuzzleApi        from '../api/PuzzleApi';
import PopupActions     from '../actions/PopupActions';
import LoaderActions    from '../actions/LoaderActions';

const PuzzleActions = {

    get() {
        PuzzleApi.get()
            .then(res => Dispatcher.dispatch({actionType: Constants.LOAD_PUZZLES, res}))
            .catch(res => PopupActions.addBadMessage(res.error))
            .then(() => LoaderActions.turnOff());
    },

    getOne(id) {
        PuzzleApi.getOne(id)
            .then(res => Dispatcher.dispatch({actionType: Constants.LOAD_PUZZLE, res}))
            .catch(res => PopupActions.addBadMessage(res.error))
            .then(() => LoaderActions.turnOff());
    },

    remove(id) {
        PuzzleApi.remove(id)
            .then(res => Dispatcher.dispatch({actionType: Constants.REMOVE_PUZZLE, res}))
            .catch(res => PopupActions.addBadMessage(res.error))
            .then(() => LoaderActions.turnOff());
    },

    create(puzzle) {
        PuzzleApi.create(puzzle)
            .then(res => Dispatcher.dispatch({actionType: Constants.ADD_PUZZLE, res}))
            .catch(res => PopupActions.addBadMessage(res.error))
            .then(() => LoaderActions.turnOff());
    },

    update(puzzle) {
        PuzzleApi.update(puzzle)
            .then(res => Dispatcher.dispatch({actionType: Constants.EDIT_PUZZLE, res}))
            .catch(res => PopupActions.addBadMessage(res.error))
            .then(() => LoaderActions.turnOff());
    }
};

export default PuzzleActions;
