import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({});

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const resizeHandler = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return size;
};

export { useWindowSize };
