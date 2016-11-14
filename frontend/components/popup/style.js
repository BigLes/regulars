/**
 * Created by Oleksandr Lisovyk on 14.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';
import constants    from '../../constants/styles';

export default StyleSheet.create({
    popupContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    message: {
        float: 'right',
        padding: '10px',
        borderRadius: '5px'
    },
    good: {
        boxShadow: `0 0 5px ${constants.green}`
    },
    bad: {
        boxShadow: `0 0 5px ${constants.red}`
    }
});
