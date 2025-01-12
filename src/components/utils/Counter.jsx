import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Counter({ end, pre = "", post = "" }) {
  const [countOn, setCountOn] = useState(false);

  return (
    <div className="text-3xl text-blue-600 pr-4">
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        {pre}
        {countOn && <CountUp start={0} end={end} duration={1} />}
        {post}
      </ScrollTrigger>
    </div>
  );
}

export default Counter;
