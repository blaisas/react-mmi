/**
 *
 * App.js
 *
 */
import React from 'react';
import Bouton from './Bouton.js';

class Machine extends React.Component {
 
    render() {
    // Dans tous les cas, afficher
    return (
      <div className="machine">
      
    <h3>  j'adore le { this.props.title } , { this.props.isActive }</h3>
      <p>  j'adore le { this.props.number } </p>
      <button class= "hello">
            Add #{this.props.number}
         </button>
        
           </div>
            );
  }
 }

// Le composant sera accessible avec le nom "Machine"
export default Machine;
