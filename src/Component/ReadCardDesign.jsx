import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortalContext } from "./Context";

// eslint-disable-next-line react/prop-types
const ReadCardDesign = ({ title, view, id, index }) => {
  console.log(id, index)
  const { deleteReadItem } = usePortalContext();

  const handleDelete = () => {
    deleteReadItem(index); 
  };

  return (
    <div>
      <div className="space-y-4">
        <div className="p-2 md:p-4 lg:p-4 bg-white flex justify-between items-center gap-4 rounded-2xl shadow-lg">
          <li className=" list-none">{index + 1}</li>
          <h2 className="mulish font-semibold text-base lg:text-lg md:text-sm text-black">
            {title}
          </h2>
          <div className="flex md:flex-col lg:flex-row justify-center gap-1 lg:gap-2 md:gap-2 items-center">
            <FontAwesomeIcon icon={faEye} className="text-xl" />
            <span>{view}</span>
          </div>
          <div className="rounded-full" onClick={handleDelete}>
            <FontAwesomeIcon className="text-red-500" icon={faTrashAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadCardDesign;
