const CounterButtons = (props) => {
    return (
        <>
            <button onClick={props.increaseCounter}>
                Increase Counter
            </button>
            <button onClick={props.decreaseCounter}>
                Decrease Counter
            </button>
            <button onClick={props.resetCounter}>
                Reset Counter
            </button>
        </>
    );
}

export default CounterButtons;