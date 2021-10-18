import React from 'react'
import { AiFillAlert } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import "./css/style.css"
export default function Header() {
    return (
        <div className="container ">
            <div className="list-top">
                <ul>
                    <li>
                        <i><AiFillAlert /></i><a href="#">
                            Tranh treo trường</a></li>
                    <li><i><AiFillAlert /></i><a href="#">In Lịch tết</a></li>
                    <li><i><AiFillAlert /></i><a href="#">Tin tức</a></li>
                    <li><i><AiFillAlert /></i><a href="#">Chương trình khuyến mãi</a></li>
                    <li><i><AiFillAlert /></i><a href="#">Kiểm tra đơn hàng</a></li>
                </ul>
            </div>
            <div className="row">
                <div className=" col-md-4  " >
                    <div className="logoBranch" style={{ width: "100px", height: "100px" }}>
                        <img className=" w-100 text-left" style={{ borderRadius: "50%" }} src="./img/booksale/home/logo.jpg" />
                    </div>
                </div>
                <div className="col-md-4 find">
                    <div className="form-group form-findbook  ">
                        <input type="text" id="findBook" className="form-control form-control-sm" name id aria-describedby="helpId" placeholder />
                        <select id="inputState" className="form-control">
                            <option selected>All</option>
                            <option>...</option>
                        </select>
                        <button className=" findButton">Tìm kiếm</button>
                    </div>
                </div>
                <div className="col-md-4 clickCart" >
                    <button className="cart">
                        <i><FaShoppingCart /></i>
                        <p>Xem giỏ hàng</p>
                    </button>
                </div>

            </div >
        </div >
    )
}
