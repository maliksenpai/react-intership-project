import {Component} from "react";

class CounterViewer extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <b>
                {this.props.counter}
            </b>
        )
    }
}

export default CounterViewer;