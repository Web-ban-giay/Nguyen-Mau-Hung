import React, { Component } from 'react';
class Info extends Component {
    render() {
        return (
            <div className="App">
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="col-md-5 contact-left">
                            <h6>Thông tin liên lạc</h6>
                            <div className="visit">
                                <div className="col-md-2 col-sm-2 col-xs-2 contact-icon">
                                    <span className="fa fa-home" aria-hidden="true"></span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10 contact-text">
                                    <h4>Địa chỉ</h4>
                                    <p>72/2 đường Làng Tăng Phú, phường Tăng Nhơn Phú A, Quận 9.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="mail-us">
                                <div className="col-md-2 col-sm-2 col-xs-2 contact-icon">
                                    <span className="fa fa-envelope" aria-hidden="true"></span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10 contact-text">
                                    <h4>Email</h4>
                                    <p><a href="mailto:info@example.com">pnsport2000@gamil.com</a></p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="call">
                                <div className="col-md-2 col-sm-2 col-xs-2 contact-icon">
                                    <span className="fa fa-phone" aria-hidden="true"></span>
                                </div>
                                <div className="col-md-10 col-sm-10 col-xs-10 contact-text">
                                    <h4>Điện thoại</h4>
                                    <p>+18044261149</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>

                        </div>
                        <div className="clearfix"> </div>

                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}
export default Info;