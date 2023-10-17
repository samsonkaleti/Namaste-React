import React from "react"; 
import  ReactDOM  from "react-dom/client"; 

// ReactElement :

const heading = React.createElement("h1",{},'Hello this is ReactElement');


// ShortHand Functional Component :


const Tittle = () => <h1>this Is tittle Of React</h1> 



// Functional Component : 
const Heading = () =>{
    return(
        <div>
        {heading}
        <Tittle/>         
        <h1>React Component</h1>
        </div>
    )
} 



const root = ReactDOM.createRoot(document.getElementById("root")) 

root.render(<Heading/>)



