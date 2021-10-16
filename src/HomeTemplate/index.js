import React, { Component } from 'react'
import Vietcetera from './Content/Vietcetera'
import HeaderVietcetera from './Header'
export default class Home extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="header">
                    <HeaderVietcetera />
                </div>
                <div className="vietcetera">
                    <Vietcetera />
                </div>
                <div className="video">video</div>
                <div className="recent">recent</div>
                <div className="footer">footer</div>
            </div>
        )
    }
}
