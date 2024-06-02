import PostTable from "../components/post-table/post-table";
import Stats from "../components/stats/Stats";

const DashboardPage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-3/5">
        <Stats />
        <div className="h-10" />
        <PostTable />
      </div>
    </div>
  );
};

export default DashboardPage;
