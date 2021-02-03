import React from "react";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import JobsList from "./components/JobsList";
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
class App extends React.Component {
  state = { err: null, jobs: [], loading: false };
  url = "/positions.json?";
  searchJobs = async (query) => {
    try {
      this.setState({ loading: true });
      const res = await fetch(
        `${this.url}desciption=${query.position}&location=${query.location}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const payload = await res.json();
        console.log(payload);
        this.setState({ jobs: payload, loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.history !== this.props.history) {
      this.setState({ err: null, jobs: [], loading: false });
    }
  };
  render() {
    const { jobs, loading } = this.state;
    return (
      <div className="App">
        <Route
          path="/"
          render={(props) => <Search {...props} searchJobs={this.searchJobs} />}
        />
        {/* <Route path="/job/:slug" render={(props) => <Job {...props} /> */}
        <Route
          path="/"
          exact
          render={(props) => (
            <JobsList {...props} jobs={jobs} loading={loading} />
          )}
        />
        <Route
          path="/bookmarks"
          exact
          render={(props) => (
            <JobsList
              {...props}
              jobs={this.props.bookmarks}
              loading={loading}
            />
          )}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps)(App);
