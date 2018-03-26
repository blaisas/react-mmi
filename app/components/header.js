/**
 *
 * App.js
 *
 */
import React from 'react';

class header extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
      <div className="header">
      <p>  j'adore le { this.props.title } </p>
  
              
            </div>
            );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default header;
