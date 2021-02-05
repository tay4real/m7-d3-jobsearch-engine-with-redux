import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setResults: (jobs) => dispatch({ type: "SET_RESULTS", payload: jobs }),
});

class SearchPage extends Component {
  state = {
    position: " ",
    location: " ",
  };

  handleFetchJob = async (position, location) => {
    let response = await fetch(
      `https://cors-anywhere-lk.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&full_time=true&location=${location}`
    );

    let jobs = await response.json();
    console.log(jobs);
    this.props.setResults(jobs);
    //this.setState({ position: "", location: "" });
    this.props.history.push("/jobs");
  };

  render() {
    return (
      <>
        <div className="search mt-2 col-sm-12">
          <>
            <Form className="">
              <div className="m-auto">
                <div className="d-flex ">
                  <div className="col col-md-5">
                    <Form.Label>
                      <FontAwesomeIcon icon={faBriefcase} id="portfolioIcon" />{" "}
                      What
                    </Form.Label>
                  </div>
                  <div className="col col-md-5">
                    <Form.Label>
                      {" "}
                      <FontAwesomeIcon
                        icon={faMapMarker}
                        id="portfolioIcon"
                      />{" "}
                      Where
                    </Form.Label>
                  </div>
                  <div className="col"></div>
                </div>
                <div className="d-flex m-auto">
                  <div className="col col-md-5">
                    <Form.Control
                      type="text"
                      placeholder="Job Position or Tech"
                      id="position"
                      name="position"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) =>
                        this.setState({ position: e.currentTarget.value })
                      }
                      value={this.state.position}
                    />
                  </div>
                  <div className="col col-md-5">
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      id="location"
                      name="location"
                      style={{ borderRadius: "20px" }}
                      onChange={(e) =>
                        this.setState(
                          { location: e.currentTarget.value },
                          () => {
                            console.log(this.state);
                          }
                        )
                      }
                      value={this.state.location}
                    />
                  </div>
                  <div className="col col-md-1">
                    <Button
                      variant="primary"
                      onClick={() => {
                        this.handleFetchJob(
                          this.state.position,
                          this.state.location
                        );
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPage)
);
