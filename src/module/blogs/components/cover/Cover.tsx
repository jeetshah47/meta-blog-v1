import {  useState } from "react";
import { Icon } from "@iconify/react";

const Cover = () => {
  const [image, setImage] = useState("");
  // const ref = useRef()
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(URL.createObjectURL(file));
       setImage(URL.createObjectURL(file))
    }
  };

  return (
    <div className=" min-h-80 bg-primary dark:bg-dark-secondary outline-none rounded font-bold text-2xl flex items-center justify-center">
      {!image && (
        <>
          <input
            onChange={handleImage}
            type="file"
            id="cover-img"
            className="hidden"
          />
          <label htmlFor="cover-img" className="cursor-pointer">
            <Icon icon={"gridicons:add"} fontSize={"36px"} />
          </label>
        </>
      )}
      {image && (
        <picture className="w-full">
          <img src={image} className="w-full h-full" alt="cover photo" />
        </picture>
      )}
    </div>
  );
};

export default Cover;
