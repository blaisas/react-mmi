/**
 *
 * App.js
 *
 */
import React from 'react';
import { Button } from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Toggle from 'react-toggle'

import "react-toggle/style.css"

// On peut aussi importer du CSS de la meme facon.
import '../../css/style.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            caf: [
                { id: 0, name: "La cafetière", isActive: false },
                { id: 1, name: "Le café noisette", isActive: true },
                { id: 2, name: "la théière", isActive: false }
            ]
            //      Cafs: {
            //      Caf1: "machine 1 def dans le index",
            //     Caf2: "machine 2 def dans le index", 
            //       Caf3: "machine 3 def dans le index" 
        }
        this.changeStatus = this.changeStatus.bind(this);
    }
    changeStatus(id) {
        if (this.state.caf[id].isActive) {
            this.state.caf[id].isActive = false;
        }
        else {
            this.state.caf[id].isActive = true;

        }
        this.forceUpdate();
    }
    
    changeMachine(machine){
        this.changeStatus.bind(this, machine.id)
        return(
             "Marchine active : machine" + machine.name + machine.id
            );
    }
    
    addMachineToState(name,active){
        console.log("pupute");
        this.state.caf.push({id: (this.state.caf.length + 1), name: name, isActive: active});
    }


    render() {
        const mycaf = this.state.caf.map(machine =>
            <div>
                <Toggle defaultChecked={machine.isActive} onChange={this.changeStatus.bind(this, machine.id)} name={"Marchine active"}/>
                <span className= {machine.isActive ? "Marchine active" : "machine"}> {machine.name}{machine.id} </span>
            </div>
        );


        // Calcul des compteurs
        const machinesIds = Object.keys(this.state.caf);
        const totalActive = machinesIds.reduce((prevTotal, key) => {
            const machine = this.state.caf[key];
            const isAvailable = machine && machine.isActive;
            // On incrémente le compteur à chaque fois que l'on trouve une machine active
            return isAvailable ? prevTotal + 1 : prevTotal
        }, 0);
        const total = machinesIds.length;
        // Dans tous les cas, afficher
        return (

            <div id="machine" >
      
      <Header />
      <h4> Nos machines </h4>
        <Machine name={this.state.caf[0].name} number="1" isActive="Neuf" title = "La Cafetière !"/>
        <Machine name={this.state.caf[1].name} number="2" isActive="Ocassion" title = "Le Café noisette!"/>
        <Machine name={this.state.caf[2].name} number="3" isActive="Neuf" title = "La théière !"/>
        <h4> Disponibilité </h4>
        
        <form>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} />
          </label>
          <label>
                Active : 
              <select>
                  <option value={this.state.select = true}>oui</option>
                  <option value={this.state.select = false}>non</option>
              </select>
          </label>
          <button type="button" onClick={this.addMachineToState(this.state.name,this.state.select)} > click </button>
        </form>
        
    
        <div className="counter">
            <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
        </div>
        <ul>{mycaf}</ul>
       <Footer />
       </div>
        );
    }

}
export default App;
