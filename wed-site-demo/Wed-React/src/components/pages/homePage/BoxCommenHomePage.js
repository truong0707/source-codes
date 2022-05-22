import { Container, Row, Col } from 'react-bootstrap'

export default function BoxCommentHomePage () {

    return(

        <>
        <Container style={{marginTop: "30px", width: "80%", height: "150px", borderRadius: "10px", background: "white"}}>
            <Col>
                <Row md={6}>
                    <Col md={1}>User</Col>
                    <Col md={11}> <input style={{height: "45px", borderRadius: "20px", width: "80%"}} placeholder="User ơi bạn đang nghĩ gì vậy?" /></Col>
                </Row>
                <Row md={6}>
                    <Col md={4}>Video trực tiếp</Col>
                    <Col md={4}>Ảnh/Video</Col>
                    <Col md={4}>Cảm Xúc/Hoạt động</Col>
                </Row>
            </Col>
        </Container>
        </>
    );
}