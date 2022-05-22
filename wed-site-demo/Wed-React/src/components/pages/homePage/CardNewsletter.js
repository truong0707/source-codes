import React from "react";
import Carousel from "react-elastic-carousel";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 0, itemsToShow: 4 },
  ];
  

export default function CardNewsletter() {
    // https://swiperjs.com/demos
    return (
        <>
      <div style={{width: "98%"}}>
        <Carousel breakPoints={breakPoints}>
          {/* <Item>One</Item>
          <Item>One</Item> */}
          <div style={{height: "250px"}}>cc</div>
          <img style={{height: "250px", borderRadius: "20px"}} src={"https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          <img style={{height: "250px", borderRadius: "20px"}} src={"https://c1.staticflickr.com/1/955/41244725305_cea7536da1_o.jpg"}/>
          <img style={{height: "250px", borderRadius: "20px"}} src={"http://thanhxuaan.com/wp-content/uploads/2020/11/1270445513713171908111072729996585811029427n-1606261388075533287962.jpg"}/>
          <img style={{height: "250px", borderRadius: "20px"}} src={"https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          <img style={{height: "250px", borderRadius: "20px"}} src={"https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
          {/* <Item>Â</Item> */}
        </Carousel>
      </div>
        </>

    );
}
