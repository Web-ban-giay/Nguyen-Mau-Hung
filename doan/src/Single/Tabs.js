import React, { Component } from 'react';
class Tabs extends Component {
    render() {
        return (
            <div className="App">
                <div className="responsive_tabs">
                    <div id="horizontalTab">
                        <ul className="resp-tabs-list">
                            <li>Mô tả</li>
                            <li>Nhận xét</li>
                            <li>Thông tin</li>
                        </ul>
                        <div className="resp-tabs-container">
                            {/* <!--/tab_one--> */}
                            <div className="tab1">

                                <div className="single_page">
                                    <h6>Sản phẩm</h6>
                                    <p>Sản phẩm chất lượng về mọi mặt như thiết kế, mẫu mã, chất liệu vải, giá thành hợp lí..</p>
                                    <p className="para">Phương Nam Sport hân hạnh được phục vụ bạn!</p>
                                </div>
                            </div>
                            {/* <!--//tab_one--> */}
                            <div className="tab2">

                                <div className="single_page">
                                    <div className="bootstrap-tab-text-grids">
                                        <div className="bootstrap-tab-text-grid">
                                            {/* <div className="bootstrap-tab-text-grid-left">
                                                <img src="assets/images/t1.jpg" alt=" " className="img-responsive" />
                                            </div> */}
                                            {/* <div className="bootstrap-tab-text-grid-right">
                                                <ul>
                                                    <li><a href="#">Admin</a></li>
                                                    <li><a href="#"><i className="fa fa-reply-all" aria-hidden="true"></i> Reply</a></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam,
                                                    quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                                                    autem vel eum iure reprehenderit.</p>
                                            </div> */}
                                            <div className="clearfix"> </div>
                                        </div>
                                        <div className="add-review">
                                            <h4>Thêm bình luận</h4>
                                            <form action="#" method="post">
                                                <input type="text" name="Name" required="Name" />
                                                <input type="email" name="Email" required="Email" />
                                                <textarea name="Message" required=""></textarea>
                                                <input type="submit" value="Gửi" />
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="tab3">

                                <div className="single_page">
                                    <h6>Sneaker</h6>
                                    <p>Sneaker hay giày sneaker là một tên gọi khác của “giày thể thao” dùng để chỉ các loại giày phục vụ cho vận động thể thao. Tuy nhiên, hiện nay sneaker thường được dùng để chỉ những đôi giày thể thao được mang cho hoạt động hằng ngày.
                                        Sneakers luôn là sự lựa chọn hoàn hảo cho những ai yêu thích sự thoải mái, trẻ trung, năng động mà nó mang lại. Có lẽ vì vậy mà có những đôi giày sneaker đã ra đời từ rất lâu nhưng nay vẫn luôn chiếm một vị trí “ưu tiên” trong tủ giày của nhiều bạn trẻ.
                                        Sneakers và phong cách streetstyle được tôn sùng như một “cặp đôi hoàn hảo” trong giới fashionista trẻ. Những đôi giày Sneakers mang đến cảm giác bình dân (casual), ít trang trọng (informal) nên hầu như có thể xuất hiện trong các dịp khác nhau như một tổng thể trong bộ trang phục của các bạn trẻ, đặc biệt ở độ tuổi 18 đến dưới 30.
                                        Một số thương hiệu giày sneaker nổi tiếng trên thế giới như: Nike, Adidas, New Balance, Puma</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>

        );
    }
}
export default Tabs;