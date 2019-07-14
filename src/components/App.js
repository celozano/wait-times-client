import React from "react";
import "../styles/custom.css";
import axios from "axios";

import CardList from "./CardList";
import Loading from "./Loading";
import Error from "./Error";

class App extends React.Component {
  state = { ports: [], errorMessage: "", loading: true };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_HOST}`)
      .then(res => {
        this.setState({ ports: res.data.ports });
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
        this.setState({ errorMessage: err.message });
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.errorMessage) {
      return <Error message="Algo salió mal. Intentalo de nuevo más tarde." />;
    }
    return (
      <div>
        <div className="container pt-5">
          <div className="row">
            <CardList ports={this.state.ports} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
