import {createContext, useContext, useEffect, useState} from "react";
import CounterButtons from "../view/CounterButtons";
import CounterViewer from "../view/CounterViewer";

const AppFunction = (props) => {

    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        setCounter(counter - 1);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return(
        <div>
            <CounterButtons increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} resetCounter={resetCounter} />
            <CounterViewer counter={counter} />
        </div>
    )
}

export default AppFunction;

const UserContext = createContext();

function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}


function Component3() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}