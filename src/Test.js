import React from 'react'

export class Test extends React.Component {
  render() {
    if(NaN(this.props.number)){
      return(
        <div></div>
      );
    }

    return (
      <div>
        <ul>
          {this.props.number}
        </ul>
      </div>
    );
  }
}