/**
 * Created by Oleksandr Lisovyk on 04.11.2016.
 */
'use strict';

import React, {PropTypes}   from 'react';
import styles       from './style'
import {css}        from 'aphrodite';
import classNames   from 'classnames';

class UserButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames(css(styles.userButton), this.props.className)}>
                <span className="fa fa-user-o"></span>
            </div>
        );
    }
}

UserButton.propTypes = {
    className: PropTypes.string
};

export default UserButton;
