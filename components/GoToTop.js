import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import styled from "styled-components";

// style for button component
const Button = styled.div`
   position: fixed;
   height:3rem 
   width: 3rem;
   font-size: 1rem;
   z-index: 1;
   background-color: black;
`;

export default function GotoTop() {
  const [button, setButton] = useState(false);

  // effect for scrolling
  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
    };
  }, []);

  const scrollTopFunction = () => {
    // to the top of the site
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollFunction = () => {
    // setting button visible if user scrolls 940px or more
    if (
      document.body.scrollTop > 940 ||
      document.documentElement.scrollTop > 940
    ) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  // scoll down function
  const scrollDownFunction = () => {
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  };

  return (
    <div>
      <Button
        id="topBtn"
        className={`${
          !button ? "opacity-0 cursor-text" : "opacity-1 cursor-pointer"
        } right-[1.4rem] bottom-[1.5rem] transition-all ease-linear duration-250`}
        title="Go to top"
        onClick={scrollTopFunction}
      >
        <div className="bg-[#0095A0] h-[3rem] w-[3rem] flex justify-center items-center text-primary-text   md:hover:bg-primary-active   md:hover:text-white transition-all ease-linear duration-100">
          <BsArrowUp />
        </div>
      </Button>
    </div>
  );
}
