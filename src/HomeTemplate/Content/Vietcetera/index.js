import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from "react-icons/ai"
import VietContent from './VietceteraContent';
import "./css/style.css"

import { Link, NavLink } from 'react-router-dom';
export default function Vietcetera() {
    return (
        <div className="mt-5 container">
            <div className="brandName d-flex justify-content-between">
                <h1 className="vixmi">VixMi.</h1>
                <div className=" loginout d-flex  justify-content-end align-items-center">
                    <button className="btn btn-light"><BsSearch /></button>

                    <button className="btn btn-light">
                        <Link style={{ color: "black" }} type="btn btn dark" to="/signup" > Đăng ký</Link></button>

                    <button className="btn btn-success"><Link style={{ color: "white" }} type="btn btn-dark" to="/signin" > Đăng nhập</Link></button>
                    <button className="btn btn-warning"><Link style={{ color: "black" }} type="btn btn" to="/salebook" > Mua Sách</Link></button>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <AiOutlineMenu />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>


                </div>
            </div>
            <div className="navigation ">
                <ul className="">
                    <li><a href="#">Kinh doanh</a></li>
                    <li><a href="#">Cuộc sống </a></li>
                    <li><a href="#">Sáng tạo</a></li>
                    <li><a href="#">Thời trang</a></li>
                    <li><a href="#">Thưởng thức</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Video</a></li>
                    <li><a href="#">PODCAST</a></li>
                    <li><a href="#">CAST CAMP 2021</a></li>
                </ul>
            </div>
            <div className="content">
                <VietContent />
            </div>
            <div className="footerVietcetera mt-5">
                <img src="./img/VietceteraContent/bottom/bannerAd.jpeg" className="w-100" />
            </div>
        </div>
    )
}
