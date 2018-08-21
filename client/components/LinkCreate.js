import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit(event) {
    event.preventDefault();

    console.log(this.refs.link.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Enter your URL!</label>
          <input ref="link" type="text" className="form-control"/>
        </div>
        <button className="btn btn-primary">Snippify!</button>
      
      </form>
    )
  }
}

export default LinkCreate;