import React from 'react';
class Grids_sec extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="grids_sec_2">
                    <div className="style-grids_main">
                        <div className="col-md-6 grids_sec_2_left">
                            <div className="grid_sec_info">
                                <div className="style-grid-2-text_info">
                                    <h3>Sneakers</h3>
                                    <p>Sneaker là giày thể thao có đế mềm với phần trên làm bằng vải hoặc da bạt. Giày sneaker trước đây chủ yếu dùng trong lĩnh vực thể thao, nhưng ngày nay là một sản phẩm thời trang không thể thiếu trong mọi outfit.</p>
                                    <div className="shop-button">
                                        <a href="/Shop">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="style-image-2">
                                <img src="assets/images/b4.jpg" alt="shoe" />
                                <div className="style-grid-2-text">
                                    <h3>Air force</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grids_sec_2_left">

                            <div className="style-image-2">
                                <img src="assets/images/b3.jpg" alt="shoe" />
                                <div className="style-grid-2-text">
                                    <h3>Air force</h3>
                                </div>
                            </div>
                            <div className="grid_sec_info last">
                                <div className="style-grid-2-text_info">
                                    <h3>Sneakers</h3>
                                    <p>Sneakers và Streetwear luôn đi cùng nhau. Bạn có thể phối một bộ outfit nhìn đơn giản, thoải mái với một đôi sneakers nhưng rất đẹp. Tuy nhiên, bởi vì ngoài đó có rất nhiều mẫu giày sneakers để lựa chọn, có thể những bạn mới chơi sẽ cảm thấy bối rối không biết bắt đầu từ đâu. Theo mình nghĩ chúng ta hãy bắt đầu với những điều cơ bản, đơn giản.</p>
                                    <div className="shop-button two">
                                        <a href="/Shop">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Grids_sec