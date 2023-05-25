import React from "react";

export const Animals = ({ animals }) => {
  return (
    <div className="App">
      {animals.map((animal) => {
        return (
          <div
            style={{ backgroundColor: `${animal.color}` }}
            className="animal"
          >
            {animal.name}
          </div>
        );
      })}
    </div>
  );
};
