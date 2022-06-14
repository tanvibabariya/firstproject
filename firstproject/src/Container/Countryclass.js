import React, { Component } from 'react';
import Cityclass from './Cityclass';

class Countryclass extends Component {
    constructor(props){
        super(props);

        this.state={
            countryName :'India'
            
        }
    }
        changeCountry = () => {
            this.setState({
                countryName :'US'
            })
        }

    
    render() {
        return (
            <div>
                <h1>Country Class base Component</h1>
                <p>{this.state.countryName}</p>
                <button onClick={()=>this.changeCountry()}>Change country</button>
                <Cityclass id="101" place_name={this.state.countryName === 'India' ? "Tajmahal"  :  "Statue Of Liberty"}/>
            </div>
        )
    }
}

export default Countryclass;