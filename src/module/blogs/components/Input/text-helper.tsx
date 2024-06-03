import { useState } from "react";
import DropDown from "../dropdown/dropdown";
const TextHelper = () => {
  const [value, setValue] = useState("");
  const [inputOn, setInputOn] = useState(true);
  const [showCommands, setShowCommands] = useState(false);

  const handleShow = () => {
    // value && setInputOn(!inputOn);
    // setShowCommands(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === "/") {
      console.log("Selected");
      setShowCommands(true);
    } else {
      setShowCommands(false);
    }
  };

  return (
    <div className="py-2 mx-2">
      {inputOn && (
        <input
          placeholder="Press '/' for commands"
          value={value}
          onChange={handleChange}
          onBlur={handleShow}
          className="bg-primary dark:bg-dark-secondary outline-none w-full py-2 px-4 rounded  text-md"
        />
      )}
      {showCommands && <DropDown />}
    </div>
  );
};

export default TextHelper;
