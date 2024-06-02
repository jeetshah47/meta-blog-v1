import PostCard from "./post-card";

const Post = () => {
  return (
    <div className="py-2">
      <p className="font-bold text-2xl">Latest Post</p>
      <div className="py-8 flex justify-center gap-10 flex-wrap ">
       <PostCard />
       <PostCard />
       <PostCard />
       <PostCard />
      </div>
    </div>
  );
};

export default Post;
