import { useEffect, useState } from "react";

export const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
    };

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
};
