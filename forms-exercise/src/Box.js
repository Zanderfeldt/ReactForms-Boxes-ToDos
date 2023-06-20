import React from "react";

const Box = ({id, removeBox, color = 'blue', width = 5, height = 5}) => {
  const remove = () => removeBox(id);
  return (
    <div>
      <div 
        className="Box"
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor: `${color}`
        }}/>
        <button onClick={remove}>X</button>
    </div>
  );
}

export default Box