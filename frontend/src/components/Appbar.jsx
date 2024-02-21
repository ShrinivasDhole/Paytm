import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  return (
    <div className="shadow h-14 flex justify-between items-center">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex items-center">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center items-center mr-2">
          <div className="text-xl">U</div>
        </div>
      </div>
      <div className=" pl-3">
        <button
          onClick={() => {
            navigate("/signin");
          }}
          type="button"
          className="p-1 text-xs text-gray-700 transition-colors duration-200 bg-white border rounded-lg sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 mr-3 "
        >
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
