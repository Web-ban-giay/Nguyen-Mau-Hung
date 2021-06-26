import React from 'react';
class Grids extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="grids_bottom">
					<div className="style-grids">
						<div className="col-md-6 style-grid style-grid-1">
							<img src="assets/images/b1.jpg" alt="shoe" />
						</div>
					</div>
					<div className="col-md-6 style-grid style-grid-2">
						<div className="style-image-1_info">
							<div className="style-grid-2-text_info">
								<h3>Nike DOWNSHIFTER</h3>
								<p>Giày Nike Downshifter với chất liệu lưới được Nike sử dụng tạo độ thoáng mát và ôm chân 1 cách tuyệt đối, giải phóng bàn chân bạn qua từng đường chạy.</p>
								<div className="shop-button">
									<a href="/Shop">Shop Now</a>
								</div>
							</div>
						</div>
						<div className="style-image-2">
							<img src="assets/images/b2.jpg" alt="shoe" />
							<div className="style-grid-2-text">
								<h3>Air force</h3>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>

		)
	}
}
export default Grids