import React, { Component } from 'react'
import Logo from 'assets/images/logo.svg'

export default class HeaderComponent extends Component {
    render() {
        return (
            <header class="header">
                <a href="index.html">
                    <img src={Logo} class="header__logo" />
                </a>
                    <a href="create.html" class="create-meeting">Создать встречу</a>
            </header>
        )
    }
}