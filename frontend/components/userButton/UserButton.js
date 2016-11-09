/**
 * Created by Oleksandr Lisovyk on 04.11.2016.
 */
'use strict';

import React, {PropTypes}   from 'react';
import style                from './style'
import {css}                from 'aphrodite';
import classNames           from 'classnames';
import LoaderActions        from '../../actions/LoaderActions';
import UserActions          from '../../actions/UserActions';

const __emptyUser = () => {
    return {
        login: '',
        email: '',
        password: '',
        password2: ''
    }
};

class UserButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            login: true,
        };
        this.state.user = __emptyUser();
    }

    render() {
        return (
            <div className={classNames(css(style.userButton, this.state.active ? style.active : ''), this.props.className)}>
                <div onClick={this.toggle.bind(this)} className={classNames("fa fa-user-o", css(style.pointer))}></div>
                {this.state.active ? this.renderLoginForm() : null}
            </div>
        );
    }

    toggle() {
        this.setState(Object.assign(this.state, {active: !this.state.active}));
    }

    activateUser() {
        LoaderActions.turnOn();
        UserActions.login(this.state.login ? {login: this.state.user.login, password: this.state.user.password} : this.state.user);
    }

    renderLoginForm() {
        return (
            <div className={classNames(css(style.loginForm))}>
                <input onClick={this.toggleLoginType.bind(this)} className={classNames(css(style.input, style.button))} name="type" type="button" value={this.state.login ? 'LOGIN' : 'SIGN UP'} />
                <input onChange={this.fieldChange.bind(this)} className={classNames(css(style.input, !this.state.user.login ? null :this.props.rules.login.test(this.state.user.login) ? style.good : style.bad))} name="login" type="text" placeholder="Login" value={this.state.user.login} />
                {!this.state.login ? <input onChange={this.fieldChange.bind(this)} className={classNames(css(style.input, !this.state.user.email ? null :this.props.rules.email.test(this.state.user.email) ? style.good : style.bad))} name="email" type="text" placeholder="Email" value={this.state.user.email} /> : null}
                <input onChange={this.fieldChange.bind(this)} className={classNames(css(style.input, !this.state.user.password ? null : this.props.rules.password.test(this.state.user.password) ? style.good : style.bad))} name="password" type="password" placeholder="Password" value={this.state.user.password} />
                {!this.state.login ? <input onChange={this.fieldChange.bind(this)} className={this.passwordClassNames.call(this)} name="password2" type="password" placeholder="Re-Password" value={this.state.user.password2} /> : null}
                <input onClick={this.activateUser.bind(this)} className={classNames(css(style.input, style.button))} name="type" type="button" value="SUBMIT" />
            </div>
        )
    }

    toggleLoginType() {
        this.setState(Object.assign(this.state, {login: !this.state.login}));
    }

    fieldChange(event) {
        const fieldName = event.target.name;
        let value = Object.assign({}, this.state);
        value.user[fieldName] = event.target.value;
        this.setState(Object.assign(this.state, value));
    }

    passwordClassNames() {
        if (!this.state.user.password && !this.state.user.password2) {
            return classNames(css(style.input))
        }
        if (
            this.state.user.password === this.state.user.password2 &&
            this.props.rules.password.test(this.state.user.password2)
        ) {
            return classNames(css(style.input), css(style.good))
        } else {
            return classNames(css(style.input), css(style.bad))
        }
    }
}

UserButton.propTypes = {
    className: PropTypes.string
};

//TODO: change password regexp
UserButton.defaultProps = {
    rules: {
        login: new RegExp('[\\w]{3,25}'),
        email: new RegExp('^[-a-z0-9~!$%^&*_=+}{\\\'?]+(\\.[-a-z0-9~!$%^&*_=+}{\\\'?]+)*@([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*\\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))(:[0-9]{1,5})?$'),
        password: new RegExp('[\\w]{3,25}')
    }
};

export default UserButton;
