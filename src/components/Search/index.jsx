import React from "react";
import { Grid, TextField, Button, Badge } from "@material-ui/core";
import { FiGithub } from "react-icons/fi";
import { MdFavorite } from "react-icons/md";
import { connect } from "react-redux";
// import Cities from "cities-list";
import "./styles.css";

const mapStateToProps = (state) => state;
class Search extends React.Component {
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
        <Grid container style={{ justifyContent: "center" }}>
          <FiGithub
            size="48"
            title="Github Job Search"
            className="searchLogo"
            onClick={() => this.props.history.push("/")}
          />
          <Grid item sm={5} md={9}>
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
              label="Location"
              fullWidth
              margin="normal"
              value={this.state.query.location}
              name="location"
              onChange={(e) => this.handleSearchInput(e)}
              onKeyPress={(e) => this.triggersSearch(e)}
            />
          </Grid>
          {/* <Grid item xs={1}>
            <TextField
              id="search-fulltime"
              label="Full Time?"
              fullWidth
              margin="normal"
              onChange={(e) => this.handleSearchInput(e)}
              onKeyPress={(e) => this.triggersSearch(e)}
            />
          </Grid> */}
          {/* <Button onClick={() => this.props.searchJobs(query)}>Search</Button> */}
          <Badge
            badgeContent={this.props.bookmarks.length}
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
export default connect(mapStateToProps)(Search);
