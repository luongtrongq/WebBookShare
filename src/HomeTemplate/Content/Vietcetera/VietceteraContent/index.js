import React from 'react'
import "../css/style.css"
export default function VietContent() {
    return (
        <div className="row">
            <div className="pic col-md-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators d-none">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="./img/VietceteraContent/left/pic1.jpg" alt="First slide" />
                            <div className="text-left">
                                <h4>Hà Thị Tú Phượng: “Gaming là tương lai của các nhà sáng tạo nội dung.”</h4>
                                <span>Gặp gỡ Hà Thị Tú Phượng - CEO và founder của meTub Network, khách mời của podcast “Vietnam Innovators” | Mùa 2 tập 5</span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./img/VietceteraContent/left/pic2.jpg" alt="Second slide" />
                            <div className="text-left">
                                <h4>Hà Thị Tú Phượng: “Gaming là tương lai của các nhà sáng tạo nội dung.”</h4>
                                <span>Gặp gỡ Hà Thị Tú Phượng - CEO và founder của meTub Network, khách mời của podcast “Vietnam Innovators” | Mùa 2 tập 5</span>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./img/VietceteraContent/left/pic3.jpg" alt="Third slide" />
                            <div className="text-left">
                                <h4>Hà Thị Tú Phượng: “Gaming là tương lai của các nhà sáng tạo nội dung.”</h4>
                                <span>Gặp gỡ Hà Thị Tú Phượng - CEO và founder của meTub Network, khách mời của podcast “Vietnam Innovators” | Mùa 2 tập 5</span>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="pic col-md-4 colmd4">
                <div className="card " style={{ width: '18rem' }}>
                    <img className="card-img-top rounded " src="./img/VietceteraContent/middle/pic4.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">Digital nomad - Xê dịch nhưng không thất nghiệp</h5>
                    </div>
                </div>
                <div className="card card-general" style={{ width: '18rem' }}>
                    <img className="card-img-top rounded" src="./img/VietceteraContent/middle/pic5.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">Digital nomad - Xê dịch nhưng không thất nghiệp</h5>
                    </div>
                </div>

            </div>
            <div className="pic col-md-3 ">
                <div className="card d-flex flex-row " style={{ width: '18rem' }}>
                    <img className="card-img-top w-50" src="./img/VietceteraContent/right/pic6.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Vì sao chúng ta không thể ngừng xem video nấu ăn?</p>
                    </div>
                </div>
                <div className="card d-flex flex-row mt-4" style={{ width: '18rem' }}>
                    <img className="card-img-top w-50" src="./img/VietceteraContent/right/pic7.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Vì sao chúng ta không thể ngừng xem video nấu ăn?</p>
                    </div>
                </div>
                <div className="card d-flex flex-row  mt-4" style={{ width: '18rem' }}>
                    <img className="card-img-top w-50" src="./img/VietceteraContent/right/pic8.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Vì sao chúng ta không thể ngừng xem video nấu ăn?</p>
                    </div>
                </div>
                <div className="card d-flex flex-row  mt-4" style={{ width: '18rem' }}>
                    <img className="card-img-top w-50" src="./img/VietceteraContent/right/pic8.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Vì sao chúng ta không thể ngừng xem video nấu ăn?</p>
                    </div>
                </div>



            </div>
        </div>
    )
}
