/**
 * Created by Oleksandr Lisovyk on 20.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';
import constants    from '../../constants/styles';

export default StyleSheet.create({
    svg: {
        width: constants.cellWidth,
        height: constants.cellHeight,
        position: 'absolute',
        zIndex: 1
    },
    input: {
        zIndex: 2,
        position: 'absolute',
        height: '33px',
        width: '28px',
        backgroundColor: 'transparent',
        border: 0,
        top: '6px',
        left: '6px',
        padding: 0,
        textAlign: 'center',
        fontSize: '40px'
    },
    cell: {
        position: 'relative',
        width: '40px',
        height: '46px',
        display: 'inline-block',
        marginRight: '-1px'
    }
});
