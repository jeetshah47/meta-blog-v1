import Toggle from "../../buttons/toggle";
import Avatar from "../../avatar/avatar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const path = useLocation();
  
  useEffect(() => {
    if (path.pathname.includes("login")) setShow(false);
    else setShow(true);
  }, [path]);

  return (
    <div className={`flex-initial  w-3/5 py-4 ${!show && "hidden"}`}>
      <div className={`flex flex-1 justify-between items-center max-sm:hidden`}>
        <div>
          <p className="font-bold text-2xl">Meta Blogs</p>
        </div>
        <div className="flex flex-1 justify-center items-center gap-8">
          <Link to={"/"}>Home</Link>
          <Link to={"/blogs/1"}>Blog</Link>
          <Link to={"/blogs/new"} className="rounded bg-blue text-white p-2">
            Write
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <input
            placeholder="Search"
            className=" bg-primary dark:bg-dark-secondary outline-none py-2 px-4 rounded"
          />
          <Toggle />
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
