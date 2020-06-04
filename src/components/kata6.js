import React, { useState } from "react";

const ListTasks = (props) => {
  const [color, setColor] = useState("");
  const [data, setData] = useState([]);

  const handleColor = (props) => {
    setData([...data, color]);
    setColor("");
  };

  let content = (
    <div>
      <h1>Lista de tareas</h1>
      <br />
      <input value={color} onChange={(event) => setColor(event.target.value)} />
      {data != null ? (
        data.map((task, index) => {
          return (
            <ul key={index}>
              <li>{task}</li>
            </ul>
          );
        })
      ) : (
        <p>Soy nulo</p>
      )}
      <br />
      <button onClick={handleColor}>Agregar Color</button>
    </div>
  );
  return content;
};

export default ListTasks;
