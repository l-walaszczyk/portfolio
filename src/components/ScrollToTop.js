import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ mainRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, [pathname, mainRef]);

  return null;
}
