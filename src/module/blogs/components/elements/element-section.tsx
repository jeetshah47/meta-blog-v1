import { useState } from "react";
import ElementDiv from "./element-div";
import Accordion from "../../../common/components/accordion/accordion";

type ElementProps = {
  addElement: (name: string) => void;
}

const ElementSection = ({addElement}:ElementProps) => {
  const [current, setCurrent] = useState(-1);

  return (
    <div>
      <Accordion
        active={current === 0}
        onClick={() => setCurrent(current === 0 ? -1 : 0)}
        title="Text"
        icon="mdi:text"
      >
        <ElementDiv add={() => addElement("text-label")} text="Label" desc="A simple one line text" icon="fluent:text-16-filled" />
        <ElementDiv add={() => addElement("text-para")} text="Paragraph" desc="A long para text" icon="hugeicons:paragraph" />
      </Accordion>
      <Accordion
        active={current === 1}
        onClick={() => setCurrent(current === 1 ? -1 : 1)}
        title="Media"
        icon="fluent-mdl2:media-add"
      >
        <ElementDiv add={() => addElement("media-image")} text="Image" desc="A long para text" icon="ph:image" />
      </Accordion>
      <Accordion
        active={current === 2}
        onClick={() => setCurrent(current === 2 ? -1 : 2)}
        title="Section"
        icon="ph:brackets-angle-duotone"
      >
        <ElementDiv add={() => addElement("section-code")} text="Code" desc="A code formatted section" icon="tdesign:code" />
      </Accordion>
    </div>
  );
};

export default ElementSection;
