

import React, { useState, useEffect, useRef } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import randomColor from 'randomcolor';

import './Phone.scss';
import {
    AiFillStar
} from "react-icons/ai";
import {
    IoIosAddCircleOutline
} from "react-icons/io";
import { getAllProductHomeService } from '../../../services/userService';
import Banner from '../partial/banner/Banner';
import Search from '../../../utils/Search';
import Sticked from '../partial/sticked/Sticked';
const Phone = () => {
    let navigate = useNavigate();
    const outletContext = useOutletContext();
    const color = randomColor(); // a hex code for an attractive color
    const myRef = useRef()
    const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7]);
    const [limit, setLimit] = useState(10);

    let dataRender = [...products]
    if (!outletContext.titleSearch) {
    } else {
        dataRender = Search(products, outletContext);
    }


    useEffect(() => {
        const fetch = async (e) => {
            const res = await getAllProductHomeService(limit, 'PL1');
            if (res && res.errCode === 0) {
                setProducts(res.data)
            }
        };
        fetch()
    }, [limit]);

    const renderStar = (star) => {
        const length = star
        let result = []
        for (let i = 0; i < length; i++) {
            let data = <AiFillStar className='star' key={i} />
            result.push(data)

        }
        return result
    }
    const handleSetLimit = (e) => {
        if (limit <= products.length) {
            console.log('tang')
            setLimit((prev) => {
                return prev + 10
            })
        }

    };
    const handleRedirect = (item) => {
        navigate(`/phone/${item.nameItem}/${item.id}`)
    };
    return (
        <>
            <Sticked />
            <div className="phone__container">
                <div className="phone__banner">
                    <Banner />
                </div>
                <div className="phone__filter"> <img className='img__top__nav' style={{ top: '0' }} src='https://scontent.xx.fbcdn.net/v/t1.15752-9/275324637_374867867825981_2618128450721432063_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=sNtVKKbGxpQAX9m9Mfh&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKhqBT2Xs96uxnx1YaR8Ebbk2wpjqRrrDdWXwExk8WfHw&oe=626CD6EB' alt='' /></div>
                <div className="container phone__product">
                    <div className="row phone__product-list">
                        {dataRender && dataRender.length > 0 && dataRender.map((item, index) => {
                            const star = 5
                            return (
                                <div
                                    onClick={() => handleRedirect(item)}
                                    className="col-md-3 phone__item"
                                    key={index}
                                >
                                    <div className="phone__installment">Tr??? g??p 0%</div>

                                    <div className="phone__img"
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                        }}
                                    ></div>
                                    <div className="item__content">
                                        <p className="result-label temp2"
                                            style={{
                                                backgroundColor: `${color}`
                                            }}
                                        >
                                            <img
                                                width="20"
                                                height="20"
                                                className=" ls-is-cached lazyloaded"
                                                alt="??u ????i ?????n 4 Tri???u"
                                                data-src="https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png"
                                                src="https://cdn.tgdd.vn/2020/10/content/icon2-50x50.png" />
                                            <span>??u ????i ?????n 4 Tri???u</span>
                                        </p>
                                        <div className="phone__name">{item.nameItem}</div>
                                        <div className="phone__rom"><span>{item.ram}/{item.rom}</span></div>
                                        <div className="phone__price">{item.price}???</div>
                                        <div className="phone__gif">Qu?? 2.000.000???</div>
                                        <div className="phone__vote">
                                            {item.vote ? renderStar(star) : <span>Ch??a c?? ????nh gi??</span>}
                                            {/* <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star' />
                                    <AiFillStar className='star disabled' /> */}
                                            {/* <span>10</span> */}
                                        </div>
                                        <div className="phone__compare">
                                            <span><IoIosAddCircleOutline />So s??nh</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="product__add-more">
                        <button
                            onClick={handleSetLimit}
                            className="btn__add-more"
                        >{limit <= products.length ? 'Xem th??m 10 S???n ph???m' : 'Kh??ng c??n s???n ph???m n??o n???a'}</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Phone;