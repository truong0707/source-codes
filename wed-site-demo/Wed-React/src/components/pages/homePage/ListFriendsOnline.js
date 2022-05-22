import {
    ListGroup
} from 'react-bootstrap';


const axios = require('axios').default;



export default function ListFriendsOnline() {

    function alertClicked() {
        axios({
            method: 'GET',
            url: ' http://localhost:3000/comments',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => {
            console.log(res.data)
            
        })
    };

    alertClicked()

  
  

    return (
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item style={{ border: 0, fontSize: 18 }} action >
                <div className='row'>
                    <div className='col-md-2'>
                        <img className="" src={"https://tse4.mm.bing.net/th?id=OIP.a2boT9vs3hVVD1Y0bAHPLAHaGl&pid=Api&P=0&w=192&h=170"} style={{ borderRadius: "80%", width: "50px" }} alt="anhUser1" />
                    </div>
                    <div className="col-md-10">
                        <h4 style={{ marginTop: "10px" }}>Anh Vũ</h4>
                    </div>
                </div>
            </ListGroup.Item>

            <ListGroup.Item style={{ border: 0, fontSize: 18 }} action >
                <div className='row'>
                    <div className='col-md-2'>
                        <img className="" src={"https://tse4.mm.bing.net/th?id=OIP.a2boT9vs3hVVD1Y0bAHPLAHaGl&pid=Api&P=0&w=192&h=170"} style={{ borderRadius: "80%", width: "50px" }} alt="anhUser1" />
                    </div>
                    <div className="col-md-10">
                        <h4 style={{ marginTop: "10px" }}>Quang Nguyễn</h4>
                    </div>
                </div>
            </ListGroup.Item>

            <ListGroup.Item style={{ border: 0, fontSize: 18 }} action >
                <div className='row'>
                    <div className='col-md-2'>
                        <img className="" src={"https://tse4.mm.bing.net/th?id=OIP.a2boT9vs3hVVD1Y0bAHPLAHaGl&pid=Api&P=0&w=192&h=170"} style={{ borderRadius: "80%", width: "50px" }} alt="anhUser1" />
                    </div>
                    <div className="col-md-10">
                        <h4 style={{ marginTop: "10px" }}>Trường Nguyễn</h4>
                    </div>
                </div>
            </ListGroup.Item>

            <ListGroup.Item style={{ border: 0, fontSize: 18 }} action >
                <div className='row'>
                    <div className='col-md-2'>
                        <img className="" src={"https://tse4.mm.bing.net/th?id=OIP.a2boT9vs3hVVD1Y0bAHPLAHaGl&pid=Api&P=0&w=192&h=170"} style={{ borderRadius: "80%", width: "50px" }} alt="anhUser1" />
                    </div>
                    <div className="col-md-10">
                        <h4 style={{ marginTop: "10px" }}>Văn Sơn</h4>
                    </div>
                </div>
            </ListGroup.Item>
        </ListGroup>
    );

}