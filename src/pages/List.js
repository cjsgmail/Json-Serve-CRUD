import React from "react";
import { useState } from "react";
import Read from "./Read";
import "./List.css";

export default function List({ data }) {
  const [mode, setMode] = useState(false);
  const [readData, setReadData] = useState([]);

  const handleRead = (e) => {
    setMode(!mode);
    setReadData(
      data.filter((el) => {
        return el.title === e.target.textContent;
      })
    );
  };

  return (
    <div className="container">
      <section>
        <ul>
          {data.map((el) => {
            return (
              <li key={el.id}>
                <div>{el.id}</div>
                <div className="title" onClick={handleRead}>
                  {el.title}
                </div>
                <div>{el.username}</div>
              </li>
            );
          })}
        </ul>
      </section>
      {mode ? <Read readData={readData} mode={mode} setMode={setMode} /> : null}
    </div>
  );
}
