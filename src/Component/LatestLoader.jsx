
const LatestLoader = () => {
    return (
        <div className="text-center flex justify-center items-center gap-0">
            <span style={{width: "240px", height: "260px"}} className="loading loading-bars loading-xs bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-loading"></span>
            <span style={{width: "240px", height: "200px"}} className="loading loading-bars loading-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-loading"></span>
            <span style={{width: "240px", height: "230px"}} className="loading loading-bars loading-md bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-loading"></span>
            <span style={{width: "240px", height: "260px"}} className="loading loading-bars loading-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-loading"></span>
        </div>
    );
};

export default LatestLoader;