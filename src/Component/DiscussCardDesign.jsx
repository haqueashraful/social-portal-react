import { faClock, faEye, faMessage } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePortalContext } from "./Context";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const DiscussCardDesign = ({ value }) => {
    // eslint-disable-next-line react/prop-types
    const { category, image, title, isActive, description, comment_count, view_count, posted_time, author } = value;
    // eslint-disable-next-line react/prop-types
    const { name } = author;

    const { setView, setTitle, setReadCount, setReadData, id, setId } = usePortalContext();

    const handleRead = (title, view) => {
        // eslint-disable-next-line react/prop-types
        setTitle(title.replace(/'/g, "&#39;"));
        setView(view); 
        setId(prevId => prevId + 1); // Increment id
        setReadData(prevData => [...prevData, { id: id, title: title, view: view }]); // Use updated id
        setReadCount(prevCount => prevCount + 1);
        toast.success('🦄 Mark as Read', {
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            position: "top-right",
            style: {
              width: "90%",
              maxWidth: "400px", 
            },
          });
    };

    return (
        <div>
            <div className="bg-[#F3F3F5] p-5 md:p-8 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl md:flex lg:flex justify-start items-start gap-8 shadow-lg hover:bg-[#797DFC1A] hover:border-[#797DFC] mb-5 hover:border">
                <div className="indicator">
                    <span className={`indicator-item badge ${isActive ? 'badge-success' : 'badge-error'} rounded-full`}></span>
                    <img src={image} alt="image" className="bg-white w-[75px] h-[72px] rounded-2xl" />
                </div>
                <div className="space-y-5 w-full">
                    <div className="flex justify-start lg:justify-start items-center gap-5">
                        <h2># <span>{category}</span></h2>
                        <h2>Author: <span>{name}</span></h2>
                    </div>
                    <h2 className="mulish font-bold text-xl text-left  text-black">{title}</h2>
                    <p className="inter text-base font-normal text-left">{description}</p>
                    <div className="border-t-4 border-dashed"></div>
                    <div className="lg:flex md:flex flex justify-between items-center">
                        <div className="flex lg:justify-center gap-2 md:gap-5 lg:gap-5 items-center">
                            <div className="flex lg:justify-center items-center gap-1 md:gap-2 lg:gap-2">
                                <FontAwesomeIcon icon={faMessage} className="lg:text-xl md:text-xl text-base"/>
                                <span className="lg:text-xl md:text-xl text-base">{comment_count}</span>
                            </div>
                            <div className="flex lg:justify-center items-center gap-2">
                                <FontAwesomeIcon icon={faEye} className="lg:text-xl md:text-xl text-base"/>
                                <span className="lg:text-xl md:text-xl text-base">{view_count}</span>
                            </div>
                            <div className="flex lg:justify-center items-center gap-2">
                                <FontAwesomeIcon icon={faClock} className="lg:text-xl md:text-xl text-base"/>
                                <span className="lg:text-xl md:text-xl text-base">{posted_time} min</span>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleRead(title, view_count)} className="btn rounded-full bg-green-600 hover:bg-[#797DFC]  flex justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-lg md:text-xl lg:text-xl p-0 md:p-1 lg:p-1 text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscussCardDesign;
