/**
 * Created by Oleksandr Lisovyk on 06.11.2016.
 */
'use strict';

import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
    loader: {
        display: 'flex',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        userSelect: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 4,
        position: 'absolute',
        top: 0
    },
    svg: {
        width: '100px',
        height: '100px',
        animationName: 'loader',
        animationDuration: '2s',
        animationIterationCount: 'infinite'
    }
});
