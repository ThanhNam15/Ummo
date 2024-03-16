import "../../css/base.css";
import "./Scroll.css";

import ScrollToTop from "react-scroll-to-top";

export default function scroll() {
  return (
    <div className="scroll">
        <ScrollToTop smooth style={{borderRadius: "50%"}}/>
    </div>
  )
}
