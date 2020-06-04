import React, { useState, useEffect } from "react";

const Kata2 = (props) => {
  const [view, setView] = useState(true);
  const [text, setText] = useState(false);

  useEffect(() => {
    setText(!text);
  }, [view]);

  let content = (
    <div>
      {view ? <p>Hola Mundo</p> : <p>No soy Hola Mundo</p>}
      <br />
      {text ? <p>UseEffect funcionó</p> : null}
      <br />
      <button onClick={() => setView(!view)}>Cambiar vista</button>
    </div>
  );
  return content;
};

export default Kata2;
