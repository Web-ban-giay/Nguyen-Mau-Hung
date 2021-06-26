import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newletter from '../Footer/Newletter';
import Mid from '../Index/Mid_slider';
class About extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <h3 className="head">Giới thiệu</h3>
                        <p className="head_para">Một số mô tả</p>
                        <div className="inner_section_w3ls">
                            <div className="col-md-6 news-left">
                                <img src="assets/images/ab.jpg" alt=" " className="img-responsive" />
                            </div>
                            <div className="col-md-6 news-right">
                                <h4>Chào mừng bạn đến với Phương Nam Sport</h4>
                                <p className="sub_p">Phương Nam Sport chuyên cung cấp các dòng sản phẩm giày thể thao phục vụ cho mọi lứa tuổi. Nhằm mục đích nâng cao sức khỏe người Việt.
                                </p>
                                <p className="sub_p">Thể thao cho bạn một cơ thể khỏe mạnh hơn/dẻo dai hơn/bền bỉ hơn/linh hoạt hơn mỗi ngày, giúp tăng sức đề kháng chống lại bệnh tật.
                                </p>
                                <p className="sub_p">Thể thao giúp giảm cân cho người mập, kích thích ăn uống để tăng cân cho người gầy. Thể thao làm cho cơ bắp phát triển, tạo nên thể hình cân đối, cường tráng cho bạn nam. Thể thao giúp cơ thể săn chắc, tạo nên dáng vóng và tư thế chuẩn, đẹp và gợi cảm cho bạn nữ.
                                </p>
                                <p className="sub_p">Thể thao giúp giảm stress/căng thẳng từ học tập/công việc. Cho bạn một tinh thần thoải mái/minh mẫn và một sức khỏe tốt để hiệu quả hơn gấp nhiều lần trong học tập/công việc. Từ đó đạt được những thành công hiển hách trong sự nghiệp của bạn.
                                </p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>

                </div>
                <div className="mid_services">
                    <div className="col-md-6 according_inner_grids">
                        <h3 className="heading two">Nhận định sản phẩm</h3>
                        <div className="according_info">
                            <div className="panel-group about_panel" id="accordion" role="tablist" aria-multiselectable="true">
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingOne">
                                        <h4 className="panel-title asd">
                                            <a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Sneaker
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body panel_text">
                                            Sản phẩm chất lượng chính hãng với giá thành hợp lí.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingTwo">
                                        <h4 className="panel-title asd">
                                            <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                                aria-controls="collapseTwo">
                                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Nike
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div className="panel-body panel_text">
                                            Sản phẩm chất lượng chính hãng với giá thành hợp lí.
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingThree">
                                        <h4 className="panel-title asd">
                                            <a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Addidas
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body panel_text">
                                            Sản phẩm chất lượng chính hãng với giá thành hợp lí.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 mid_services_img">
                        <div className="bar-grids">
                            <h3 className="heading two three">Kỹ năng</h3>
                            <div className="skill_info">
                                <h6>Phát triển<span> 95% </span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped active" >
                                    </div>
                                </div>
                                <h6>Định giá<span> 85% </span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped active" >
                                    </div>
                                </div>
                                <h6>Sản xuất <span>90% </span></h6>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped active" >
                                    </div>
                                </div>
                                <h6>Quảng cáo <span>86% </span></h6>
                                <div className="progress prgs-last">
                                    <div className="progress-bar progress-bar-striped active" >
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="clearfix"> </div>

                </div>
                <Mid />
                <Newletter />
                <Footer />
            </div>

        );
    }
}
export default About;