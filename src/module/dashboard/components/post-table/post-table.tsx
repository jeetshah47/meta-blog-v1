import { Blog } from "../../types/post";
import Table from "./table";

const PostTable = () => {
  const rawData: Blog[] = [
    {
      date: new Date(),
      id: "dqwdsd-qwdqw4d",
      name: "My First Blog",
      published: true,
    },
    {
      date: new Date(),
      id: "dqwd2-qwdqw4d",
      name: "My First Blog",
      published: true,
    },
    {
      date: new Date(),
      id: "dqwd34-qwdqw4d",
      name: "My First Blog",
      published: true,
    },
    {
      date: new Date(),
      id: "dqwd45-qwdqw4d",
      name: "My First Blog",
      published: true,
    },
  ];

  return (
    <div className=" rounded-md p-8 border border-secondary dark:border-dark-primary bg-white dark:bg-dark-secondary">
      <div>
        <p className="text-primary text-2xl font-bold dark:text-head-primary">
          All Blogs
        </p>
        <div className="py-2">
          <Table blogs={rawData} />
        </div>
      </div>
    </div>
  );
};

export default PostTable;
