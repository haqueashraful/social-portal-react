// eslint-disable-next-line react/prop-types
const LatestCard = ({ post }) => {
  // eslint-disable-next-line react/prop-types
  const { cover_image, profile_image, title, description } = post;
  // eslint-disable-next-line react/prop-types
  const { posted_date, designation, name } = post.author;
  return (
    <div>
      <div className="bg-white border border-[#12132D26] rounded-2xl min-h-[460px] max-h-auto p-6 shadow-xl">
        <img
          className="w-full rounded-2xl lg:rounded-[20px] md:rounded-[20px] mb-4"
          src={cover_image}
          alt=""
        />
        <div className="space-y-3">
          <div className="flex justify-start items-center">
            <i className="fa-regular fa-calendar"></i>
            <p className="ml-2">
              { posted_date ? (
                posted_date
              ): (
                "No publish date"
              )
              }
            </p>
          </div>
          <h2 className="mulish font-extrabold text-lg text-black min-h-[56px]">
            {title}
          </h2>
          <p className="mulish min-h-[75px]">{description}</p>
          <div className="flex justify-start items-center gap-5">
            <img
              src={profile_image}
              className="w-16 h-16 rounded-full bg-black"
            />
            <div>
              <h2 className="mulish font-bold text-lg text-black">{name}</h2>
              <p className="mulish text-sm">
                {
                    designation ? (
                        designation
                    ) : (
                        "Unknown"
                    )
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCard;
