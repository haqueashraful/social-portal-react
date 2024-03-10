import Forum from "../assets/images/joinforum.png"
import { usePortalContext } from "./Context";


const JoinForum = () => {
  const {usersRef} = usePortalContext()
    return (
        <section id="users" ref={usersRef} className="lg:my-24 my-12">
        <div
          className="bg-black p-8 lg:p-10 md:p-10 rounded-xl lg:rounded-[32px] md:rounded-3xl"
        >
          <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center">
            <div>
              <h2 className="mulish font-black text-4xl text-white">
                Join Our Forum
              </h2>
              <p
                className="mulish font-medium text-base md:text-lg lg:text-xl text-[#FFFFFFCC] mt-4 mb-8"
              >
                Share your favorite opinion and win and wp forum coffee mug!
                Yes, you can <br />
                run unit tests and view the results directly within the app.
              </p>
              <button
                className="mulish font-bold text-xl btn text-white bg-[#797DFC] border-none rounded-full"
              >
                Registered Now
              </button>
            </div>

            <div>
                <img src={Forum} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default JoinForum;