import React, { Component } from 'react';
class SingIn extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <div id="page-wrapper" className="sign-in-wrapper">
                        <div className="graphs">
                            <div className="sign-in-form">
                                <div className="sign-in-form-top">
                                    <p><span>Sign In to</span> </p>
                                </div>
                                <div className="signin">
                                    <div className="signin-rit">
                                        <span className="checkbox1">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" checked="" />Forgot Password ?</label>
                                        </span>
                                        <p><a href="#">Click Here</a> </p>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <form>
                                        <div className="log-input">
                                            <div className="log-input-left">
                                                <input type="text" className="user" value="YourName" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email address:';}" />
                                            </div>
                                            <span className="checkbox2">
                                                <label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i></label>
                                            </span>
                                            <div className="clearfix"> </div>
                                        </div>
                                        <div className="log-input">
                                            <div className="log-input-left">
                                                <input type="password" className="lock" value="password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email address:';}" />
                                            </div>
                                            <span className="checkbox2">
                                                <label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i></label>
                                            </span>
                                            <div className="clearfix"> </div>
                                        </div>
                                        <input type="submit" value="Login to your account" />
                                    </form>
                                </div>
                                <div className="new_people">
                                    <h4>For New People</h4>
                                    <p>Having hands on experience in creating innovative designs,I do offer design
								solutions which harness.</p>
                                    <a href="/SingUp">Register Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default SingIn;