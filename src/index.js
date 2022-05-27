import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainPage from "./pages/MainPage";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import todoReducer from "./redux/TodoReducer";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <MainPage />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
