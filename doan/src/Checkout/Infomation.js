import React, { Component } from 'react';
class Infomation extends Component {
    render() {
        return (
            <div className="App">
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="privacy about">
                            <div className="col-md-8 address_form">
                                <h4>Thông tin </h4>
                                <form action="/Payment" method="post" className="creditly-card-form agileinfo_form">
                                    <section className="creditly-wrapper wrapper">
                                        <div className="information-wrapper">
                                            <div className="first-row form-group">
                                                <div className="controls">
                                                    <label className="control-label">Họ và tên: </label>
                                                    <input className="billing-address-name form-control" type="text" name="name" placeholder="Họ và tên" />
                                                </div>
                                                <div className="card_number_grids">
                                                    <div className="card_number_grid_left">
                                                        <div className="controls">
                                                            <label className="control-label">Số điện thoại:</label>
                                                            <input className="form-control" type="text" placeholder="Số điện thoại" />
                                                        </div>
                                                    </div>
                                                    <div className="card_number_grid_right">
                                                        <div className="controls">
                                                            <label className="control-label">Địa chỉ: </label>
                                                            <input className="form-control" type="text" placeholder="Địa chỉ" />
                                                        </div>
                                                    </div>
                                                    <div className="clear"> </div>
                                                </div>


                                            </div>
                                            <button className="submit check_out">Giao hành đến địa chỉ này</button>
                                        </div>
                                    </section>
                                </form>
                                <div className="checkout-right-basket">
                                    <a href="/Payment">Thanh toán </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Infomation;