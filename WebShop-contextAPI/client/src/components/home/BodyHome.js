import React from 'react';
import BoxTitle from '../reuseComponents/BoxTitle';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduct from '../reuseComponents/CardProduct';
import '../home/Home.css'
import SliderProduct from '../reuseComponents/SliderProduct';
// import { useContext } from 'react';
// import { CardProductContext } from '../../store/Context';

// icon
export default function BodyHome() {
    // const { cardProduct } = useContext(CardProductContext)
    const [cards, setCards] = useState([]);
    const [limit, setLimit] = useState(5);


    const handleShowMoreCard = () => {
        if (limit > 5) {
            alert("Hết hàng rồi ba :((")
        } else {
            setLimit(pre => pre + 4)
        }

    }


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/card-products`)
            .then(datas => setCards(datas.data.productCards));
    }, [])

    return (
        <>
            <div className='body__home__page'>
                <div className='container-fluid content__body__home'>
                    <div style={{ marginTop: "40px" }}>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et"
                            styleCard={{ textAlign: "center" }}
                        />
                    </div>


                    {/*  Card Product Body Home  */}
                    <div>xxssssssssssssssssssssssssssssss</div>
                    <div className="list-products-body-home">
                        {cards.slice(0, limit).map((card) => (
                            <CardProduct
                                key={card._id}
                                productId={card._id}
                                imageCard={card.imgCard}
                                nameCard={card.nameCard}
                                descriptionCard={card.descriptionCard}
                            />
                        ))}
                    </div>

                    {/*  Button load card Body home */}
                    <div className='box-btn-card-body-home'>
                        <div className='button-loat-cards-body-home' onClick={handleShowMoreCard}>
                            <p>Load more</p >
                        </div>
                    </div>
                </div>

                {/* image content */}
                <img style={{height:'460px', width:'100%', marginTop:'20px'}} src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/banner-1-compressor_1920x.jpg?v=1541390762' alt='' />

                <div style={{ marginTop: "25px" }}>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et"
                            styleCard={{ textAlign: "center" }}
                        />
                    </div>

                <div className='container-fluid content__body__home'>
                    <div className='container-fluid wrap__slider__product'>
                        <SliderProduct />
                    </div>
                </div>

            </div>
        </>
    )
}






















{/* // */ }
{/* <div className='box-item-service'>
                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>

                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>

                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>

                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>
                </div> */}