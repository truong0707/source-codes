import React, {Component} from 'react';
import {LocationOn } from '@material-ui/icons';
import {AlarmRounded} from '@material-ui/icons';
import {AddIcCallRounded} from '@material-ui/icons';
import {MailOutline} from '@material-ui/icons';
import './footer.scss' ;
export default class Footer extends Component {
    render() {
        return (
                <div className="footerContainer">
                    <div className="row">
                        <div className="row-1">
                            <div className="name-footer-group-1">
                                <h2 className="name_footer_h">MOVIE PLAY</h2>
                                <h4 className="name_footer_h_1">Chăm sóc khách hàng</h4>
                                <div className="name_footer_p">
                                    <div className="name_footer_p_1">
                                        <LocationOn  className="icon" />
                                        <p className="name_footer_p_1_1">Tầng 1, ĐH Đông Á, Hải Châu, Đà Nẵng</p>
                                    </div>
                                    
                                    <div className="name_footer_p_1"><br/>
                                        <AddIcCallRounded className="icon"/>
                                        <p className="name_footer_p_1_1">Số điện thoại: 1900 2210 2001</p>
                                    </div>   

                                    <div className="name_footer_p_1">
                                        <AlarmRounded className="icon"/>
                                        <p className="name_footer_p_1_1">Giờ làm việc: 24/24 (Tất cả các ngày bao gồm cả Lễ Tết)</p>
                                    </div>
                                    <div className="name_footer_p_1">
                                        <MailOutline className="icon"/>
                                        <p className="name_footer_p_1_1">Email hỗ trợ: hoidap@nvl.vn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="name-footer-group-2">
                                <h4 className="name_footer_h_2">Công ty</h4>
                                <div className="name_footer_p_2">
                                    <a className="name_footer_a_1" href="">Về chúng tôi</a><br/>
                                    <a className="name_footer_a_1" href="">Đối tác</a><br/>
                                    <a className="name_footer_a_1" href="">Phương tiện truyền thông</a>                                          <br/>
                                    <a className="name_footer_a_1" href="">Sơ đồ trang web</a>    
                                </div>
                            </div>
                        </div>
                        <div className="row-3">
                            <div className="name-footer-group-3">
                                <h4 className="name_footer_h_3">Ứng dụng của chúng tôi</h4>
                                <div className="name_footer_p_3">
                                    
                                    <div className="name_footer_p_3_1">
                                        <img src='https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg' alt="" className='img_1' />
                                        <p className="name_footer_p_3_1_1">App Store</p>
                                        <a className="name_footer_a_2" href="#" color="primary">Tải ngay</a>
                                    </div>
                                    <br/>
                                    
                                    <div className="name_footer_p_3_2">
                                        <img src='https://iconape.com/wp-content/files/fa/64777/png/google-play-store.png' alt="" className='img_2' />
                                        <p className="name_footer_p_3_1_1">CH Play</p>
                                        <a className="name_footer_a_2" href="#" color="primary">Tải ngay</a>
                                    </div>
                                     <div className="name_footer_p_3_3">
                                        <p className="name_footer_p_3_3_1">Theo dõi chúng tôi tại</p>
                                        <div class="name_footer_p_3_3_2">
                                            <div class="text">Hãy theo dõi chúng tôi!</div>
                                        </div>
                                        <img src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-11.png' alt="" className='img_3' />
                                        <img src='https://iconape.com/wp-content/files/gb/61849/png/facebook-icon.png' alt="" className='img_3' />
                                        <img src='https://iconape.com/wp-content/files/yz/353311/png/353311.png' alt="" className='img_3'  />
                                        <img src='https://iconape.com/wp-content/files/re/285939/png/tiktok-icon-logo.png' alt="" className='img_3' />
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div className="row-4">
                        
                        <div className="name-footer-group-4"> 
                            <p>Bản quyền © 2021-2030 cinematicket. Ltd: Mọi quyền được bảo lưu</p>
                        </div>
                        <div className="name_footer_p_4">
                            <p className="name_footer_p_4_1">Chính sách người dùng</p>
                            <p className="name_footer_p_4_1">Điều kiện </p>
                            <p className="name_footer_p_4_1">Sự riêng tư </p>
                        </div>
                                                         
                    </div>   
                </div>
        );
    }
}

