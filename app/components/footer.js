/**
 *
 * App.js
 *
 */
import React from 'react';

class footer extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
      <div className="footer">
      <p>  j'adore le { this.props.title } </p>
  
              
            </div>
            );
  }
}

// Le composant sera accessible avec le nom "Machine"
export default footer;
