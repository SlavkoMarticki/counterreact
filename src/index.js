import React from "react";
import ReactDOM  from "react-dom/client";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));



const Holder = () => {
   
    const [count, setCount] = React.useState(0);

    const plus = () =>{
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    }

    return(
    <div className="holder">
        <div className="numberHolder">
            <p>{count}</p>
        </div>
        <div className="buttonHolder">
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    </div>);
}
const Container = () => {
    return(
        <div className="Container">
            <Holder />
        </div>
    );
}

root.render(<Container />)


