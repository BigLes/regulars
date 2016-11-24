/**
 * Created by Oleksandr Lisovyk on 04.11.2016.
 */
'use strict';

import React, {PropTypes}   from 'react';
import style                from './style'
import {css}                from 'aphrodite';
import classNames           from 'classnames';
import config               from 'config';
import LoaderActions        from '../../actions/LoaderActions';
import PopupActions         from '../../actions/PopupActions';
import UserActions          from '../../actions/UserActions';
import UserStore            from '../../stores/UserStore';

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
            user: __emptyUser(),
            currentUser: UserStore.getCurrentUser()
        };
        this.fieldChange = this.__fieldChange.bind(this);
    }

    render() {
        return (
            <div className={classNames(css(style.userButton, this.state.active ? style.active : ''), this.props.className)}>
                <div onClick={() => this.__toggle()} className={classNames("fa fa-user-o", css(style.pointer))}></div>
                {this.state.active ? this.__renderUserActions() : null}
            </div>
        );
    }

    __renderUserActions() {
        if (this.state.currentUser) {
            return this.__renderMenu();
        }
        return this.__renderLoginForm();
    }

    __renderMenu() {
        return (<div>{this.state.currentUser.login}</div>);
    }

    __renderLoginForm() {
        return (
            <div className={classNames(css(style.loginForm))}>
                <input onClick={e => this.__toggleLoginType(e)} className={classNames(css(style.input, style.button))} name="type" type="button" value={this.state.login ? 'LOGIN' : 'SIGNUP'} />
                <input onChange={this.fieldChange} className={classNames(css(style.input, !this.state.user.login ? null :this.props.rules.login.test(this.state.user.login) ? style.good : style.bad))} name="login" type="text" placeholder="Login" value={this.state.user.login} />
                {!this.state.login ? <input onChange={this.fieldChange} className={classNames(css(style.input, !this.state.user.email ? null :this.props.rules.email.test(this.state.user.email) ? style.good : style.bad))} name="email" type="text" placeholder="Email" value={this.state.user.email} /> : null}
                <input onChange={this.fieldChange} className={classNames(css(style.input, !this.state.user.password ? null : this.props.rules.password.test(this.state.user.password) ? style.good : style.bad))} name="password" type="password" placeholder="Password" value={this.state.user.password} />
                {!this.state.login ? <input onChange={this.fieldChange} className={this.__passwordClassNames.call(this)} name="password2" type="password" placeholder="Re-Password" value={this.state.user.password2} /> : null}
                <input onClick={e => this.__activateUser(e)} className={classNames(css(style.input, style.button))} name="type" type="button" value="SUBMIT" />
            </div>
        )
    }

    __toggle() {
        this.setState(Object.assign({}, this.state, {active: !this.state.active}));
    }

    __toggleLoginType() {
        this.setState(Object.assign(this.state, {login: !this.state.login}));
    }

    __activateUser() {
        const rules = this.props.rules;
        const user = this.state.user;
        if (rules.login.test(user.login) && rules.password.test(user.password)) {
            if (this.state.login) {
                this.__toggle();
                LoaderActions.turnOn();
                UserActions.login({login: this.state.user.login, password: this.state.user.password});
            } else if (rules.email.test(user.email) && rules.password.test(user.password2) && (user.password === user.password2)) {
                this.__toggle();
                LoaderActions.turnOn();
                UserActions.login(this.state.user);
            } else {
                PopupActions.addBadMessage('Your email or password doesn\'t fit requirements');
            }
        } else {
            PopupActions.addBadMessage('Your login or password doesn\'t fit requirements');
        }
    }

    __fieldChange(event) {
        const fieldName = event.target.name;
        let value = Object.assign({}, this.state);
        value.user[fieldName] = event.target.value;
        this.setState(Object.assign(this.state, value));
    }

    __passwordClassNames() {
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

    componentDidMount() {
        UserStore.addListener(() => this.__onUserStoreChange());
    }

    __onUserStoreChange() {
        this.setState(Object.assign({}, this.state, {currentUser: UserStore.getCurrentUser()}));
    }
}

UserButton.propTypes = {
    className: PropTypes.string
};

UserButton.defaultProps = {
    rules: {
        login: new RegExp(config.rules.login),
        email: new RegExp(config.rules.email),
        password: new RegExp(config.rules.password)
    }
};

export default UserButton;
