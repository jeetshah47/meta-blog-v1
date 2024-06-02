import { Icon } from "@iconify/react";

type ElementType = {
    text: string;
    icon?: string;
    desc: string;
    add: () => void;
};

const ElementDiv = ({ text, icon, desc, add }: ElementType) => {
    return (
        <div onClick={add}>
            <div className="py-2 px-4  rounded gap-2 flex items-center hover:bg-primary hover:dark:bg-dark-secondary cursor-pointer">
                <div className="p-2 rounded bg-white dark:bg-dark-secondary dark:text-white">{icon && <Icon fontSize={"24px"} icon={icon} />}
                </div>
                <div>
                    <p className="text-md text-secondary dark:text-white">{text}</p>
                    <p className="text-secondary dark:text-dark-primary">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ElementDiv;
