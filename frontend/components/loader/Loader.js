/**
 * Created by Oleksandr Lisovyk on 06.11.2016.
 */
'use strict';

import React        from 'react';
import style        from './style'
import {css}        from 'aphrodite';
import classNames   from 'classnames';
import LoaderStore  from '../../stores/LoaderStore';

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: LoaderStore.getValue()
        }
    }

    render() {
        return !this.state.display ? null : (
            <div className={classNames(css(style.loader))}>
                <svg className={classNames(css(style.svg))}>
                    <path
                        fill="rgba(0, 0, 0, .15)"
                        strokeWidth="0"
                        d="M 21.666666666666668 0.4888882107204867 C 21.666666666666668 0.4888882107204866 25.555555555555557 6.211110432942709 25.555555555555557 6.211110432942709 C 25.555555555555557 6.211110432942709 73.61111111111111 6.266665988498264 73.61111111111111 6.266665988498264 C 73.61111111111111 6.266665988498264 78.16666666666666 0.43333265516493036 78.16666666666666 0.43333265516493036 C 78.16666666666666 0.43333265516493036 21.666666666666668 0.4888882107204866 21.666666666666668 0.4888882107204867 z"/>
                </svg>
            </div>
        );
    }

    componentDidMount() {
        LoaderStore.addListener(() => this.__onChange());
    }

    __onChange() {
        this.setState(Object.assign({}, this.state, {display: LoaderStore.getValue()}));
    }
}

export default Loader;
