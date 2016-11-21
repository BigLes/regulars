/**
 * Created by Oleksandr Lisovyk on 17.11.2016.
 */
'use strict';

import React        from 'react';
import style        from './style'
import {css}        from 'aphrodite';
import classNames   from 'classnames';
import shortid      from 'shortid';
import Cell         from '../cell/Cell';
import values       from '../../constants/values';

class Puzzle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 5,
            middleRow: 2
        };
        this.drawRow = this.__drawRow.bind(this);
    }

    render() {
        return (<div className={classNames(css(style.puzzleContainer))}>{this.__renderPuzzle.call(this)}</div>);
    }

    __renderPuzzle() {
        let rows = [];
        const specStyle = {
            height: (this.state.size * (values.cellHeight - values.topShift) + values.topShift) + 'px',
            width: (this.state.size * values.cellWidth - this.state.size + 1) + 'px'
        };
        for (let i = 0; i < this.state.size; i++) {
            rows.push(this.drawRow(i));
        }
        return (<div style={specStyle}>{rows}</div>);
    }

    __onSizeChange(e) {
        const size = e.target.value;
        this.setState(Object.assign(this.state, {size, middleRow: Math.floor(size / 2)}));
    }

    __drawRow(index) {
        let cells = [];
        const size = this.state.size - Math.abs(index - this.state.middleRow);
        const specStyle = {
            marginLeft: (Math.abs(index - this.state.middleRow) * (values.cellWidth / 2)) + 'px'
        };

        for (let i = 0; i < size; i++) {
            //TODO: make proper y, z values
            //TODO: add proper key - it should not be generated automaticaly
            cells.push(<Cell key={shortid.generate()} onChange={value => this.__onCellChange(value, index, 0, 0)}/>);
        }

        return (<div style={specStyle} className={classNames(css(style.row))} key={shortid.generate()}>{cells}</div>);
    }


    __onCellChange(value, x, y, z) {
        console.log(x, y, z, value);
    }
}

export default Puzzle;
