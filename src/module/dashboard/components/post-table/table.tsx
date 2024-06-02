import { DataType } from "../../types/post";

const Table = ({ blogs }: DataType) => {
  return (
    <div>
      <table className="table-auto border-collapse w-full">
        <thead className="text-left text-table-head">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Date</th>
            <th>Published</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="text-head-dark font-medium dark:text-white">
              <td className="py-5">{blog.id}</td>
              <td>{blog.name}</td>
              <td>{blog.date.toDateString()}</td>
              <td>{blog.published ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
