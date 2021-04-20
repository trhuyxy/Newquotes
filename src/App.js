import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuotesAsync } from "./redux/arraySlice";
export default function App() {
  const [quotes, setQuotes] = useState("Fress button to get your adage");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getQuotesAsync());
  }, [dispatch]);
  const ChangeAdage = () => {
    let randomNumber = Math.floor(Math.random() * todos.length);
    setQuotes(todos[randomNumber].adage);
    setAuthor(todos[randomNumber].author);
  };
  return (
    <div className="App">
      <div className="context">
        <h1>Good adage</h1>
        <p className="quotes">"{quotes}"</p>
        <p className="author">{author}</p>
      </div>
      <div className="btn">
        <button onClick={() => ChangeAdage()}>Get new Adage</button>
      </div>
    </div>
  );
}
