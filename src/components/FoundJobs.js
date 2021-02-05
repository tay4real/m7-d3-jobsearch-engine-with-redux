import React, { Component } from "react";
import { JobList } from "./JobList";
import JobDetail from "./JobDetail";
import { Toast } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
class FoundJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobSelected: null,
      showPopover: false,
    };
  }

  popOverToggle = () => {
    this.setState({ showPopover: !this.state.showPopover });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.favJobs.length < this.props.favJobs.length) {
      this.setState({ showPopover: true }, () => {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(
          () => this.setState({ showPopover: false }),
          2500
        );
      });
    }
  }

  changeJob = (id) => this.setState({ jobSelected: id });

  render() {
    const jobFav = this.props.searchresult.jobs.find(
      (job) => job.id === this.state.jobSelected
    );
    return (
      <div className="row">
        <JobList
          jobSelected={this.state.jobSelected}
          changeJob={this.changeJob}
          jobs={this.props.searchresult.jobs}
        />
        <JobDetail
          jobSelected={this.state.jobSelected}
          jobs={this.props.searchresult.jobs}
        />
        <Toast
          style={{ position: "absolute", top: 15, right: 15 }}
          show={this.state.showPopover}
          onClose={this.popOverToggle}
        >
          <Toast.Header>
            <span>
              <strong>{jobFav && jobFav.title}</strong> added to the favoutites
            </span>
          </Toast.Header>
        </Toast>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FoundJobs);
