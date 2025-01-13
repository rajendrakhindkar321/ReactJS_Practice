import  { Component} from 'react';

class ClassEvent extends Component{

    handleClick(){
        console.log("Class based Component.");
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>Click Here!</button>
            </div>
        )
    }
}

export default ClassEvent;