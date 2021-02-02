import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "95%",
    margin: "1rem",
  },
  url: {
    color: "black",
    textDecoration: "none",
  },
  footer: { marginTop: "auto" },
});

export default function Index(props) {
  const { job } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={(e) => props.selected(job)}>
      <a
        href={job.company_url}
        className={classes.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <CardHeader
          avatar={<Avatar src={job.company_logo} alt={job.company} />}
          title={job.company}
          titleTypographyProps={{ variant: "h6" }}
        />
      </a>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {job.location}
        </Typography>
        <Typography variant="h5" component="h2">
          {job.title}
        </Typography>
        <Typography color="textSecondary">{job.type}</Typography>
        {/* <div
		  dangerouslySetInnerHTML={{ __html: job.description }}
		></div> */}
      </CardContent>
      <CardActions className={classes.footer}>
        <Button size="small" herf={job.how_to_apply}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
