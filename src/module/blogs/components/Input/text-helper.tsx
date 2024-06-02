import  {useState} from 'react'
import DropDown from '../dropdown/dropdown';
const TextHelper = () => {
    const [value, setValue] = useState("");
    const [inputOn, setInputOn] = useState(true);
  
    const handleShow = () => {
      value && setInputOn(!inputOn);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      if(e.target.value === "/") {
        console.log("Selected");
      }
    }

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
     <DropDown />
  </div>
  )
}

export default TextHelper