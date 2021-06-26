
import { NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))
    const history = useHistory();
    function logOut() {

        localStorage.clear();
        history.push('/register')
    }
    return (
        <div className="banner_top innerpage" id="home">
            <div className="wrapper_top_w3layouts">
                <div className="header_agileits">
                    <div className="logo inner_page_log">
                        <h1><a className="navbar-brand" href="/Index"><span>PN</span> <i>Sport</i></a></h1>
                    </div>
                    <div className="overlay overlay-contentpush">
                        <button type="button" className="overlay-close"><i className="fa fa-times" aria-hidden="true"></i></button>

                        <nav>
                            <ul>
                                <li><a href="/Index" className="active">Trang chủ</a></li>
                                <li><a href="/About">Giới thiệu</a></li>
                                <li><a href="/404">Team</a></li>
                                <li><a href="/Shop">Shop Now</a></li>
                                <li><a href="/Contact">Liên hệ</a></li>
                                <li><a href="/Register">Đăng ký</a></li>
                                <li><a href="/Login">Đăng Nhập</a></li>
                            </ul>
                        </nav>

                    </div>

                    <div className="mobile-nav-button">
                        <button id="trigger-overlay" type="button"><i className="fa fa-bars" aria-hidden="true"></i></button>
                    </div>
                    <div className="top_nav_right">
                        <div className="shoecart shoecart2 cart cart box_1">
                            <form action="/Checkout" method="post" className="last" a href="/Checkout" >
                                <input type="hidden" name="cmd" value="_cart"></input>
                                <input type="hidden" name="display" value="1"></input>
                                <button className="top_shoe_cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- //cart details -->
		<!-- search --> */}
            <div className="search_w3ls_agileinfo">
                <div className="cd-main-header">
                    <ul className="cd-header-buttons">
                        <li><a className="cd-search-trigger" href="#cd-search"> <span></span></a></li>
                    </ul>
                </div>
                <div id="cd-search" className="cd-search">
                    <form action="#" method="post">
                        <input name="Search" type="search" placeholder="Click enter after typing..."></input>
                    </form>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="services-breadcrumb_w3ls_agileinfo">
                <div className="inner_breadcrumb_agileits_w3">

                    <ul className="short">
                        <li><a href="/Index">Trang chủ</a></li>
                    </ul>
                </div>

            </div>
            <div className="error_page">
                <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div >
    );
}


export default Header;