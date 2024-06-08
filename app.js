import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./src/Components/Nav";
import  Todoitem from "./src/Components/Todoitems";


const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Todoitem/>
    </div>
  );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);