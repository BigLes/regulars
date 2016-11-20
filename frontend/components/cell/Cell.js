/**
 * Created by Oleksandr Lisovyk on 20.11.2016.
 */
'use strict';

import React        from 'react';
import style        from './style'
import {css}        from 'aphrodite';
import classNames   from 'classnames';
import values       from '../../constants/values';
import styles       from '../../constants/styles';

const Cell = React.createClass({
    render() {
        return (<div className={classNames(css(style.cell))}>
            <svg className={classNames(css(style.svg))} width={values.cellWidth} height={values.cellHeight}>
                <path
                    fill="rgba(255, 255, 255, 1)"
                    strokeWidth="1"
                    stroke={styles.darkGrey}
                    d="M-2.561393846768158,22.991604205605096 L7.108249224979847,3.4207518186039096 L32.89396206395974,3.4207518186039096 L42.56360210718487,22.991604205605096 L32.89396206395974,42.562456592606885 L7.108249224979847,42.562456592606885 L-2.561393846768158,22.991604205605096 z"
                    transform="rotate(90 20.001249313354492, 23.054101943969727)"/>
            </svg>
            <input className={classNames(css(style.input))} type="text" maxLength="1" />
        </div>);
    }
});

export default Cell;
