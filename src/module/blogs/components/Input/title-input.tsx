import { useState } from "react";

const TitleInput = () => {
  const [value, setValue] = useState("");
  const [inputOn, setInputOn] = useState(true);

  const handleShow = () => {
    value && setInputOn(!inputOn);
  };

  return (
    <div className="py-4">
      {inputOn && (
        <input
          placeholder="Title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={handleShow}
          className="bg-primary dark:bg-dark-secondary outline-none w-full py-2 px-4 rounded font-bold text-2xl"
        />
      )}
      {!inputOn && (
        <p className="text-2xl pt-4 font-semibold text-head-dark dark:text-head-primary cursor-pointer" onClick={handleShow}>
          {value}
        </p>
      )}
    </div>
  );
};

export default TitleInput;
