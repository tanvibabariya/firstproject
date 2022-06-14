import React, { Component } from 'react';

class Cityclass extends Component {
    constructor(props){
        super(props);

        this.state={
            cityName:"Surat"
        }
    }

    changeCity =()=>{
        this.setState({
            cityName:"Ahmedabad" 
        })
    }

    render() {
        return (
            <div>
                <h1>City Class base Component</h1>
                <p>{this.state.cityName}</p>
                <button onClick={()=>this.changeCity()}>Change city</button>
                <p>{this.props.id} {this.props.place_name}</p>
                
            </div>
        );
    }
}

export default Cityclass;