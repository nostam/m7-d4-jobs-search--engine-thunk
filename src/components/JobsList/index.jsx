import React, { Component } from "react";
import { LinearProgress, Grid } from "@material-ui/core";
import JobCard from "../JobCard";
import JobDetail from "../JobDetail";
import "./styles.css";
export default class JobList extends Component {
  state = { jobs: "", selectedJob: null };
  handleSelectedJob = (job) => {
    this.setState({ selectedJob: job });
  };
  componentDidMount = () => {
    this.setState({ jobs: this.props.jobs });
  };
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.toString() !== this.props.toString()) {
  //     this.setState({ jobs: this.props.jobs });
  //     console.log(this.props.jobs, this.state.jobs);
  //   }
  // };
  render() {
    // const { jobs, loading } = this.props;
    return (
      <div style={{ overflowX: "hidden" }}>
        {this.props.loading ? (
          <LinearProgress />
        ) : (
          <Grid container>
            <Grid item xs={3} className="JobsListCol">
              {this.props.jobs.map((job) => {
                return (
                  <JobCard
                    job={job}
                    key={job.id}
                    selected={this.handleSelectedJob}
                  />
                );
              })}
            </Grid>
            <Grid item xs={9} className="JobsListCol">
              <JobDetail job={this.state.selectedJob} />
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}
