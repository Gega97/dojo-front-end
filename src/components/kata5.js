import React, { useState, useEffect } from "react";
// import data from "../data";

const ListTask = (props) => {
  //   const [list, setList] = useState(null);
  const [color, setColor] = useState("");
  const [data, setData] = useState(["Amarrillo", "Verde"]);

  //   useEffect(() => {
  //     setList(data);
  //   });
  let content = (
    <div>
      <h1>Lista de tareas</h1>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
      ></input>
      <br />
      {data.map((color) => {
        return (
          <ul>
            <li>{color}</li>
          </ul>
        );
      })}
      {/* {list != null
        ? list.map((task) => {
            return (
              <ul>{task.status ? <li key={task.id}>{task.name}</li> : null}</ul>
            );
          })
        : null} */}
      <button onClick={() => setData([...data, color])}>Agregar</button>
    </div>
  );
  return content;
};

export default ListTask;
