/**
 * Created by Oleksandr Lisovyk on 06.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
    loader: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        userSelect: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-26px'
    },
    svg: {
        width: '100px',
        height: '100px',
        animationName: 'loader',
        animationDuration: '2s',
        animationIterationCount: 'infinite'
    }
});
