import "../../css/base.css";
import "./email.css";

export default function Email() {
  return (
    <div className="email">
      <h1 className="email-title">Join Newsletter</h1>
      <h5 className="email-subtitle">Stay updated on sales, new items and more</h5>
      <div className="email-submit" >
        <input type="email" className="email-submit-text" placeholder="Enter your email . . ."/>
        <span className="email-submit-btn" type="submit">Submit</span>
      </div>
    </div>
  );
}
