import {Link, useNavigate} from "react-router-dom";

const ExamplePage = () => {

    const navigator = useNavigate();

    const handleNavigateWithFunction = () => {
        navigator('/');
    }

    return <div>
        <p> Different Page </p>
        <Link to={'/'}> Back to Home </Link>
        <br/>
        <button onClick={handleNavigateWithFunction}> Back to Home with Function</button>
    </div>
}

export default ExamplePage;