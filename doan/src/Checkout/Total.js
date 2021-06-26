import React, { Component } from 'react';
class Total extends Component {
    render() {
        return (
            <div className="App">
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="privacy about"></div>
                        <div className="checkout-left">
                            <div className="col-md-4 checkout-left-basket">
                                <h4>Hóa đơn</h4>
                                <ul>
                                    <li>Product1 <i>-</i> <span>$675.00 </span></li>
                                    <li>Product2 <i>-</i> <span>$325.00 </span></li>
                                    <li>Product3 <i>-</i> <span>$405.00 </span></li>
                                    <li>Total Service Charges <i>-</i> <span>$55.00</span></li>
                                    <li>Tổng tiền <i>-</i> <span>$1405.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Total;