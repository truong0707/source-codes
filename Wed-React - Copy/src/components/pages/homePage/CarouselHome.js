export default function CarouselHome() {

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://itguru.vn/blog/wp-content/uploads/2021/05/full-stack-developer-02-945x496.png"
                          style={{
                            height: "400px",
                            color: "#f5f5f5"
                          }}
                         className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://topdev.vn/blog/wp-content/uploads/2019/08/the-nao-la-mot-lap-trinh-vien-full-stack.png" 
                        style={{
                            height: "400px",
                            color: "#f5f5f5"
                          }}
                        className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://1.bp.blogspot.com/-sRu_stMsyVM/XZ63Oe8uKVI/AAAAAAAAV7U/1M-M_UAOIQQ4-aePXs9tsLsEab_BdDRqgCLcBGAsYHQ/s1600/FULL-STACK-DEV.png" 
                        style={{
                            height: "400px",
                            color: "#f5f5f5"
                          }}
                        className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}