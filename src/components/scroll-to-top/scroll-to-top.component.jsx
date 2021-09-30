import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*

    addition to have react router scroll to the 
    top of the page when the path changes
    
*/

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}