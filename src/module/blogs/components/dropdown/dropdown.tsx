import ElementDiv from "../elements/element-div";

const DropDown = () => {
    
    return (
        <div className="w-fit max-h-80 overflow-auto border">
            <div className="">
            <ElementDiv add={() => {}} text="Heading 1" desc="A simple one line text" icon="lucide:heading-1" />
            <ElementDiv add={() => {}} text="Heading 2" desc="A simple one line text" icon="lucide:heading-2" />
            <ElementDiv add={() => {}} text="Heading 3" desc="A simple one line text" icon="lucide:heading-3" />
            <ElementDiv add={() => {}} text="Text" desc="A simple one line text" icon="ci:text" />
            <ElementDiv add={() => {}} text="Image" desc="A simple one line text" icon="fluent-mdl2:media-add" />
            <ElementDiv add={() => {}} text="Text" desc="A simple one line text" icon="ci:text" />
            </div>
        </div>
    )
}

export default DropDown;