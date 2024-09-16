import React from "react";
import { useRef, useEffect } from "react";

function ValueDisplay({ value }) {
  const prevRef = useRef(null);

  // useEffect(() => {}, [value]);

  return (
    <>
      <p>
        Previous value: {prevRef.current ? prevRef.current.textContent : ""}
      </p>
      <p>
        Current value: <span ref={prevRef}>{value}</span>
      </p>
    </>
  );
}

export default ValueDisplay;
