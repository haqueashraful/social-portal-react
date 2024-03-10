import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReadCardDesign from "./ReadCardDesign";
import { usePortalContext } from "./Context";

const ReadCard = () => {
    const { readCount, readData } = usePortalContext();

    return (
        <div className="bg-[#797DFC1A] rounded-xl md:rounded-2xl lg:rounded-3xl p-3 border border-[#797DFC]">
            <div className="flex justify-between items-center mb-4 ">
                <h2 className="mulish text-xl font-bold text-black">Title</h2>
                <h2 className="inter text-[#12132D99]">
                    <FontAwesomeIcon icon={faCheck} className=" text-green-300" /> Mark as read
                    (<span id="readCount" className="text-green-600">{readCount}</span>)
                </h2>
            </div>
            <div className="border-b border border-[#000000] border-dashed mb-4"></div>
            <div className=" space-y-3">
                {readData.map((data, index) => (
                    <ReadCardDesign key={index} index={index} id={data.id} title={data.title} view={data.view} />
                ))}
            </div>
        </div>
    );
};

export default ReadCard;
