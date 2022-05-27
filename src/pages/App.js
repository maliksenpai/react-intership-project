import {Component} from "react";
import CounterViewer from "../view/CounterViewer";
import CounterButtons from "../view/CounterButtons";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
    }

    increaseCounter = () => {
        this.setState((state) => {
            return { counter: state.counter + 1 }
        });
    }

    decreaseCounter = () => {
        this.setState((state) => {
            return { counter: state.counter - 1 }
        });
    }

    resetCounter = () => {
        this.setState(() => {
            return { counter: 0 }
        });
    }

    render() {
        return (
            <div>
                <CounterButtons increaseCounter={this.increaseCounter} decreaseCounter={this.decreaseCounter} resetCounter={this.resetCounter} />
                <CounterViewer counter={this.state.counter} />
                <br />
                {process.env.REACT_APP_ENV_VARIABLE}
            </div>
        );
    }
}

export default App;
