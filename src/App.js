import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    numero: 0
  };

  incremento = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  decremento = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <section>
        <div>
          <h1>Contador</h1>
          <h2>{this.state.numero}</h2>
          <section className="buttons">
            <button onClick={this.incremento} className="more">
              +
            </button>
            <button onClick={this.decremento} className="less">
              -
            </button>
          </section>
        </div>
      </section>
    );
  }
}
