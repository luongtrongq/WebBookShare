import React from 'react'
import "../Vietcetera/css/style.css"
export default function RecentSection() {
    return (
        <div className="container mt-5 recentsection">

            <div className="row ">
                <div className="recent-left col-md-8">
                    <h1 className="text-left titleVideo">GẦN ĐÂY</h1>
                    <div className="pictureGeneral d-flex flex-row align-items-center">
                        <img className="pictureRecent" src="./img/VietceteraContent/Recent-left/pic1.jpg" />
                        <p className="text-left pl-4">
                            <h4 className="">Miếng dán vi kim có tác dụng gì cho làn da?</h4>
                            <span style={{ fontSize: "14px" }}>Miếng dán vi kim cho phép đưa các thành phần chăm sóc da vào sâu trong da một cách an toàn và nhanh chóng, nhưng liệu “dục tốc thì có bất đạt”?</span>
                        </p>
                    </div>
                    <div className=" pictureGeneral d-flex flex-row align-items-center">
                        <img className="pictureRecent" src="./img/VietceteraContent/Recent-left/pic1.jpg" />
                        <p className="text-left pl-3">
                            <h4 className="">Miếng dán vi kim có tác dụng gì cho làn da?</h4>
                            <span style={{ fontSize: "14px" }}>Miếng dán vi kim cho phép đưa các thành phần chăm sóc da vào sâu trong da một cách an toàn và nhanh chóng, nhưng liệu “dục tốc thì có bất đạt”?</span>
                        </p>
                    </div>
                    <div className="Rencent-Video">
                        <div className="video-iframe">
                            <iframe className="w-100 responsive-iframe" src="https://www.youtube.com/embed/Oz8RF_1eGxw" title="Youtube video player" />
                        </div>
                    </div>
                    <div className=" pictureGeneral d-flex flex-row align-items-center">
                        <img className="pictureRecent" src="./img/VietceteraContent/Recent-left/pic1.jpg" />
                        <p className="text-left pl-3">
                            <h4 className="">Miếng dán vi kim có tác dụng gì cho làn da?</h4>
                            <span style={{ fontSize: "14px" }}>Miếng dán vi kim cho phép đưa các thành phần chăm sóc da vào sâu trong da một cách an toàn và nhanh chóng, nhưng liệu “dục tốc thì có bất đạt”?</span>
                        </p>
                    </div><div className=" pictureGeneral d-flex flex-row align-items-center">
                        <img className="pictureRecent" src="./img/VietceteraContent/Recent-left/pic1.jpg" />
                        <p className="text-left pl-3">
                            <h4 className="">Miếng dán vi kim có tác dụng gì cho làn da?</h4>
                            <span style={{ fontSize: "14px" }}>Miếng dán vi kim cho phép đưa các thành phần chăm sóc da vào sâu trong da một cách an toàn và nhanh chóng, nhưng liệu “dục tốc thì có bất đạt”?</span>
                        </p>
                    </div>

                </div>
                <div className="recent-right text-left col-md-4">
                    <h1 className="text-left titleVideo">Phổ biến</h1>
                    <div>
                        <img className="w-100" src="./img/VietceteraContent/Recent-Right/pic1.jpg" />
                        <span style={{ fontSize: "18px", fontWeight: "600" }} className="text-left">Hãy tiếp tục nói về 15 chú chó, vì mưa dầm thấm lâu</span>
                    </div>
                    <div>
                        <div className="VietVideo row ">
                            <img className="col-md-6" src="./img/VietceteraContent/left/pic1.jpg" />
                            <span className="col-md-6 text-left" style={{ fontSize: "12px" }}>“Đầu tư thì không được quá tin người!” - Lynn Hoàng, Country Director Binance | VI EP06</span>
                        </div>
                        <div className="VietVideo row ">
                            <img className="col-md-6" src="./img/VietceteraContent/left/pic1.jpg" />
                            <span className="col-md-6 text-left" style={{ fontSize: "12px" }}>“Đầu tư thì không được quá tin người!” - Lynn Hoàng, Country Director Binance | VI EP06</span>
                        </div>
                        <div className="VietVideo row ">
                            <img className="col-md-6" src="./img/VietceteraContent/left/pic1.jpg" />
                            <span className="col-md-6 text-left" style={{ fontSize: "12px" }}>“Đầu tư thì không được quá tin người!” - Lynn Hoàng, Country Director Binance | VI EP06</span>
                        </div>
                    </div>
                    <div className="bannerScroll">
                        <img className="RecentBanner" src="./img/VietceteraContent/Recent-Right/banner.jpg" />
                    </div>
                </div>
            </div>

        </div>
    )
}
