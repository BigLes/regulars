/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

import React        from 'react';
import styles       from './style'
import {css}        from 'aphrodite';
import UserButton   from '../userButton/UserButton';
import classNames   from 'classnames';

const Header = React.createClass({
    render() {
        return (
            <header className={classNames(css(styles.header), 'row')}>
                <nav className="row">
                    <div className="col-sm-2">Banner</div>
                    <div className="col-sm-8">Main</div>
                    <UserButton className="col-sm-2" />
                </nav>
            </header>
        );
    }
});

export default Header;
