import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./DetailClinic.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import DoctorExtraInfor from "../Doctor/DoctorExtraInfor";
import ProfileDoctor from "../Doctor/ProfileDoctor";
import HomeHeader from "../../HomePage/HomeHeader";
import HomeFooter from "../../HomePage/HomeFooter";
import DoctorSchedule from "../Doctor/DoctorSchedule";
import Doctor from "./../../../routes/Doctor";

import {
  getAllDetailClinicById,
  getAllCodeService,
} from "../../../services/userService";
import _ from "lodash";
class DetailClinic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctorId: [],
      dataDetailClinic: {},
    };
  }
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;

      let res = await getAllDetailClinicById({
        id: id,
      });

      if (res && res.errCode === 0) {
        let data = res.data;
        let arrDoctorId = [];
        if (data && !_.isEmpty(res.data)) {
          let arr = data.doctorClinic;
          if (arr && arr.length > 0) {
            arr.map((item) => {
              arrDoctorId.push(item.doctorId);
            });
          }
        }

        this.setState({
          dataDetailClinic: res.data,
          arrDoctorId: arrDoctorId,
        });
      }
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  render() {
    let { language } = this.props;
    let { arrDoctorId, dataDetailClinic } = this.state;

    console.log("check state", this.state);
    return (
      <div className="detail-specialty-container">
        <HomeHeader />
        <div className="detail-specialty-body">
          <div className="description-specialty">
            {dataDetailClinic && !_.isEmpty(dataDetailClinic) && (
              <>
                <div className="detail-infor-clinic">
                  <div className="up row">
                    <div
                      className="content-left col-6"
                      style={{
                        backgroundImage: `url(${
                          dataDetailClinic && dataDetailClinic.image
                            ? dataDetailClinic.image
                            : ""
                        })`,
                      }}
                    ></div>
                    <div className="content-right col-6">
                      <div className="right-container">
                        <div className="clinic-name">
                          {dataDetailClinic.name}
                        </div>
                        <div className="clinic-address">
                          <i class="fa-solid fa-location-dot"></i>
                          {dataDetailClinic.address}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="down">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: dataDetailClinic.descriptionHTML,
                      }}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </div>

          {arrDoctorId &&
            arrDoctorId.length > 0 &&
            arrDoctorId.map((item, index) => {
              return (
                <div className="each-doctor" key={index}>
                  <div className="dt-content-left">
                    <div className="profile-doctor">
                      <ProfileDoctor
                        doctorId={item}
                        isShowDescriptionDoctor={true}
                        isShowLinkDetail={true}
                        isShowPrice={false}
                      />
                    </div>
                  </div>
                  <div className="dt-content-right">
                    <div className="doctor-schedule">
                      <DoctorSchedule doctorIdFromParent={item} />
                    </div>
                    <div className="doctor-extra-infor">
                      <DoctorExtraInfor doctorIdFromParent={item} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
