/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

import React        from 'react';
import style        from './style'
import {css}        from 'aphrodite';
import UserButton   from '../userButton/UserButton';
import classNames   from 'classnames';

const Header = React.createClass({
    render() {
        return (
            <header className={classNames(css(style.header))}>
                <nav>
                    <div className={classNames(css(style.banner))}>Banner</div>
                    <div className={classNames(css(style.buttons))}>Main</div>
                    <UserButton className={classNames(css(style.login))}/>
                </nav>
            </header>
        );
    }
});

export default Header;
