import "../../css/base.css";
import "./contact_detail.css";

import { Container } from 'reactstrap';

export default function Contact_detail() {
  return (
    <div className="contact-detail">
        <Container className="contact-info">
            <h1 className="contact-info-title">GET IN TOUCH</h1>
            <p className="contact-info-subtitle">Please enter the details of your request. A member of our support staff will respond as soon as possible.</p>
            <div className="contact-info-submit">
                <div className="contact-info-input">
                    <div className="contact-info-separate">
                        <input type="text" placeholder="Name" className="contact-info-name-fill"/>
                        <input type="text" placeholder="Phone Number" className="contact-info-number-fill"/>
                    </div>
                    <div className="contact-info-email">
                        <input type="email" placeholder="Email" className="contact-info-email-fill"/>
                    </div>
                    <div className="contact-info-message">
                        <input type="text" placeholder="Message" className="contact-info-message-fill"/>
                    </div>
                    <div className="contact-info-btn">Submit</div>
                </div>
                <div className="contact-info-support">
                    <div className="contact-info-call"><span>Call Us: </span> 0834-311-883</div>
                    <div className="contact-info-mail"><span>Email: </span> Ummo@gmail.com</div>
                    <div className="contact-info-add"><span>Address: </span> First Canadian Place, 100 King St W, Toronto, ON M5X 1A9, Canada</div>
                    <div className="contact-info-open"><span>Opening time: </span> Our store has re-opened for shopping, exchanges every day 11am to 7pm</div>
                </div>
            </div>
        </Container>
        <Container className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9813323822837!2d-79.38268594356043!3d43.648556728390226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a57d767f%3A0x935ab2eb9fd5fb31!2sFirst%20Canadian%20Place!5e0!3m2!1svi!2s!4v1706105390971!5m2!1svi!2s" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Container>
        <div className="contact-margin"></div>
    </div>
  )
}
