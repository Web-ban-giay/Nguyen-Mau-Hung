import React, { Component } from 'react';
class Admins extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    {/* <!-- left side start--> */}
                    <div className="left-side sticky-left-side">

                        {/* <!--logo and iconic logo start--> */}
                        <div className="logo">
                            <h1><a href="index.html">Easy <span>Admin</span></a></h1>
                        </div>
                        <div className="logo-icon text-center">
                            <a href="index.html"><i className="lnr lnr-home"></i> </a>
                        </div>

                        {/* <!--logo and iconic logo end--> */}
                        <div className="left-side-inner">

                            {/* <!--sidebar nav start--> */}
                            {/* <ul className="nav nav-pills nav-stacked custom-nav">
                                <li className="active"><a href="index.html"><i className="lnr lnr-power-switch"></i><span>Dashboard</span></a></li>
                                <li className="menu-list">
                                    <a href="#"><i className="lnr lnr-cog"></i>
                                        <span>Components</span></a>
                                    <ul className="sub-menu-list">
                                        <li><a href="grids.html">Grids</a> </li>
                                        <li><a href="widgets.html">Widgets</a></li>
                                    </ul>
                                </li>
                                <li><a href="forms.html"><i className="lnr lnr-spell-check"></i> <span>Forms</span></a></li>
                                <li><a href="tables.html"><i className="lnr lnr-menu"></i> <span>Tables</span></a></li>
                                <li className="menu-list"><a href="#"><i className="lnr lnr-envelope"></i> <span>MailBox</span></a>
                                    <ul className="sub-menu-list">
                                        <li><a href="inbox.html">Inbox</a> </li>
                                        <li><a href="compose-mail.html">Compose Mail</a></li>
                                    </ul>
                                </li>
                                <li className="menu-list"><a href="#"><i className="lnr lnr-indent-increase"></i> <span>Menu Levels</span></a>
                                    <ul className="sub-menu-list">
                                        <li><a href="charts.html">Basic Charts</a> </li>
                                    </ul>
                                </li>
                                <li><a href="codes.html"><i className="lnr lnr-pencil"></i> <span>Typography</span></a></li>
                                <li><a href="media.html"><i className="lnr lnr-select"></i> <span>Media Css</span></a></li>
                                <li className="menu-list"><a href="#"><i className="lnr lnr-book"></i>  <span>Pages</span></a>
                                    <ul className="sub-menu-list">
                                        <li><a href="sign-in.html">Sign In</a> </li>
                                        <li><a href="sign-up.html">Sign Up</a></li>
                                        <li><a href="blank_page.html">Blank Page</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                            {/* <!--sidebar nav end--> */}
                        </div>
                    </div>
                    {/* <!-- left side end--> */}

                    {/* <!-- main content start--> */}
                    <div className="main-content">
                        {/* <!-- header-starts --> */}
                        <div className="header-section">

                            {/* <!--toggle button start--> */}
                            <a className="toggle-btn  menu-collapsed"><i className="fa fa-bars"></i></a>
                            {/* <!--toggle button end--> */}

                            {/* <!--notification menu start --> */}
                            <div className="menu-right">
                                <div className="user-panel-top">
                                    <div className="profile_details_left">
                                        <ul className="nofitications-dropdown">
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-envelope"></i><span className="badge">3</span></a>

                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="notification_header">
                                                            <h3>You have 3 new messages</h3>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/1.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor sit amet</p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>

                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li className="odd"><a href="#">
                                                        <div className="user_img"><img src="images/1.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor sit amet </p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/1.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor sit amet </p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li>
                                                        <div className="notification_bottom">
                                                            <a href="#">See all messages</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="login_box" id="loginContainer">
                                                <div className="search-box">
                                                    <div id="sb-search" className="sb-search">
                                                        <form>
                                                            <input className="sb-search-input" placeholder="Enter your search term..." type="search" id="search" />
                                                            <input className="sb-search-submit" type="submit" value="" />
                                                            <span className="sb-icon-search"> </span>
                                                        </form>
                                                    </div>
                                                </div>
                                                {/* <!-- search-scripts --> */}
                                                <script src="js/classie.js"></script>
                                                <script src="js/uisearch.js"></script>
                                                <script>
                                                    new UISearch( document.getElementById( 'sb-search' ) );
                                                </script>
                                                {/* <!-- //search-scripts --> */}
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-bell"></i><span className="badge blue">3</span></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="notification_header">
                                                            <h3>You have 3 new notification</h3>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/1.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor sit amet</p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li className="odd"><a href="#">
                                                        <div className="user_img"><img src="images/1.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor sit amet </p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="user_img"><img src="images/1.png" alt="" /></div>
                                                        <div className="notification_desc">
                                                            <p>Lorem ipsum dolor sit amet </p>
                                                            <p><span>1 hour ago</span></p>
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </a></li>
                                                    <li>
                                                        <div className="notification_bottom">
                                                            <a href="#">See all notification</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-tasks"></i><span className="badge blue1">22</span></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <div className="notification_header">
                                                            <h3>You have 8 pending task</h3>
                                                        </div>
                                                    </li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Database update</span><span className="percentage">40%</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="progress progress-striped active">
                                                            <div classname="bar yellow" style={{ width: '40%' }} />
                                                        </div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Dashboard done</span><span className="percentage">90%</span>
                                                            <div className="clearfix"></div>
                                                        </div>

                                                        <div className="progress progress-striped active">
                                                            <div classname="bar green" style={{ width: '90%' }} />
                                                        </div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Mobile App</span><span className="percentage">33%</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="progress progress-striped active">
                                                            <div classname="bar red" style={{ width: '33%' }} />
                                                        </div>
                                                    </a></li>
                                                    <li><a href="#">
                                                        <div className="task-info">
                                                            <span className="task-desc">Issues fixed</span><span className="percentage">80%</span>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="progress progress-striped active">
                                                            <div className="bar  blue" style={{ width: '80%' }}></div>
                                                        </div>
                                                    </a></li>
                                                    <li>
                                                        <div className="notification_bottom">
                                                            <a href="#">See all pending task</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <div className="clearfix"></div>
                                        </ul>
                                    </div>
                                    <div className="profile_details">
                                        <ul>
                                            <li className="dropdown profile_details_drop">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                    <div className="profile_img">
                                                        <span style={{ background: 'url(images/1.jpg) no-repeat center' }}> </span>
                                                        <div className="user-name">
                                                            <p>Michael<span>Administrator</span></p>
                                                        </div>
                                                        <i className="lnr lnr-chevron-down"></i>
                                                        <i className="lnr lnr-chevron-up"></i>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </a>
                                                <ul className="dropdown-menu drp-mnu">
                                                    <li> <a href="#"><i className="fa fa-cog"></i> Settings</a> </li>
                                                    <li> <a href="#"><i className="fa fa-user"></i>Profile</a> </li>
                                                    <li> <a href="sign-up.html"><i className="fa fa-sign-out"></i> Logout</a> </li>
                                                </ul>
                                            </li>
                                            <div className="clearfix"> </div>
                                        </ul>
                                    </div>
                                    <div className="social_icons">
                                        <div className="col-md-4 social_icons-left">
                                            <a href="#" className="yui"><i className="fa fa-facebook i1"></i><span>300<sup>+</sup> Likes</span></a>
                                        </div>
                                        <div className="col-md-4 social_icons-left pinterest">
                                            <a href="#"><i className="fa fa-google-plus i1"></i><span>500<sup>+</sup> Shares</span></a>
                                        </div>
                                        <div className="col-md-4 social_icons-left twi">
                                            <a href="#"><i className="fa fa-twitter i1"></i><span>500<sup>+</sup> Tweets</span></a>
                                        </div>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            {/* <!--notification menu end --> */}
                        </div>
                        {/* <!-- //header-ends --> */}

                        <div className="graphs">
                            <div className="col_3">
                                <div className="col-md-3 widget widget1">


                                    <div className="clearfix"> </div>
                                </div>

                                {/* <!-- switches --> */}






                                {/* <!-- //switches --> */}


                                <form>
                                    <input type="text" value="Enter your text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter your text';}" required="" />
                                    <input type="submit" value="Submit" required="" />
                                </form>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="clearfix"> </div>

                    </div>






                </section >
            </div >
        );
    }
}
export default Admins;