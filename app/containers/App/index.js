/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';

// On peut aussi importer du CSS de la meme facon.
import '../../css/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caf: [
      {id: 0, name: "La cafetière", isActive:false},
       {id: 1, name: "Le café noisette", isActive:true},
       {id: 2, name: "la théière", isActive:false}
      ]
//      Cafs: {
//      Caf1: "machine 1 def dans le index",
//     Caf2: "machine 2 def dans le index", 
//       Caf3: "machine 3 def dans le index" 
    }
        this.changeStatus = this.changeStatus.bind(this);
  }
  changeStatus(id) {
    if (this.state.caf[id].isActive){
     this.state.caf[id].isActive=false;
    }
    else{
      this.state.caf[id].isActive=true;
      
    }
    this.forceUpdate();
  }
 
  
  render() {
const mycaf =this.state.caf.map(machine =>
<div>
<p className= {machine.isActive ? "Marchine active" : "machine"}> {machine.name}{machine.id} <button onClick={this.changeStatus.bind(this, machine.id)}>Click</button></p>
</div>
);
   // Dans tous les cas, afficher
    return (
      
      <div id="machine" >
      
      <Header />
      <h4> Nos machines </h4>
        <Machine name={this.state.caf[0].name} number="1" isActive="Neuf" title = "La Cafetière !"/>
        <Machine name={this.state.caf[1].name} number="2" isActive="Ocassion" title = "Le Café noisette!"/>
        <Machine name={this.state.caf[2].name} number="3" isActive="Neuf" title = "La théière !"/>
        <h4> Disponibilité </h4>
        <ul>{mycaf}</ul>
       <Footer />
       </div>
    );
}

}     
   export default App;   

   
