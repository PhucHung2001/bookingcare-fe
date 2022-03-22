import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";

class DefaultClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    let { language } = this.props;
  }
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
    }
  }

  render() {
    let { language } = this.props;

    return <div>DefaultClass</div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultClass);
