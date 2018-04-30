/**
 *
 * App.js
 *
 */
import React from 'react';


class Bouton extends React.Component {
showOffline(e){  
    console.log(e.target.id)
   this.props.offline()    
  }
}
  export default Bouton;