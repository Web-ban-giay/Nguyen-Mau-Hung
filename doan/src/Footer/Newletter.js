import React, { Component } from 'react';
class Newletter extends Component {
    render() {
        return (
            <div>
                <div className="newsletter_w3layouts_agile">
                    <div className="col-sm-6 newsleft">
                        <h3>Đăng nhập để nhận bản tin!</h3>
                    </div>
                    <div className="col-sm-6 newsright">
                        <form action="#" method="post">
                            <input type="email" placeholder="Enter your email..." name="email" required=""></input>
                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        );
    }
}
export default Newletter;