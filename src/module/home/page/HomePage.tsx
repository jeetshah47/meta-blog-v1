import Banner from "../components/banner/banner";
import Post from "../components/post/post";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-3/5">
        <Banner />
        <div className="h-20" />
        <Post />
      </div>
    </div>
  );
};

export default HomePage;
