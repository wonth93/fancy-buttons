import React, { useState } from "react";

function AngryButton (props) {
  const [anger, setAnger] = useState(0);

  const handleClick = () => {
    if (anger < 1) {
      setAnger(anger + 0.1);
    } else {
      setAnger(0);
    }
  }

  return (
    <button className="AngryButton" style={{ backgroundColor: `rgba(255,0,0,${anger})` }} onClick={handleClick}>
      {/* When the threshold is not reached */}
      {anger < 1 && <span>Don't click me too much! </span>}
      

      {/* When the threshold is reached */}
      {anger > 1 && <span>Rawr!</span>}
      
    </button>
  );
}

export default AngryButton;