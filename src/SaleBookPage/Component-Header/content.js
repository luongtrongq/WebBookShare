import React, { Component } from 'react'
import { BsFillMenuButtonWideFill } from "react-icons/bs"
import { FcFlashOn, FcIdea } from "react-icons/fc"
import "./css/style.css"
export default class Content extends Component {
    render() {
        return (
            <div className="container">

                <div className="list-menu">
                    <ul>
                        <li><BsFillMenuButtonWideFill /><a>DANH MỤC SẢN PHẨM</a></li>
                        <li>
                            <FcFlashOn />
                            <a>SÁCH MỚI</a></li>
                        <li>
                            <FcIdea /><a>SÁCH THAM KHẢO 2021-2022</a></li>
                        <li><a>SÁCH KINH DOANH</a></li>
                        <li><a>SÁCH THIẾU NHI</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-sub">
                            <li><a>Sách Mới</a></li>
                            <li><a>Sách Bán Chạy</a></li>
                            <li><a>Sách Tâm linh</a></li>
                            <li><a>Sách Tâm Lý</a></li>
                            <li><a>Sách Văn Học</a></li>
                            <li><a>Sách Văn Học Nước Ngoài</a></li>
                            <li><a>Sách Kiến Thức Bách Khoa</a></li>
                            <li><a>Sách Nông nghiệp</a></li>
                            <li><a>Sách Tham Khảo</a></li>
                            <li><a>Sách Tiếng Anh</a></li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <div className="grid-banner">
                            <div className=" grid-banner1"></div>
                            <div className="grid-banner2">

                                <span className="banner2-pic"></span>
                            </div>
                            <div className="grid-banner3">

                            </div>
                            <div className="grid-banner4 ">
                                <img src="./img/booksale/content/backto.jpg" />
                            </div>
                            <div className="grid-banner4 ">
                                <img src="./img/booksale/content/ceo.jpg" />
                            </div>
                            <div className="grid-banner4 ">
                                <img src="./img/booksale/content/khuyendoc.jpg" />
                            </div>
                            <div className="grid-banner4 ">
                                <img src="./img/booksale/content/vanhoc.jpg" />
                            </div>

                        </div>

                    </div>
                    <div className="grid-banner5 ">
                    </div>
                </div>
            </div>
        )
    }
}
