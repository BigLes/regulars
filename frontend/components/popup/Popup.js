/**
 * Created by Oleksandr Lisovyk on 14.11.2016.
 */
'use strict';

import React        from 'react';
import style        from './style'
import {css}        from 'aphrodite';
import classNames   from 'classnames';
import PopupStore   from '../../stores/PopupStore';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: PopupStore.getMessages()
        }
    }

    render() {
        return this.state.messages.length === 0 ? null : (
            <div className={classNames(css(style.popupContainer))}>{this.__renderMessages.call(this)}</div>
        );
    }

    __renderMessages() {
        const messages = this.state.messages;
        const n = messages.length;
        let elements = [];
        for (let i = 0; i < n; i++) {
            elements.push(this.__renderMessage(messages[i]));
        }
        return elements;
    }

    __renderMessage(message) {
        //TODO: add proper key - it should not be generated automaticaly
        return (<div key={message.key} className={classNames(css(style.message, message.good ? style.good : style.bad))}>{message.text}</div>);
    }

    componentDidMount() {
        PopupStore.addListener(() => this.__onChange());
    }

    __onChange() {
        this.setState(Object.assign({}, this.state, {messages: PopupStore.getMessages()}));
    }
}

export default Popup;

