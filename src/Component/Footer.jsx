import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="lg:mt-24 mt-12 bg-gradient-to-b from-[#12132d12] to-[#12132d00] py-10 lg:p-28 text-center"
        >
              <div className="">
        <h2 href="#" className="mulish text-4xl font-black">
          Social<span className="text-[#797DFC]">P</span>
        </h2>
        <p
          className="mulish text-[#12132DB3] text-base md:text-lg lg:text-xl mt-4 mb-8"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots <br />
          in a piece of classNameical Latin literature from 45 BC
        </p>
        <div className="flex gap-5 justify-center items-center">
          <FontAwesomeIcon icon={faTwitter} className="text-3xl hover:text-[#797DFC]" />
          <FontAwesomeIcon icon={faFacebook} className="text-3xl hover:text-[#797DFC]" />
          <FontAwesomeIcon icon={faInstagram} className="text-3xl hover:text-[#797DFC]" />
          <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-[#797DFC]" />
        </div>
      </div>
      <div className="my-5 md:my-12 lg:my-12 border border-b border-dashed border-[#797DFC]" > </div>
      <div>
        <p className="mulish font-light">2017, All Rights Reserved.</p>
      </div>
        </div>
    );
};

export default Footer;