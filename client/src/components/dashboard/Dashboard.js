import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default connect(null, { getCurrentProfile })(Dashboard);
