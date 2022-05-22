
export default function CardKHNCHome(props) {

    return (
        <>
            <div className="col-md-3 col-xl-3 ">
                <div className="card card-color card-KHNC-Home">   
                    <img src={props.imgs}
                    style={{
                        backgroundSize: "cover",
                        height: "170px",
                        width: "100%",
                        color: "#f5f5f5"
                      }}
                     className="card-img-top" alt="Sản Phẩm" />
                    <div className="card-body">
                        <h5 className="card-title">Khóa học: <p>{props.khoahocNC}</p></h5>
                        <p className="card-text">Trạng thái: {props.status}</p>
                        <p className ="card-text">Giá: {props.prices} </p>
                       {/*  <p className ="card-text">Giảm còn: {props.prices} </p> */}
                        <button className="btn btn-primary"/*  onClick={() => addItem(props.item)} */>Mua ngay</button>
                    </div>
                </div>
            </div>
        </>
    );
}