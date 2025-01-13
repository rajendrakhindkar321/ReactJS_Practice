import { Component } from "react";

class Message extends Component {

    render(){
        const {messageCode,messageContent} = this.props;
        return <h1>{messageCode}.{messageContent}</h1>
    }

}

export default Message;