import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { getProfileByHandle } from "../../actions/profileActions";

// components
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import { HashLoader } from "react-spinners";

class Profile extends React.Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>{this.props.match.params.handle}</p>
        <ProfileHeader />
        <ProfileAbout />
        <ProfileCreds />
        <ProfileGithub />
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(Profile);
