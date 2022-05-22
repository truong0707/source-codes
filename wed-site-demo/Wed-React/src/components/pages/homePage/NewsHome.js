import { Container, Col } from "react-bootstrap"


export default function NewsHome() {
    return (
        <Container style={{ marginTop: "40px" }} className="boxNewsHome" >
            <Col>
                <Col>
                    <div className="row headingBoxNews">
                        <div className="col-md-1">
                            <img style={{ weight: "60px", height: "60px", borderRadius: "100%", marginTop: "10px" }} src="https://tse3.mm.bing.net/th?id=OIP.hcsZNUwwndJVs5zLBGMQmwHaHa&pid=Api&P=0&w=183&h=183" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div clasName="row-md-6">Blogtamsu Chuyện Chúng Mình </div>
                            <div clasName="row-md-6">Hôm Qua </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="ss"></div>
                    {/* <img src={"https://tse4.mm.bing.net/th?id=OIP.2_lgKXkpAXmSReoaPnrvAgHaEK&pid=Api&P=0&w=276&h=155"} /> */}
                </Col>
                <Col>1</Col>
                <Col>1</Col>
            </Col>
        </Container>
    );
}