// function Hello(){

//     return <h1>Hello World!</h1>
// }

// const name = "Rajendra";
// const Hello = () => <h1>Hello There!{name}</h1>

const displayMessage = () => {
    return "I need help!";
};
const Hello = () => <h1>Alert: {displayMessage()}</h1>

export default Hello;