import React, { Component } from 'react';
import Mid from '../Index/Mid_slider';
import Header from '../Header/Header';
import Footter from '../Footer/Footer';
import Newletter from '../Footer/Newletter';

class Payment extends Component {
  render() {
    return (

      <div className="App">
        < Header />
        <div className="ads-grid_shop">
          <div className="shop_inner_inf">
            <div className="privacy about">
              <h3>Thanh <span>toán</span></h3>
              {/*/tabs*/}
              <div className="responsive_tabs">
                <div id="horizontalTab">
                  <ul className="resp-tabs-list">
                    <li>Thu tiền khi nhận hàng</li>
                    <li>Tín dụng</li>
                    <li>Thẻ ngân hàng</li>
                    <li>Tài khoản Paypal</li>
                  </ul>
                  <div className="resp-tabs-container">
                    {/*/tab_one*/}
                    <div className="tab1">
                      <div className="pay_info">
                        <div className="vertical_post check_box_agile">
                          <h5>COD</h5>
                          <div className="checkbox">
                            <div className="check_box_one cashon_delivery">
                              <label className="anim">
                                <input type="checkbox" className="checkbox" />
                                <span> Quý khách thanh toán khi nhận được sản phẩm giao đến.</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*//tab_one*/}
                    <div className="tab2">
                      <div className="pay_info">
                        <form action="#" method="post" className="creditly-card-form agileinfo_form">
                          <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                            <div className="credit-card-wrapper">
                              <div className="first-row form-group">
                                <div className="controls">
                                  <label className="control-label">Tên trên thẻ</label>
                                  <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                                </div>
                                <div className="w3_agileits_card_number_grids">
                                  <div className="w3_agileits_card_number_grid_left">
                                    <div className="controls">
                                      <label className="control-label">Số thẻ</label>
                                      <input className="number credit-card-number form-control" type="text" name="number" inputMode="numeric" autoComplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder="•••• •••• •••• ••••" />
                                    </div>
                                  </div>
                                  <div className="w3_agileits_card_number_grid_right">
                                    <div className="controls">
                                      <label className="control-label">CVV</label>
                                      <input className="security-code form-control" Â· inputMode="numeric" type="text" name="security-code" placeholder="•••" />
                                    </div>
                                  </div>
                                  <div className="clear"> </div>
                                </div>
                                <div className="controls">
                                  <label className="control-label">Ngày hết hạn</label>
                                  <input className="expiration-month-and-year form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                                </div>
                              </div>
                              <button className="submit"><span>Thực hiện thanh toán </span></button>
                            </div>
                          </section>
                        </form>
                      </div>
                    </div>
                    <div className="tab3">
                      <div className="pay_info">
                        <div className="vertical_post">
                          <form action="#" method="post">
                            <h5>Chọn các ngân hàng phổ biến</h5>
                            <div className="swit-radio">
                              <div className="check_box_one">
                                <div className="radio_one"> <label><input type="radio" name="radio" defaultChecked /><i />AgriBank</label> </div>
                              </div>
                              <div className="check_box_one">
                                <div className="radio_one"> <label><input type="radio" name="radio" /><i />VietcomBank</label> </div>
                              </div>
                              <div className="check_box_one">
                                <div className="radio_one"> <label><input type="radio" name="radio" /><i />SacomBank</label> </div>
                              </div>
                              <div className="check_box_one">
                                <div className="radio_one"> <label><input type="radio" name="radio" /><i />TechcomBank</label> </div>
                              </div>
                              <div className="check_box_one">
                                <div className="radio_one"> <label><input type="radio" name="radio" /><i />BIDV</label> </div>
                              </div>
                              <div className="clearfix" />
                            </div>
                            <h5>Hoặc chọn ngân hàng khác</h5>
                            <div className="section_room_pay">
                              <select className="year"><option value>=== Other Banks ===</option><option value="ALB-NA">Allahabad Bank NetBanking</option><option value="ADB-NA">Andhra Bank</option><option value="BBK-NA">Bank of Bahrain and Kuwait NetBanking</option><option value="BBC-NA">Bank of Baroda Corporate NetBanking</option><option value="BBR-NA">Bank of Baroda Retail NetBanking</option><option value="BOI-NA">Bank of India NetBanking</option><option value="BOM-NA">Bank of Maharashtra NetBanking</option><option value="CSB-NA">Catholic Syrian Bank NetBanking</option><option value="CBI-NA">Central Bank of India</option><option value="CUB-NA">City Union Bank NetBanking</option><option value="CRP-NA">Corporation Bank</option><option value="DBK-NA">Deutsche Bank NetBanking</option><option value="DCB-NA">Development Credit Bank</option><option value="DC2-NA">Development Credit Bank - Corporate</option><option value="DLB-NA">Dhanlaxmi Bank NetBanking</option><option value="FBK-NA">Federal Bank NetBanking</option><option value="IDS-NA">Indusind Bank NetBanking</option><option value="IOB-NA">Indian Overseas Bank</option><option value="ING-NA">ING Vysya Bank (now Kotak)</option><option value="JKB-NA">Jammu and Kashmir NetBanking</option><option value="JSB-NA">Janata Sahakari Bank Limited</option><option value="KBL-NA">Karnataka Bank NetBanking</option><option value="KVB-NA">Karur Vysya Bank NetBanking</option><option value="LVR-NA">Lakshmi Vilas Bank NetBanking</option><option value="OBC-NA">Oriental Bank of Commerce NetBanking</option><option value="CPN-NA">PNB Corporate NetBanking</option><option value="PNB-NA">PNB NetBanking</option><option value="RSD-DIRECT">Rajasthan State Co-operative Bank-Debit Card</option><option value="RBS-NA">RBS (The Royal Bank of Scotland)</option><option value="SWB-NA">Saraswat Bank NetBanking</option><option value="SBJ-NA">SB Bikaner and Jaipur NetBanking</option><option value="SBH-NA">SB Hyderabad NetBanking</option><option value="SBM-NA">SB Mysore NetBanking</option><option value="SBT-NA">SB Travancore NetBanking</option><option value="SVC-NA">Shamrao Vitthal Co-operative Bank</option><option value="SIB-NA">South Indian Bank NetBanking</option><option value="SBP-NA">State Bank of Patiala NetBanking</option><option value="SYD-NA">Syndicate Bank NetBanking</option><option value="TNC-NA">Tamil Nadu State Co-operative Bank NetBanking</option><option value="UCO-NA">UCO Bank NetBanking</option><option value="UBI-NA">Union Bank NetBanking</option><option value="UNI-NA">United Bank of India NetBanking</option><option value="VJB-NA">Vijaya Bank NetBanking</option></select>
                            </div>
                            <input type="submit" defaultValue="PAY NOW" />
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab4">
                      <div className="pay_info">
                        <div className="col-md-6 tab-grid">
                          <img className="pp-img" src="assets/images/paypal.png" alt="Image Alternative text" title="Image Title" />
                          <p>Quan trọng: Bạn sẽ được chuyển hướng đến trang web của PayPal để hoàn tất thanh toán của mình một cách an toàn.</p><a className="btn btn-primary">Thanh toán qua Paypal</a>
                        </div>
                        <div className="col-md-6">
                          <form className="cc-form">
                            <div className="clearfix">
                              <div className="form-group form-group-cc-number">
                                <label>Số thẻ</label>
                                <input className="form-control" placeholder="xxxx xxxx xxxx xxxx" type="text" /><span className="cc-card-icon" />
                              </div>
                              <div className="form-group form-group-cc-cvc">
                                <label>CVV</label>
                                <input className="form-control" placeholder="xxxx" type="text" />
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="form-group form-group-cc-name">
                                <label>Tên chủ thẻ</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group form-group-cc-date">
                                <label>Ngày hết hạn</label>
                                <input className="form-control" placeholder="mm/yy" type="text" />
                              </div>
                            </div>
                            <div className="checkbox checkbox-small">
                              <label>
                                <input className="i-check" type="checkbox" defaultChecked />Thanh toán ngay</label>
                            </div>
                            <input className="btn btn-primary submit" type="submit" defaultValue="Proceed Payment" />
                          </form>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*//tabs*/}
            </div>
          </div>
          {/* //payment */}
          <div className="clearfix" />
        </div>
        <Mid></Mid>
        <Newletter />
        <Footter />

      </div>
    );
  }
}
export default Payment;