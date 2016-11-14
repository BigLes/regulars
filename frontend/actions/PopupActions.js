/**
 * Created by Oleksandr Lisovyk on 14.11.2016.
 */
'use strict';

import Dispatcher   from '../dispatcher/Dispatcher';
import Constants    from '../constants/Constants';

const PopupActions = {

    addGoodMessage(text) {
        this.__addMessage({good: true, text});
    },

    addBadMessage(text) {
        this.__addMessage({good: false, text});
    },

    __addMessage(message) {
        Dispatcher.dispatch({actionType: Constants.ADD_MESSAGE, res: message});
        setTimeout(this.removeOldestMessage, 5000);
    },

    removeOldestMessage() {
        Dispatcher.dispatch({actionType: Constants.REMOVE_MESSAGE});
    }
};

export default PopupActions;
