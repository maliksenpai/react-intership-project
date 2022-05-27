import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import ExamplePage from "./ExamplePage";
import TodoPage from "./TodoPage";

const MainPage = () => {

    return <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />}/>
            <Route path={'/different-page'} element={<ExamplePage />} />
            <Route path={'/todo'} element={<TodoPage />} />
        </Routes>
    </BrowserRouter>
}

export default MainPage;