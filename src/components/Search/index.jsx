import React from "react";
import { Grid, TextField, Button, Badge } from "@material-ui/core";
import { FiGithub } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
// import Cities from "cities-list";
import "./styles.css";
export default class Home extends React.Component {
  state = { query: { position: "", location: "" } };

  handleSearchInput = (e) => {
    e.preventDefault();
    this.setState({
      query: {
        ...this.state.query,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };
  triggersSearch = (e) => {
    if (e.key === "Enter") {
      this.props.searchJobs(this.state.query);
    }
  };
  render() {
    // const { query } = this.state;
    return (
      <div className="HomeDiv">
        <Grid container>
          <FiGithub
            size="48"
            title="Github Job Search"
            className="searchLogo"
            onClick={() => this.props.history.push("/")}
          />
          <Grid item sm={9}>
            <TextField
              id="search-position"
              label="Are you looking for a 👔?"
              fullWidth
              margin="normal"
              value={this.state.query.position}
              name="position"
              onChange={(e) => this.handleSearchInput(e)}
              onKeyPress={(e) => this.triggersSearch(e)}
            />
          </Grid>
          <Grid item sm={1}>
            <TextField
              id="search-city"
              label="in which city?"
              fullWidth
              margin="normal"
              value={this.state.query.location}
              name="location"
              onChange={(e) => this.handleSearchInput(e)}
              onKeyPress={(e) => this.triggersSearch(e)}
            />
          </Grid>
          <Grid item sm={1}>
            <TextField
              label="Full Time?"
              fullWidth
              margin="normal"
              onChange={(e) => this.handleSearchInput(e)}
              onKeyPress={(e) => this.triggersSearch(e)}
            />
          </Grid>
          {/* <Button onClick={() => this.props.searchJobs(query)}>Search</Button> */}
          <Badge
            badgeContent={1}
            max={99}
            color="secondary"
            onClick={() => this.props.history.push("/favourite")}
            style={{ alignSelf: "center", margin: "1rem" }}
          >
            <MdFavorite size="24" color="grey" />
          </Badge>
        </Grid>
      </div>
    );
  }
}
