/**
 * Created by Oleksandr Lisovyk on 04.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';
import constants    from '../../constants/styles';

export default StyleSheet.create({
    header: {
        fontSize: 'larger',
        borderBottom: `1px solid ${constants.lightGrey}`,
        height: '25px',
        color: constants.darkGrey,
        textAlign: 'center',
        userSelect: 'none',
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    banner: {
        width: '25%',
        float: 'left'
    },
    buttons: {
        width: '50%',
        float: 'left'
    },
    login: {
        width: '25%',
        float: 'right'
    }
});
