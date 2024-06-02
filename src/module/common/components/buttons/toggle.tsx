import { useState } from "react";

const Toggle = () => {
  const [darked, setDarked] = useState(false);

  const handleDarkMode = () => {
    darked
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");

      setDarked(!darked)
  };
  return (
    <div
      className={`bg-secondary dark:bg-blue w-14 rounded-full p-0.5 flex duration-300 ${
        !darked ? "justify-start" : "justify-end"
      }`}
    >
      <picture>
        <img
          onClick={handleDarkMode}
          className="cursor-pointer"
          alt="sun"
          src="/icons/sunny.svg"
        />
      </picture>
    </div>
  );
};

export default Toggle;
