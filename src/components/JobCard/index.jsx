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
import { MdFavoriteBorder, MdFavourited, MdShare } from "react-icons/md";
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
  const { bookmarks } = useSelector((state) => state);

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
      <CardActions disableSpacing className={classes.footer}>
        <Button style={{ marginRight: "auto" }}>Learn More</Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => dispatch({ type: "ADD_TO_BOOKMARK", payload: job })}
        >
          <MdFavoriteBorder
            style={{
              color: bookmarks.find((job) => job.id === job.id)
                ? "red"
                : "gray",
            }}
          />
        </IconButton>
        <IconButton aria-label="share">
          <MdShare />
        </IconButton>
      </CardActions>
    </Card>
  );
}
export default JobCard;
