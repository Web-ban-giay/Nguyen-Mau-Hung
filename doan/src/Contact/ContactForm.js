import React, { Component } from 'react';
import Info from '../Contact/ContactInfo';
import Map from '../Contact/Map';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newletter from '../Footer/Newletter';
class Form extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <h3 className="head">Liên Hệ</h3>
                        <p className="head_para">Liên hệ với chúng tôi</p>
                        <div className="inner_section_w3ls">
                            <div className="col-md-7 contact_grid_right">
                                <h6>Vui long điền vào biểu mẫu.</h6>
                                <form action="#" method="post">
                                    <div className="col-md-6 col-sm-6 contact_left_grid">
                                        <input type="text" name="Name" placeholder="Tên" required="" />
                                        <input type="email" name="Email" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-md-6 col-sm-6 contact_left_grid">
                                        <input type="text" name="Telephone" placeholder="Số điện thoại" required="" />
                                        <input type="text" name="Subject" placeholder="Subject" required="" />
                                    </div>
                                    <div className="clearfix"> </div>
                                    <textarea name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Nhận xét...</textarea>
                                    <input type="submit" value="Gửi" />
                                    <input type="reset" value="Xóa" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <Info />
                    <Map />
                </div>
                <Newletter />
                <Footer />
            </div>
        );
    }
}
export default Form;