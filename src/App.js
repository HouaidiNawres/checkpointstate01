import React from 'react';
import './App.css';
import Person from "./components/Person"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleHideComponent = () => {
      this.setState({ show: false });
    };
    this.handleShowComponent = () => {
      this.setState({ show: true });
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <button onClick={this.handleHideComponent}>Quitter</button>
            <Person />
          </>
        ) : (
          <button onClick={this.handleShowComponent}>Afficher</button>
        )}
      </div>
    );
  }
}

export default App;
