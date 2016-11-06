/**
 * Created by Oleksandr Lisovyk on 06.11.2016.
 */
'use strict';

import Dispatcher   from '../dispatcher/Dispatcher';
import Constants    from '../constants/Constants';

const LoaderActions = {

    turnOn() {
        Dispatcher.dispatch({actionType: Constants.LOADER_ON});
    },

    turnOff() {
        Dispatcher.dispatch({actionType: Constants.LOADER_OFF});
    }
};

export default LoaderActions;
