import Card from "../../../common/components/card/card";
import { PinContainer } from "../../../common/components/motion/card-pin/card-pin";

const PostCard = () => {
  return (
    <div className="my-12">
      <PinContainer title="New Post">
        <Card
          padding="p-4"
          width="w-[360px] flex flex-col items-center"
          border=""
        >
          <picture>
            <img
              alt="cover"
              src="https://picsum.photos/seed/picsum/360/240"
              className="rounded-md"
            />
          </picture>
          <div className="py-2 px-2.5">
            <div className="bg-blue bg-opacity-5 w-fit">
              <p className="text-sm text-blue font-medium ">Technology</p>
            </div>
            <div className="py-2">
              <p className="font-semibold text-2xl">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </p>
            </div>
          </div>
        </Card>
      </PinContainer>
    </div>
  );
};

export default PostCard;
