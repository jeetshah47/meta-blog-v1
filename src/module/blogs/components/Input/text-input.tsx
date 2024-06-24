import React, { useState } from "react";

type TextInputProps = {
  name: string;
  value: string;
  elementType: "h1" | "h2" | "h3" | "p" | "img";
  handleValuesHandle: (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
};

const TextInput = ({
  name,
  value,
  elementType,
  handleValuesHandle,
}: TextInputProps) => {
  // const [value, setValue] = useState("");
  const [inputOn, setInputOn] = useState(true);
  const classString =
    "text-2xl pt-4 font-semibold text-head-dark dark:text-head-primary cursor-pointer";

  const handleShow = () => {
    value && setInputOn(!inputOn);
  };

  const mapElementToName: {
    [index: string]: React.ReactNode;
  } = {
    h1: <h1 className={classString}>{value}</h1>,
    h2: <h2 className={classString}>{value}</h2>,
    h3: <h3 className={classString}>{value}</h3>,
    p: <p className={classString}>{value}</p>,
  };

  return (
    <div className="py-4">
      {inputOn && (
        <input
          placeholder="Press '/' for commands"
          value={value}
          name={name}
          onChange={(e) => handleValuesHandle(e, name)}
          onBlur={handleShow}
          className="bg-primary dark:bg-dark-secondary outline-none w-full py-2 px-4 rounded  text-md"
        />
      )}
      {!inputOn && mapElementToName[elementType]}
      {}
    </div>
  );
};

export default TextInput;
