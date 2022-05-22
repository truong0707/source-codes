import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartContext } from '../store/Context';
import { useContext } from 'react';




export default function DetailProduct() {
    const [cardProduct, setCardProduct] = useState([]);
    const location = useLocation();
    const path = location.pathname.split("/")[2]; /* cat id */
    const { addToCart } = useContext(CartContext);


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/card-product/products_by_id?id=${path}`).then((res) => {
            setCardProduct(res.data.productDetail[0])
        })
    },[path])


    return (
        <>
            <div style={{ marginTop: '50px' }} className='Wrap__detail__product'>
                <div className='container-fluid contentDetail'>
                    <div>
                        <img style={{ minHeight: '290px', maxWidth: '250px' }} src={cardProduct.imgCard} alt='' />
                    </div>

                    <div style={{ marginLeft: '25px', width: '50%' }}>
                        <div className='wrap__ifo__detail'>
                            <h5>{cardProduct.nameCard}</h5>
                            <p>{cardProduct.Price}</p>
                            <p>Chọn size: </p>
                            <p>Màu sắc: </p>
                            <p>Số lượng: </p>
                        </div>

                        <div style={{marginTop:'104px'}} className='wrap__groupButton__detail'>
                            <div className='button__add__card'><p onClick={() => addToCart(cardProduct)} style={{ margin: 'auto' }}>Thêm vào giỏ hàng</p></div>
                            <div className='button__buy__now'><p style={{ margin: 'auto' }}>Mua ngay</p></div>
                        </div>

                        {/*  */}
                        <div className='button__check__shop'><p style={{ margin: 'auto' }}>Đang có tại các cửa hàng</p></div>

                    </div>
                    {/* <p style={{ height: '280px', width: '1px', background: '#E0E0E0', marginLeft: '15px', marginRight: '15px' }}></p>

                    <div style={{ width: '23%', color: '#2D2D2D', fontSize: '14px' }}>
                        <p>» BẢO HÀNH SẢN PHẨM 90 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                    </div> */}

                </div>
            </div>
        </>

    )
}
