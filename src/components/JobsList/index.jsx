import React, { Component } from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
export default class JobList extends Component {
  state = { jobs: "" };
  componentDidMount = () => {
    this.setState({ jobs: this.props.jobs });
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.toString() !== this.props.toString()) {
      this.setState({ jobs: this.props.jobs });
      console.log(this.props.jobs, this.state.jobs);
    }
  };
  render() {
    const { jobs } = this.props;
    return (
      <div>
        {jobs.length > 0 &&
          jobs.map((job) => {
            return (
              <Card key={job.id}>
                <CardMedia image={job.company_logo} title={job.company} />
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {job.type}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {job.title}
                  </Typography>
                  <Typography color="textSecondary">{job.location}</Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    value={job.description}
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" herf={job.how_to_apply}>
                    Learn More @ {job.company_url}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </div>
    );
  }
}
