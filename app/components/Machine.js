/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
      <div className="machine">
      <p>  j'adore le { this.props.title } , { this.props.isActive }</p>
      <p>  j'adore le { this.props.number } </p>
              
            </div>
            );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
