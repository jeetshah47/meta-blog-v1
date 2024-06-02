import { useRoutes } from "react-router-dom";


const Footer = () => {
  const path = useRoutes
  console.log(path);

  return (
    <div className={"flex justify-between w-3/5 py-8"}>
      <div className="w-1/4">
        <p className="text-lg font-semibold">About</p>
        <div className="py-2">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div>
          <span className="font-semibold">Email</span>:<p>info@meta-blog.com</p>
        </div>
        <div>
          <span className="font-semibold">Phone</span>:<p>info@meta-blog.com</p>
        </div>
      </div>
      <div className="w-1/4">
        <p className="font-bold text-xl">Weekly Newsletter</p>
        <div className="py-2">
          <p className="">Get blog articles and offers via email</p>
          <div className="py-2 space-y-3">
            <input
              className="outline-none py-3 px-4 border rounded-md dark:border-dark-primary text-sm w-full bg-white dark:bg-dark-secondary"
              placeholder="xyz@abc.com"
            />
            <button className="bg-blue rounded-md  text-white w-full py-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
