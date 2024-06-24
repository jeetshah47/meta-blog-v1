import ElementDiv from "../elements/element-div";

type DropDownProps = {
  addInputType: (type: string) => void;
};

const DropDown = ({ addInputType }: DropDownProps) => {
  const itemMap = [
    {
      id: "h1",
      text: "Heading 1",
      desc: "A simple one line text",
      icon: "lucide:heading-1",
    },
    {
      id: "h2",
      text: "Heading 2",
      desc: "A simple one line text",
      icon: "lucide:heading-2",
    },
    {
      id: "h3",
      text: "Heading 2",
      desc: "A simple one line text",
      icon: "lucide:heading-3",
    },
    {
      id: "p",
      text: "Paragraph",
      desc: "A simple one line text",
      icon: "ci:text",
    },
    {
      id: "img",
      text: "Image",
      desc: "A simple one line text",
      icon: "fluent-mdl2:media-add",
    },
  ];

  return (
    <div className="w-fit max-h-80 overflow-auto border">
      <div className="">
        {itemMap.map((option) => (
          <ElementDiv
            key={option.id}
            add={() => addInputType(option.id)}
            text={option.text}
            desc={option.desc}
            icon={option.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DropDown;
