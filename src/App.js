import React from "react";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import JobsList from "./components/JobsList";
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
  render() {
    const { jobs, loading } = this.state;
    return (
      <div className="App">
        <Route
          path="/"
          exact
          render={(props) => <Search {...props} searchJobs={this.searchJobs} />}
        />
        {/* <Route path="/job/:slug" render={(props) => <Job {...props} /> */}
        <Route
          path="/"
          render={(props) => (
            <JobsList {...props} jobs={jobs} loading={loading} />
          )}
        />
      </div>
    );
  }
}
export default App;
