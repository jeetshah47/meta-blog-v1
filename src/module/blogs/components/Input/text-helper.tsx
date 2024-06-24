import { useState } from "react";
import DropDown from "../dropdown/dropdown";
import TextInput from "./text-input";



const TextHelper = () => {
  const [showCommands, setShowCommands] = useState(false);
  const [elements, setElements] = useState<React.ReactNode[]>([]);

  const handleValueSelected = (value: string) => {
    const cloneElement = [...elements];
    const newElement = generateElement(value, elements.length - 1);
    cloneElement.push(newElement);
    setElements([...cloneElement]);

    generateElement;
  };

  const handleValuesHandle = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    // setValues(e.target.value);
    if (e.target.value === "/") {
      console.log("Selected");
      setShowCommands(true);
    } else {
      setShowCommands(false);
    }
  };

  const generateElement = (element: string, index: number) => {

    const mapElements: { [index: string]: React.ReactNode } = {
      h1: (
        <TextInput
          name={`h1-${index}`}
          value={values[`${element}-${index}`].value}
          elementType="h1"
          handleValuesHandle={handleValuesHandle}
        />
      ),
      h2: (
        <TextInput
          name={`h2-${index}`}
          value={values[`${element}-${index}`].value}
          elementType="h2"
          handleValuesHandle={handleValuesHandle}
        />
      ),
      h3: (
        <TextInput
          name={`h3-${index}`}
          value={values[`${element}-${index}`].value}
          elementType="h3"
          handleValuesHandle={handleValuesHandle}
        />
      ),
      p: (
        <TextInput
          name={`p-${index}`}
          value={values[`${element}-${index}`].value}
          elementType="p"
          handleValuesHandle={handleValuesHandle}
        />
      ),
      img: (
        <picture>
          <img className="border w-full" alt="sd" src="/imgs/dummer.png" />
        </picture>
      ),
      // "section-code": <div></div>,
    };

    return <div key={index}>{mapElements[element]}</div>;
  };

  return (
    <div className="py-2 mx-2">
      {showCommands && <DropDown addInputType={handleValueSelected} />}

    </div>
  );
};

export default TextHelper;
