import React, { Component } from 'react';

class Time extends Component {
constructor(props) {         //1. constructor is called for set initial value
    super(props);
    
    this.state={
        time : new Date()
    }
}

tick = () =>{
    this.setState({
        time : new Date()
    })
}


componentDidMount = () =>{
    //3. called for request data to server

    this.timeI= setInterval(()=>this.tick(), 1000);
    }


componentDidUpdate = ( prevProps,prevState) =>{
    //4. called whenever component is updated (we can trace particular update using prevprops/ prestate)
    if(this.state.time !== prevState.time){
        console.log("componentDidUpdate");

    }
}


componentWillUnmount=()=>{
    clearInterval(this.timeI);
}

  //2. render method called each time when state value changed
    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Time;