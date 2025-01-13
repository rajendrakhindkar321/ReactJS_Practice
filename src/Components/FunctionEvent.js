function FunctionEvent(){

    const handleClick = () =>{
        console.log("Button is Click.");
    }
    return (
        <div>
            Function Component
            <button onClick={handleClick}>Click Here!</button>
        </div>
    )
}

export default FunctionEvent;