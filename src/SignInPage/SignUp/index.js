import React, { Component } from 'react'
import "../css/style.css"
import { GrFacebook } from "react-icons/gr"
import { AiFillEye } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { Link } from 'react-router-dom'
export default class SignUp extends Component {

    render() {
        return (

            <div className="container signup text-center">
                <div>
                    <Link style={{ color: "black" }} to="/"> <h1 className="font-weight-bold">Vietcetera.</h1></Link>

                </div>
                <hr />
                <div>
                    <h2> Đăng ký</h2>
                    <p>Nhập email và mật khẩu để tạo tài khoản</p>
                </div>
                <div className="d-flex flex-column input-signup ">
                    <input className="" id="email" type="text" placeholder="Email" />
                    <form className="baseIcon w-100">
                        <input id="password" type="password" placeholder="Mật khẩu" />
                        <i className="eyeIcon"><AiFillEye /></i>
                    </form>
                    <form className="baseIcon w-100">
                        <input id="repassword" type="password" placeholder="Nhập Lại Mật khẩu" />
                        <i className="eyeIcon" ><AiFillEye /></i>
                    </form>

                </div>
                <form className="d-flex checkbox align-items-center">
                    <input className="checkbox-signup" type="checkbox" aria-label="Checkbox for following text input" />
                    <span className="announce" > Nhận thông báo sớm nhất </span>
                </form>
                <button className="btn btn-success mt-4"> Tạo tài khoản</button>

                <form className="d-flex flex-column align-items-center signupFb">
                    <button className="btn btn-primary"><i><GrFacebook /></i> Đăng ký bằng Google</button>
                    <button className="btn btn-light"><i><FcGoogle /></i> Đăng ký bằng Facebook</button>

                </form>
            </div>
        )
    }
}
