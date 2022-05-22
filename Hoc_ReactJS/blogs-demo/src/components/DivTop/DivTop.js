import { Row, Col } from "react-bootstrap"
import { AiTwotonePhone } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';
import "./DivTop.css"

export default function DivTop() {

    return (
        <div className="DivTop">
            <Row>
                <Col> <AiTwotonePhone /> + 1235 2355 98</Col>
                <Col> <FaRegPaperPlane /> YOUREMAIL@EMAIL.COM</Col>
                <Col>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</Col>
            </Row>
        </div>

    );
}
