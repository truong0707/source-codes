
export default function CardKHCBHome(props) {

    return (
        <>
            <div className="col-md-3 col-xl-3 ">
                <div className="card card-color card-KHCB-Home">   
                    <img src={props.imgs}
                    style={{
                        backgroundSize: "cover",
                        height: "170px",
                        width: "100%",
                        color: "#f5f5f5"
                      }}
                     className="card-img-top" alt="Sản Phẩm" />
                    <div className="card-body">
                        <h5 className="card-title">Khóa học: {props.khoahocCB}</h5>
                        <p className="card-text color-price">Trạng thái: {props.status}</p>
                        <h6 className ="card-text">Tướng:  165</h6>
                        <button className="btn btn-primary"/*  onClick={() => addItem(props.item)} */>Hoc ngay</button>
                    </div>
                </div>
            </div>
        </>
    );
}