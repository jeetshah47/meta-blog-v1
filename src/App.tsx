import { Route, Routes } from "react-router-dom";
import NavBar from "./module/common/components/common/nav/nav";
import HomePage from "./module/home/page/HomePage";
import NewBlog from "./module/blogs/Page/NewBlogPage";
import BlogPage from "./module/blogs/Page/BlogPage";
import Blog from "./module/blogs/blog/Blog";
import { socket, WebsocketProvider } from "./module/common/utils/socket";

function App() {

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-initial justify-center flex">
        <NavBar />
      </div>
      <div className="flex-auto flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route
            path="/blogs/new"
            element={
              <WebsocketProvider value={socket}>
                <NewBlog />
              </WebsocketProvider>
            }
          />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
