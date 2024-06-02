import Card from "../../../common/components/card/card";
import { TextGenerateEffect } from "../../../common/components/motion/text-motion/text-motion";

const Banner = () => {
  return (
    <div className="w-full relative">
      <picture>
        <img src="/imgs/banner.png" alt="banner" />
      </picture>
      <div className="absolute bottom-[-40px] left-10 drop-shadow-lg w-[500px]">
        <Card padding="p-10" border="border border-secondary dark:border-dark-primary">
          <div>
            <div className="bg-blue px-2.5 py-1 w-fit rounded text-white text-sm">
              <p>Technology</p>
            </div>
            <div>
              <TextGenerateEffect words="Start your tech blog journey from here !" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Banner;
