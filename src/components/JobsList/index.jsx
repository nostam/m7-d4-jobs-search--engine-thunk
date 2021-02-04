import React, { Component } from "react";
import { LinearProgress, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import JobCard from "../JobCard";
import JobDetail from "../JobDetail";
import "./styles.css";

const mapStateToProps = (state) => state;
class JobList extends Component {
  state = { selectedJob: null };
  handleSelectedJob = (job) => {
    this.setState({ selectedJob: job });
  };
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.toString() !== this.props.toString()) {
  //     this.setState({ jobs: this.props.jobs });
  //     console.log(this.props.jobs, this.state.jobs);
  //   }
  // };
  render() {
    const { loading, jobs } = this.props;
    console.log("this.props in jobslist", this.props);
    return (
      <div style={{ overflowX: "hidden" }}>
        {loading ? (
          <LinearProgress />
        ) : (
          <Grid container>
            <Grid item md={3} className="JobsListCol">
              {jobs.length > 0 &&
                jobs.map((job) => {
                  return (
                    <JobCard
                      job={job}
                      key={job.id}
                      selected={this.handleSelectedJob}
                    />
                  );
                })}
            </Grid>
            <Grid item md={9} className="JobsListCol">
              <JobDetail job={this.state.selectedJob} />
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps)(JobList);
