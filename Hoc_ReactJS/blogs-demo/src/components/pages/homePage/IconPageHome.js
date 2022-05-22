import React from 'react';
import { FcShipped } from 'react-icons/fc';

export default class IconPageHome extends React.Component {
    render() {
        return (
            <div className="container IconBlogHome">
                <div className="row">
                    <div className="col">
                        <h3> <FcShipped /> </h3>
                        <p>Free Shipping</p>
                        <p>ON ORDER OVER $100</p>
                    </div>
                    <div className="col">
                        <h3><FcShipped /></h3>
                        <p>ALWAYS FRESH</p>
                        <p>ON ORDER OVER $100</p>
                    </div>

                    <div className="col">
                        <h3> <FcShipped /> </h3>
                        <p>SUPERIOR QUALITY</p>
                        <p>ON ORDER OVER $100</p>
                    </div>

                    <div className="col">
                        <h3> <FcShipped /> </h3>
                        <p>SUPPORT</p>
                        <p>ON ORDER OVER $100</p>
                    </div>
                </div>
            </div>
        );
    }
}