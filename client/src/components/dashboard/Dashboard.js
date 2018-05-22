import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { RingLoader, HashLoader } from "react-spinners";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = (
        <div className="sweet-loading">
          <RingLoader color={"#123abc"} loading={profile === null || loading} />
        </div>
      );
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>Todo: Display Profile</h4>;
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p> You have not yet set up a profile, please add some info. </p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
