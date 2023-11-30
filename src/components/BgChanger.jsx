import { useState } from "react";
import { COLORS } from "../utils/utils";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState(COLORS[8].backgroundColor);

  const handleColor = (color) => {
    setBgColor(color.backgroundColor);
  };

  return (
    <div className={"w-full h-screen relative " + bgColor}>
      <div className="w-10/12 flex p-4 flex-wrap gap-5 rounded-xl absolute bottom-10  left-1/2  transform -translate-x-1/2 bg-slate-400">
        {COLORS.map((color) => (
          <button
            key={color.id}
            className={color.className + " shadow-lg"}
            onClick={() => handleColor(color)}
          >
            {color.displayName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BgChanger;
