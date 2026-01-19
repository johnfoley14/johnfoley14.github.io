import React from "react";
import profilePic from "../assets/profilepic.jpg";

const About: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[80vh] pt-[5%]">
      <div
        className="flex flex-row justify-center w-[80%] h-full space-x-8 rounded"
        style={{ backgroundColor: "var(--navbar-bg-color)" }}
      >
        <div className=" content-center text-center ml-[10%] overflow-hidden min-w-20">
          <img
            src={profilePic}
            alt="Profile Pic"
            className="w-48 h-48 rounded-full object-cover mx-auto custom-border !border-white"
          />
          <div className="divider"></div>
          <h6>Software Engineer</h6>
        </div>
        <div className="w-[70%] text-center content-center overflow-hidden">
          <div className="w-[60%] text-lg text-left">
            Hi, my name's John Foley! <br />
            I'm a final year software engineering studing at{" "}
            <a href="https://software-engineering.ie/" target="_blank">
              ISE
            </a>{" "}
            in UL.
            <br />
            <br />
            I'm a passionate software engineer with a love for physics and
            maths. When I'm not coding, I love to play hurling and watch sport.
            I enjoy freelance development work, as well as second level maths
            grinds, so don't hesitate to get in contact :)
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
