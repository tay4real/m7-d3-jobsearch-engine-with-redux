import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourite: (id) =>
    dispatch({ type: "REMOVE_JOB_FROM_FAVOURITE", payload: id }),
});

class FavouriteJobs extends Component {
  render() {
    const favJobs = this.props.favJobs.map((jobId) =>
      this.props.searchresult.jobs.find((job) => job.id === jobId)
    );
    return (
      <div className="col col-sm-5  px-5">
        <ul className="d-flex" style={{ listStyle: "none" }}>
          {favJobs.map((job, i) => (
            <>
              <li
                key={i}
                className="my-4 d-flex flex-column py-2 px-3"
                style={{ border: "1px solid grey" }}
              >
                <div className="media card-body d-flex">
                  <p className="card-title font-weight-bold">{job.title}</p>
                  <div>
                    <p>
                      {job.company} | {job.location}
                    </p>
                  </div>
                  <div>
                    <p className="card-title font-weight-bold img-fluid w-50">
                      <img
                        src={job.company_logo}
                        alt="company logo"
                        className="img-fluid"
                      />
                    </p>
                  </div>
                </div>
                <Button
                  variant="danger"
                  onClick={() => this.props.removeFromFavourite(job.id)}
                >
                  <FontAwesomeIcon icon={faTrash} id="trashIcon" />
                </Button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteJobs);
