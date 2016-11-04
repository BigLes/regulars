/**
 * Created by Oleksandr Lisovyk on 03.11.2016.
 */
'use strict';

import React    from 'react';
import styles   from './style'
import {css}    from 'aphrodite';

const Header = React.createClass({
    render: function() {
        return (
            <header className={css(styles.header)}>
                <nav></nav>
            </header>
        );
    }
});

export default Header;
