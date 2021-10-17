import React, { Component } from 'react'

import "../css/style.css"
import { GrFacebook } from "react-icons/gr"
import { AiFillEye } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { Link } from 'react-router-dom'
export default class SignIn extends Component {
    render() {
        return (
            <div className="container signup text-center">
                <div>
                    <Link style={{ color: "black" }} to="/"> <h1 className="font-weight-bold">Vietcetera.</h1></Link>

                </div>
                <hr />
                <div>
                    <h2> Đăng nhập</h2>
                    <p>Nhập email và mật khẩu của bạn</p>
                </div>
                <div className="d-flex flex-column input-signup ">
                    <input className="" id="email" type="text" placeholder="Email" />
                    <form className="baseIcon w-100">
                        <input id="password" type="password" placeholder="Mật khẩu" />
                    </form>


                </div>
                <div className="d-flex flex-row align-items-center forgetPass mt-4">
                    <p><a>Quên mật khẩu</a></p>
                    <button className="btn btn-success mt-4"> Đăng nhập </button>
                </div>

                <form className="d-flex flex-column align-items-center signupFb mt-3 ">
                    <button className="btn btn-primary"><i><GrFacebook /></i> Đăng nhập bằng Google</button>
                    <button className="btn btn-light"><i><FcGoogle /></i> Đăng nhập bằng Facebook</button>

                </form>
            </div>
        )
    }
}
