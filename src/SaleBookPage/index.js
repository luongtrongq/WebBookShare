import React, { Component } from 'react'
import Header from './Component-Header/header'
import Content from './Component-Header/content'
export default class SaleBookPage extends Component {
    render() {
        return (
            <div>
                <div className="header-book">
                    <Header />
                </div>
                <div className="content-book">
                    <Content />
                </div>
                <div className="footer-book"></div>
            </div>
        )
    }
}
