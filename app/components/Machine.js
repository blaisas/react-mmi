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
      
    <h3>  j'adore vraiment { this.props.title } </h3>
     <p>{ this.props.isActive }</p>
    
        
           </div>
            );
            
  }
 }

// Le composant sera accessible avec le nom "Machine"
 // <button class= "hello">//  Add #{this.props.number}
//     </button>
export default Machine;
