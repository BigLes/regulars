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
                <div onClick={() => this.toggle()} className={classNames("fa fa-user-o", css(style.pointer))}></div>
                {this.state.active ? this.renderLoginForm() : null}
            </div>
        );
    }

    toggle() {
        this.setState(Object.assign(this.state, {active: !this.state.active}));
    }

    activateUser() {
        const rules = this.props.rules;
        const user = this.state.user;
        if (rules.login.test(user.login) && rules.password.test(user.password)) {
            if (this.state.login) {
                this.toggle();
                LoaderActions.turnOn();
                UserActions.login({login: this.state.user.login, password: this.state.user.password});
            } else if (rules.email.test(user.email) && rules.password.test(user.password2) && (user.password === user.password2)) {
                this.toggle();
                LoaderActions.turnOn();
                UserActions.login(this.state.user);
            } else {
                //TODO: show error
            }
        } else {
            //TODO: show error
        }
    }

    renderLoginForm() {
        return (
            <div className={classNames(css(style.loginForm))}>
                <input onClick={e => this.toggleLoginType(e)} className={classNames(css(style.input, style.button))} name="type" type="button" value={this.state.login ? 'LOGIN' : 'SIGNUP'} />
                <input onChange={e => this.fieldChange(e)} className={classNames(css(style.input, !this.state.user.login ? null :this.props.rules.login.test(this.state.user.login) ? style.good : style.bad))} name="login" type="text" placeholder="Login" value={this.state.user.login} />
                {!this.state.login ? <input onChange={e => this.fieldChange(e)} className={classNames(css(style.input, !this.state.user.email ? null :this.props.rules.email.test(this.state.user.email) ? style.good : style.bad))} name="email" type="text" placeholder="Email" value={this.state.user.email} /> : null}
                <input onChange={e => this.fieldChange(e)} className={classNames(css(style.input, !this.state.user.password ? null : this.props.rules.password.test(this.state.user.password) ? style.good : style.bad))} name="password" type="password" placeholder="Password" value={this.state.user.password} />
                {!this.state.login ? <input onChange={e => this.fieldChange(e)} className={this.passwordClassNames.call(this)} name="password2" type="password" placeholder="Re-Password" value={this.state.user.password2} /> : null}
                <input onClick={e => this.activateUser(e)} className={classNames(css(style.input, style.button))} name="type" type="button" value="SUBMIT" />
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
