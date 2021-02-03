import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MdFavorite, MdDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
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

function JobCard({ job, selected }) {
  const dispatch = useDispatch();
  const { bookmarks, applied } = useSelector((state) => state);

  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={(e) => selected(job)}>
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
        <Typography variant="h6" component="h2" gutterBottom>
          {job.title}
        </Typography>
        <Typography color="textSecondary">
          {job.location} | {job.type}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.footer}>
        <Button style={{ marginRight: "auto" }}>Learn More</Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => dispatch({ type: "TOGGLE_BOOKMARK", payload: job })}
        >
          <MdFavorite
            style={{
              color: bookmarks.find((entry) => entry.id === job.id)
                ? "#dc004e"
                : "grey",
            }}
          />
        </IconButton>
        <IconButton
          aria-label="applied"
          onClick={() => dispatch({ type: "TOGGLE_APPLY", payload: job })}
        >
          <MdDone
            style={{
              color: applied.find((entry) => entry.id === job.id)
                ? "green"
                : "grey",
            }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default JobCard;
