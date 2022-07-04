import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from "./components/TodoContainer"

const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <h1>Hello from Create React App</h1>
root.render(
  <React.StrictMode> 
    <TodoContainer />
  </React.StrictMode>,
);

// <React.StrictMode> enables checks and warning not only for the component but also its descendants.