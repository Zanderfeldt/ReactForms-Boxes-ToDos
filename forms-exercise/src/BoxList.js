import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox}])
  };
  const removeBox = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };
  return (
    <div>
      <h3>Boxes!</h3>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map(({id, color, height, width}) => (
        <Box
          key={id}
          id={id}
          color={color} 
          width={width} 
          height={height}
          removeBox={removeBox}/>
        ))}
      </div>
    </div>
  )
}

export default BoxList