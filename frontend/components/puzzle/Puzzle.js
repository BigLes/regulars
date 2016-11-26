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
            edit: true,
            size: 5,
            middleRow: 2
        };
        this.drawRow = this.__renderRow.bind(this);
    }

    render() {
        return (<div className={classNames(css(style.puzzleContainer))}>
            {this.__renderSizeSelector.call(this)}
            {this.__renderPuzzle.call(this)}
        </div>);
    }

    __renderSizeSelector() {
        return !this.state.edit ? null :
            (<div className={classNames(css(style.sizeSelector))}>
                <input onChange={e => this.__onSizeChange(e)} min={3} max={13} step={2} value={this.state.size} type="range" />
            </div>);
    }

    __renderPuzzle() {
        let rows = [];
        const specStyle = {
            height: (this.state.size * (values.cellHeight - values.topShift) + values.topShift) + 'px',
            width: (this.state.size * values.cellWidth - this.state.size + 1) + 'px',
            minHeight: (this.state.size * (values.cellHeight - values.topShift) + values.topShift) + 'px',
            minWidth: (this.state.size * values.cellWidth - this.state.size + 1) + 'px'
        };
        for (let i = 0; i < this.state.size; i++) {
            rows.push(this.drawRow(i));
        }
        return (<div className={classNames(css(style.puzzle))} style={specStyle}>{rows}{this.__renderRules.call(this)}</div>);
    }

    __onSizeChange(e) {
        const size = e.target.value;
        this.setState(Object.assign({}, this.state, {size, middleRow: Math.floor(size / 2)}));
    }

    __renderRow(index) {
        let cells = [];
        const middleRow = this.state.middleRow;
        const size = this.state.size - Math.abs(index - middleRow);
        const specStyle = {
            marginLeft: (Math.abs(index - middleRow) * (values.cellWidth / 2)) + 'px'
        };

        for (let i = 0; i < size; i++) {
            const x = index;
            const y = index < middleRow ? i : i + (index - middleRow);
            const z = middleRow + (y - x);
            cells.push(<Cell key={`x${x}y${y}z${z}`} onChange={value => this.__onCellChange(value, x, y, z)}/>);
        }

        return (<div style={specStyle} className={classNames(css(style.row))} key={shortid.generate()}>{cells}</div>);
    }

    __renderRules() {
        let rules = [];
        for (let i = 0; i < this.state.size; i++) {
            rules.push(this.__renderXRule(i));
            rules.push(this.__renderYRule(i));
        }
        return rules;
    }

    __renderXRule(i) {
        const specStyle = {
            top: (i * (values.cellHeight - values.topShift) + values.topShift) + 'px',
            left: ((Math.abs(i - this.state.middleRow) * (values.cellWidth / 2)) - values.ruleWidth - 2) + 'px'
        };
        return (<input style={specStyle} className={classNames(css(style.rules, style.xRule))} type="text" key={`x${i}`} />);
    }

    __renderYRule(i) {
        //TODO: works with only size=5, problem with left for index > middleRow
        let specStyle;
        if (i <= this.state.middleRow) {
            specStyle = {
                top: (-52) + 'px',
                left: (this.state.middleRow * (values.cellWidth / 2) + i * values.cellWidth + 4) + 'px'
            };
        } else {
            specStyle = {
                top: (-52 + (i - this.state.middleRow) * (values.cellHeight - 10)) + 'px',
                left: (this.state.middleRow * (values.cellWidth / 2) + i * (values.cellWidth / 2) + values.cellWidth) + 'px'
            };
        }
        return (<input style={specStyle} className={classNames(css(style.rules, style.yRule))} type="text" key={`y${i}`} />);
    }

    __onCellChange(value, x, y, z) {
        console.log(x, y, z, value);
    }
}

export default Puzzle;
