import React, { useEffect, useState } from "react";
// import BmiCal from "./BMI_calc/BmiCal";
import Navbar from "./ToDo/Navbar";
import Todos from "./ToDo/Todos";
import Footer from "./ToDo/Footer";
import AddTodo from "./ToDo/AddTodo";
import About from "./ToDo/About";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const AppApp = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted",todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  return (
    <div>
      {/* <Router>
      {/* < BmiCal/> 
        <Navbar title="My Todo List" searchBar={false} />
        <Routes>
          <Route exact path="/" render={() => {
            return (
              <>
               <AddTodo addTodo={addTodo} />
               <Todos todos={todos} onDelete={onDelete} /></>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          </Routes>
     
        <Footer />

        </Router> */}
      <Router>
        <Navbar title="My Todo List" searchBar={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>

      
    </div>
  );
};

export default AppApp;
