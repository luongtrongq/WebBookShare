import React, { Component } from 'react'
import VideoSection from './Content/VideoSection'
import Vietcetera from './Content/Vietcetera'
import HeaderVietcetera from './Header'
export default class Home extends Component {
    render() {
        return (
            <div className=" text-center">
                <div className="header container">
                    <HeaderVietcetera />
                </div>
                <div className="vietcetera container">
                    <Vietcetera />
                </div>
                <div className="video mt-5">
                    <VideoSection />
                </div>
                <div className="recent">recent</div>
                <div className="footer">footer</div>
            </div>
        )
    }
}
