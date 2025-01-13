import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter:0
        }

        this.increment = this.increment.bind(this);
    }
    increment(){
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter-1,
        });
    }

    reset(){
        this.setState({
            counter:this.state.counter =0,
        });
    }

    render(){
        return (
            <div>
            <h3>Count value is: {this.state.counter} </h3>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }

}

export default Counter;