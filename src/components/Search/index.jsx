import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { FiGithub } from "react-icons/fi";
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
    if (e.keyCode === 13 || e.key === "Enter") {
      this.props.searchJobs(this.state.query);
    }
  };

  render() {
    const { query } = this.state;
    return (
      <div className="HomeDiv">
        <FiGithub size="48" title="Github Job Search" />
        <Grid container spacing={2}>
          <Grid item sm={9}>
            <form>
              <TextField
                id="standard-basic"
                label="Are you looking for a 👔?"
                fullWidth
                margin="normal"
                value={this.state.query.position}
                name="position"
                onChange={(e) => this.handleSearchInput(e)}
              />
            </form>
          </Grid>
          <Grid item sm={2}>
            <form noValidate autoComplete="on">
              <TextField
                id="standard-basic"
                label="in which city?"
                fullWidth
                margin="normal"
                value={this.state.query.location}
                name="location"
                onChange={(e) => this.handleSearchInput(e)}
              />
            </form>
          </Grid>

          <Button onClick={() => this.props.searchJobs(query)}>Search</Button>
        </Grid>
      </div>
    );
  }
}
