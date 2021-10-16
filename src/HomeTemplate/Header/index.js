import React from 'react'
import { FaFacebook, FaInstagramSquare, FaInvision, FaYoutube } from 'react-icons/fa';
import "./css/style.css"
export default function HeaderVietcetera() {
    return (
        <div className="banner-header text-center">
            <div>
                <img src="./img/Header/banner.png" />
            </div>
            <div className=" mt-5 subtitle-banner ">
                <button className="visitButton btn btn-dark"> Ghé Vietcetera Store</button>
                <span> <FaFacebook /> </span>
                <span> <FaInstagramSquare /> </span>
                <span> <FaInvision /> </span>
                <span> <FaYoutube /> </span>
                <button className="internalEdit btn btn-light"> Internal Edition</button>
            </div>
        </div>
    )
}
