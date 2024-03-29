import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";

class HomeFooter extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };
  render() {
    return (
      <div className="home-footer ">
        <footer className="new_footer_area bg_color">
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget company_widget wow fadeInLeft"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      <FormattedMessage id="footer.contactus" />
                    </h3>
                    <p>
                      <FormattedMessage id="footer.text-contact" />
                    </p>
                    <div
                      action="#"
                      className="f_subscribe_two mailchimp"
                      method="post"
                      noValidate={true}
                      _lpchecked={1}
                    >
                      <input
                        type="text"
                        name="EMAIL"
                        className="form-control memail"
                        placeholder="Email"
                      />
                      <button
                        className="w3-btn w3-blue"
                        style={{ marginTop: 10 }}
                      >
                        <FormattedMessage id="footer.send" />
                      </button>
                      <p
                        className="mchimp-errmessage"
                        style={{ display: "none" }}
                      />
                      <p
                        className="mchimp-sucmessage"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" style={{ paddingLeft: 130 }}>
                  <div
                    className="f_widget about-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      <FormattedMessage id="footer.dowload" />
                    </h3>
                    <ul className="list-unstyled f_list">
                      <li>
                        <a href="#">
                          {" "}
                          <FormattedMessage id="footer.androidapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <FormattedMessage id="footer.iosapp" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <FormattedMessage id="footer.desktop" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6" style={{ paddingLeft: 55 }}>
                  <div
                    className="f_widget about-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      {" "}
                      <FormattedMessage id="footer.help" />
                    </h3>
                    <ul className="list-unstyled f_list">
                      <li>
                        <a href="#">
                          {" "}
                          <FormattedMessage id="footer.faq" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <FormattedMessage id="footer.term" />
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          {" "}
                          <FormattedMessage id="footer.pocily" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget social-widget pl_70 wow fadeInLeft"
                    data-wow-delay="0.8s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.8s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      <FormattedMessage id="footer.admin" />
                    </h3>
                    <div className="f_social_icon">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/sam.hung.984349/"
                        className="fab fa-facebook"
                      />
                      <a href="#" className="fab fa-twitter" />
                      <a href="#" className="fab fa-linkedin" />
                      <a href="#" className="fab fa-pinterest" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bg">
              <div className="footer_bg_one" />
              <div className="footer_bg_two" />
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400">
                    © BookingCare.. 2022 with Lưu Phúc Hưng .
                  </p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right">
                  <p>
                    Made with <i className="icon_heart" /> in{" "}
                    <a href="#">CakeCounter</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
