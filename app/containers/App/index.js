/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import header from '../../components/header.js';
import footer from '../../components/footer.js';
// On peut aussi importer du CSS de la meme facon.
import '../../css/style.css';

export default function App() {
  return (
    <div id="machine" >
    <Machine number="1" isActive="yes" title = "Café !"/>
     <Machine number="2" isActive="no" title = "Café noisette!"/>
      <Machine number="3" isActive="no" title = "thé !"/>
       <Machine number="4" isActive="no" title = "soupe !"/>
       </div>
    );
}
