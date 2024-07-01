import React, { useState, useEffect } from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";

function Page1() {
  // Use a specific pixel width instead of a percentage for the initial check
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      // Use a specific pixel width instead of a percentage
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`Page1 px-[3vw] ${isMobile ? '' : 'flex  justify-between'} bg-[#d5d3d6] py-10`}>
      {isMobile ? (
        <>
          <Section2 />
          <Section1 />
        </>
      ) : (
        <>
          <Section1 />
          <Section2 />
        </>
      )}
    </div>
  );
}

export default Page1;
