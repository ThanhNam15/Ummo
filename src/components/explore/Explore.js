import "../../css/base.css";
import "./explore.css";

import { Link } from 'react-router-dom';

import explore from "../../imgs/image.webp";

export default function Explore() {
  
  return (
    <div className="explore">
      <Link className="explore-img" to="/shop/">
        <div>
          <div className="explore-img-scale">
            <img src={explore} alt="explore" width="100%"/>
          </div>
          <div className="explore-title">
            <Link style={{textDecoration: "none"}} to={"/shop"}>
              <span className="explore-info">Explore Now</span>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}
