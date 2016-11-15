/**
 * Created by Oleksandr Lisovyk on 04.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';
import constants    from '../../constants/styles';

export default StyleSheet.create({
    userButton: {
        textAlign: 'right',
        paddingRight: '30px',
        boxSizing: 'border-box',
        position: 'relative'
    },
    active: {
        color: constants.blue
    },
    input: {
        maxWidth: '100%',
        boxSizing: 'border-box',
        border: `1px solid ${constants.lightGrey}`,
        color: constants.darkGrey
    },
    loginForm: {
        padding: '0px 4px 4px 3px',
        border: `1px solid ${constants.lightGrey}`,
        backgroundColor: constants.white,
        boxShadow: `0px 0px 5px ${constants.blue}`,
        width: '99px',
        right: '30px',
        left: 'auto',
        position: 'absolute'
    },
    button: {
        width: '100%',
        cursor: 'pointer'
    },
    good: {
        borderColor: constants.green
    },
    bad: {
        borderColor: constants.red
    },
    pointer: {
        cursor: 'pointer',
        display: 'block',
        marginTop: '4px',
        fontSize: 'large'
    }
});
