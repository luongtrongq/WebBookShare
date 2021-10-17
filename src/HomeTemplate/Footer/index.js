import React from 'react'
import { FiFacebook, FiInstagram } from "react-icons/fi"
import { DiAndroid } from "react-icons/di";
import "../Header/css/style.css"
export default function Footer() {
    return (
        <div className="container ">
            <div className="row">
                <div className=" footer-content col-md-4 text-left">
                    <h1 className="text-center mb-3">Vietcetera.</h1>
                    <p>© Vietcetera 2021 . All Rights Reserved. Privacy Policy</p>
                    <span> Đơn vị quản lý vận hành: Công ty TNHH Vietcetera</span><br />
                    <span> Mã số thuế: 0314912825</span><br />
                    <span> Địa chỉ ĐKKD: 58 Phan Bội Châu, Phường Bến Thành, Quận 1, TP.HCM</span><br />
                    <span> Điện thoại: 0286 286 2989</span><br />
                    <span> Email: operations@vietcetera.com</span><br />
                    <span>Giấy phép thiết lập MXH số 69/GP-BTTTT, Ký ngày 29/01/2021</span>
                    <br />
                    <br />
                    <h5>Theo dõi chúng tôi</h5>
                    <p><FiFacebook /> <FiInstagram /> <DiAndroid /> </p>
                    <h3>Ứng dụng Vietcetera</h3>
                    <p className="d-flex flex-row">
                        <img src="./img/footer/appVietcetera.svg" />
                        <img className="w-25" src="./img/footer/QR_app.png" />
                    </p>
                </div>
                <div className="col-md-2 text-left mt-5" >
                    <h5>Kinh doanh</h5>
                    <ul className="listFooter">
                        <li><a href="#">Làm Việc Hiệu Quả
                        </a></li>
                        <li><a href="#"> Tài Chính Cá Nhân</a></li>
                        <li><a href="#"> Thăng Tiến</a></li>
                        <li><a href="#">    Lãnh Đạo</a></li>
                        <li><a href="#">   Khởi Nghiệp</a></li>
                        <li><a href="#"> Xu Hướng Kinh Doanh</a></li>
                        <li><a href="#"> Văn Hoá Đi Làm</a></li>

                    </ul>
                </div>
                <div className="col-md-2 text-left mt-5">
                    <h5>Cuộc sống</h5>
                    <ul className="listFooter">
                        <li><a href="#">Làm Việc Hiệu Quả
                        </a></li>
                        <li><a href="#"> Tài Chính Cá Nhân</a></li>
                        <li><a href="#"> Thăng Tiến</a></li>
                        <li><a href="#">    Lãnh Đạo</a></li>
                        <li><a href="#">   Khởi Nghiệp</a></li>
                        <li><a href="#"> Xu Hướng Kinh Doanh</a></li>
                        <li><a href="#"> Văn Hoá Đi Làm</a></li>

                    </ul>
                </div>
                <div className="col-md-2 text-left mt-5">
                    <h5>Thưởng thức</h5>
                    <ul className="listFooter">
                        <li><a href="#">Làm Việc Hiệu Quả
                        </a></li>
                        <li><a href="#"> Tài Chính Cá Nhân</a></li>
                        <li><a href="#"> Thăng Tiến</a></li>
                        <li><a href="#">    Lãnh Đạo</a></li>
                        <li><a href="#">   Khởi Nghiệp</a></li>
                        <li><a href="#"> Xu Hướng Kinh Doanh</a></li>
                        <li><a href="#"> Văn Hoá Đi Làm</a></li>

                    </ul></div>
                <div className="col-md-2 text-left mt-5">
                    <h5>Series</h5>
                    <ul className="listFooter">
                        <li><a href="#">Làm Việc Hiệu Quả
                        </a></li>
                        <li><a href="#"> Tài Chính Cá Nhân</a></li>
                        <li><a href="#"> Thăng Tiến</a></li>
                        <li><a href="#">    Lãnh Đạo</a></li>
                        <li><a href="#">   Khởi Nghiệp</a></li>
                        <li><a href="#"> Xu Hướng Kinh Doanh</a></li>
                        <li><a href="#"> Văn Hoá Đi Làm</a></li>

                    </ul></div>


            </div>

        </div >
    )
}
