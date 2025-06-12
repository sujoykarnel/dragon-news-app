import { TbError404 } from "react-icons/tb";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <TbError404 className="text-9xl text-red-500"></TbError404>
      <h2 className="text-3xl font-bold">Page Not Found</h2>
    </div>
  );
};

export default PageNotFound;
