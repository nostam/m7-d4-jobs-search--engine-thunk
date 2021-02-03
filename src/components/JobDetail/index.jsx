import React from "react";
import { Paper, Typography } from "@material-ui/core";
import parse from "html-react-parser";

export default function JobDetail(props) {
  return (
    <div>
      {props.job !== null && (
        <Paper elevation={8} style={{ marginBottom: "4rem" }}>
          <div style={{ padding: "4rem" }}>
            <Typography variant="h3" gutterBottom>
              {props.job.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {props.job.type} @ {props.job.company} in {props.job.location}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Posted on: {props.job.created_at}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Source: {props.job.url}
            </Typography>
            {parse(props.job.description)}
            <Typography variant="subtitle2" gutterBottom>
              {parse(props.job.how_to_apply)}
            </Typography>
          </div>
        </Paper>
      )}
    </div>
  );
}
