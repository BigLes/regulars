/**
 * Created by Oleksandr Lisovyk on 17.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';
import constants    from '../../constants/styles';

export default StyleSheet.create({
    row: {
        ':first-child': {
            marginTop: '0'
        },
        height: '46px',
        marginTop: constants.topShift
    },
    puzzleContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sizeSelector: {
        position: 'absolute',
        bottom: 0
    }
});
