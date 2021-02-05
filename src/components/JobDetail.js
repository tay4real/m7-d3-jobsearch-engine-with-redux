import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import parse from "html-react-parser";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addToFavourite: (id) =>
    dispatch({
      type: "ADD_JOB_TO_FAVOURITE",
      payload: id,
    }),
  removeFromFavourite: (id) =>
    dispatch({ type: "REMOVE_JOB_FROM_FAVOURITE", payload: id }),
});

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null,
      fav: false,
    };
  }

  toggleFavourite = () => {
    if (this.state.job) {
      this.setState((prevProps) => ({
        fav: !prevProps.fav,
      }));

      if (!this.state.fav) {
        this.props.addToFavourite(this.state.job.id);
      } else {
        this.props.removeFromFavourite(this.state.job.id);
      }
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.jobSelected !== this.props.jobSelected) {
      this.setState({
        job: this.props.searchresult.jobs.find(
          (job) => job.id === this.props.jobSelected
        ),
        fav: false,
      });
    }
  }

  render() {
    return this.state.job ? (
      <div className="col-md-8 pb-5">
        <div className="row mt-2">
          <div className="col-sm-11">
            <h2>{this.state.job.title}</h2>
            <p>
              <span className="font-weight-bold">Company:</span>{" "}
              {this.state.job.company}
            </p>
            <img
              className="company-logo"
              src={this.state.job.company_logo}
              alt="job selected"
            />
          </div>
          <div onClick={this.toggleFavourite} className="com-sm-1 pt-2">
            <span className="">
              <FontAwesomeIcon
                icon={faHeart}
                id="favIcon"
                style={
                  this.state.fav
                    ? { color: "red", fontSize: "3rem" }
                    : { color: "eee", fontSize: "3rem" }
                }
              />
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12" style={{ overflow: "hidden" }}>
            <p>
              <span className="font-weight-bold">Location:</span>{" "}
              {this.state.job.location}
            </p>
            <p>
              <span className="font-weight-bold">Description:</span>
            </p>
            {parse(this.state.job.description)}
            <p>
              <span className="font-weight-bold">Employment Type:</span>{" "}
              {this.state.job.type}
            </p>
            <p>
              <span className="font-weight-bold">How to apply:</span>
            </p>
            {parse(this.state.job.how_to_apply)}
            <a href={this.state.job.url}>
              <Button color="primary">Apply</Button>
            </a>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h3>Select a Job to View Job Details</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
