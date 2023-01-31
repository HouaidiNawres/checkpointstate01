import React from "react";
import monimage from "../Houaidi.jpeg";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Houaidi Nawres",
      bio: "web developper",
      imgSrc: monimage,
      profession: "Etudiant",
      count: 0,
    };

    this.handleIncrease = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    this.handleSubmit = () => {
      alert(`Vous avez : ${this.state.count} seconds`);
    };
  }

  render() {
    return (
      <div>
        <h1 style={{ fontFamily: "cursive" }}>{this.state.fullname}</h1>
        <h2 style={{ fontFamily: "monospace" }}>{this.state.bio}</h2>
        <img
          style={{ height: "220", width: "200px" }}
          src={this.state.imgSrc}
        />
        <h2 style={{ fontFamily: "monospace" }}>{this.state.profession}</h2>

        <h2> {this.state.count} </h2>
        
        
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    console.log("Component did mount");
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("Component did unmount");
  }
}

export default Person;
