import { useRef } from "react";
import { Icon } from "@iconify/react";


type AccordionProps = {
  children: React.ReactNode;
  title: string;
  active: boolean;
  onClick: () => void;
  icon?: string;
};

const Accordion = ({
  title,
  children,
  active,
  onClick,
  icon,
}: AccordionProps) => {
  const contentRef = useRef(null);
  return (
    <div className="border-gray-200 pt-2">
      <button
        className="flex justify-between w-full p-2 text-left text-gray-800  items-center focus:outline-none dark:text-dark-primary"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          {icon && <Icon fontSize={"26px"} icon={icon} />}
          <span>{title}</span>
        </div>
        <span>
          {!active ? (
            <Icon icon={"mingcute:down-line"} />
          ) : (
            <Icon icon={"mingcute:up-line"} />
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          active ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: active ? "400px" : "0px",
        }}
      >
        {active && <div className="p-2 text-gray-700 ">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
