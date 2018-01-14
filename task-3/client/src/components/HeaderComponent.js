import React, { Component } from 'react'
import Logo from 'assets/images/logo.svg'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default class HeaderComponent extends Component {
    render() {
        return (
            <Router>    
                <header class="header">
                        <Link to="/">
                            <img src={Logo} class="header__logo" />
                        </Link>
                        <Link to="/create" class="create-meeting">Создать встречу</Link>
                </header>
            </Router>
        )
    }
}