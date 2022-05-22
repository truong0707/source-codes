import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardBody1 from "./Card1Body/CardBody1";
import CardBody2 from "./Card2Body/CardBody2";

// Khai báo 1 đoạn dữ liệu

const List1Blog = [
  {
    "id": 1,
    "text": "Even the all-powerful Pointing has no control about the blind texts",
    "img": "https://tse3.mm.bing.net/th?id=OIP.s5zIckc53My5uXD5EH-TAQHaFj&pid=Api&P=0&w=235&h=176",
    "cmt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },

  {
    "id": 2,
    "text": "Even the all-powerful Pointing has no control about the blind texts",
    "img": "https://tse4.mm.bing.net/th?id=OIP.nQVVzePVbc6SMNjI8hsuRAHaE6&pid=Api&P=0&w=278&h=185",
    "cmt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },

  {
    "id": 3,
    "img": "https://www.chuatribenhmatngu.com/wp-content/uploads/2017/01/cac-loai-trai-cay-co-loi-cho-nguoi-bi-tai-bien-1-scaled.jpg",
    "text": "Even the all-powerful Pointing has no control about the blind texts",
    "cmt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },

  {
    "id": 4,

    "img": "https://vietfarms.com.vn/uploads/qua-cherry-la-qua-gi.jpg",
    "text": "Even the all-powerful Pointing has no control about the blind texts",
    "cmt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },

  {
    "id": 5,
    "img": "https://tse4.mm.bing.net/th?id=OIP.PzGIHUv9Y93PskMEfzWK8gHaFj&pid=Api&P=0&w=217&h=163",
    "text": "Even the all-powerful Pointing has no control about the blind texts",
    "cmt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },

  {
    "id": 6,
    "img": "https://tse4.mm.bing.net/th?id=OIP.PzGIHUv9Y93PskMEfzWK8gHaFj&pid=Api&P=0&w=217&h=163",
    "text": "Even the all-powerful Pointing has no control about the blind texts",
    "cmt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },

]


function Body() {

  return (
    <Router>
      <div className="container-fluid">
        <div className="AllBody">
          <div className="row">
            <div className="col">
              {List1Blog.map(List1Blog => (
                <CardBody1
                  key={List1Blog.id}
                  text={List1Blog.text}
                  img={List1Blog.img}
                  cmt={List1Blog.cmt}
                />
              ))}
            </div>


            <div className="col">
              <div className="Box2Body">
                <CardBody2 />
              </div>
            </div>
          </div>

        </div>

      </div>

      <Route exact path="/B" component={CardBody2} />

    </Router>


  );
}
// nếu dùng props trong class component thì bỏ this vào vd: {this.props.name} 
export default Body;


