import {
  faFontAwesome,
  faNewspaper,
} from "@fortawesome/free-regular-svg-icons";
import { faHouse, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePortalContext } from "./Context";

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");
  const { homeRef, newsRef, usersRef, criteriaRef } = usePortalContext();
  return (
    <div>
      <nav className="py-4 lg:py-8">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-1"
              >
                <li>
                  <div
                    className={`tooltip tooltip-right bg-[#0307121A] w-full rounded-xl  py-3 ${
                      activeTab === "home"
                        ? "active:bg-green-500"
                        : "hover:bg-[#797DFC]"
                    } hover:text-white`}
                    data-tip="Home"
                    onClick={() => {
                      setActiveTab("home");
                      homeRef.current.scrollToSection(homeRef);
                    }}
                  >
                    <a href="#home" className="">
                      <FontAwesomeIcon icon={faHouse} />
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className={`tooltip tooltip-right bg-[#0307121A] w-full rounded-xl py-3 ${
                      activeTab === "feedback"
                        ? "active:bg-green-500"
                        : "hover:bg-[#797DFC]"
                    } hover:text-white`}
                    data-tip="Feedback"
                    onClick={() => {
                      setActiveTab("news");
                      newsRef.current.scrollToSection(newsRef);
                    }}
                  >
                    <a href="#feedback" className="">
                      <FontAwesomeIcon icon={faNewspaper} />
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className={`tooltip tooltip-right bg-[#0307121A] w-full rounded-xl py-3 ${
                      activeTab === "users"
                        ? "active:bg-green-500"
                        : "hover:bg-[#797DFC]"
                    } hover:text-white`}
                    data-tip="Users"
                    onClick={() => {
                      setActiveTab("users");
                      usersRef.current.scrollToSection(usersRef);
                    }}
                  >
                    <a href="#users" className="">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className={`tooltip tooltip-right tooltip-white bg-[#0307121A] hover:bg-[#797DFC] hover:text-white w-full rounded-xl py-3 ${
                      activeTab === "criteria"
                        ? "active:bg-green-500"
                        : "hover:bg-[#797DFC]"
                    }`}
                    data-tip="Criteria"
                    onClick={() => {
                      setActiveTab("criteria");
                      criteriaRef.current.scrollToSection(criteriaRef);
                    }}
                  >
                    <a href="#criteria" className="">
                      <FontAwesomeIcon icon={faFontAwesome} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <h2
              href="#"
              className="mulish md:text-3xl text-2xl lg:text-4xl font-black"
            >
              React<span className="text-[#797DFC]">P</span>
            </h2>
          </div>
          <div className="navbar-end">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-5">
                <li>
                  <div
                    className={`tooltip  hover:bg-[#797DFC] w-full rounded-full py-3 ${
                      activeTab === "home" ? ("bg-[#797DFC] text-white") : "bg-[#0307121A]"
                    } hover:text-white`}
                    data-tip="Home"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveTab("home");
                      homeRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <a href="home" className="">
                      <FontAwesomeIcon icon={faHouse} />
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className={`tooltip hover:bg-[#797DFC] w-full rounded-full py-3 ${
                      activeTab === "news" ? ("bg-[#797DFC] text-white") : "bg-[#0307121A]"
                    } hover:text-white`}
                    data-tip="News"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveTab("news");
                      newsRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <a href="news" className="">
                      <FontAwesomeIcon icon={faNewspaper} />
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className={`tooltip hover:bg-[#797DFC] w-full rounded-full py-3 ${
                      activeTab === "users" ? ("bg-[#797DFC] text-white") : "bg-[#0307121A]"
                    } hover:text-white`}
                    data-tip="Users"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveTab("users");
                      usersRef.current.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <a href="users" className="">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </a>
                  </div>
                </li>
                <li>
                  <div
                    className={`tooltip hover:bg-[#797DFC] w-full rounded-full py-3 ${
                      activeTab === "criteria"
                        ? ("bg-[#797DFC] text-white")
                        : "bg-[#0307121A]"
                    } hover:text-white`}
                    data-tip="Criteria"
                    onClick={(e) => {
                      e.preventDefault()
                      setActiveTab("criteria");
                      criteriaRef.current.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    <a href="criteria" className="">
                      <FontAwesomeIcon icon={faFontAwesome} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <a className="btn mulish font-bold text-xl bg-[#797DFC] text-white rounded-full px-8 ml-6 hover:bg-white hover:text-[#797DFC]">
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
