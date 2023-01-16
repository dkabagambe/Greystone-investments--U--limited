import { useRef } from "react";
import "../styles/contact.css";
import { MdLockOutline, MdCallEnd } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm
      // "service_lbveonj",
      // "template_tk08jst",
      // form.current,
      // "IaD2VR089lJmkpBd2"
      ()
      .then(
        (result) => {
          console.log(result.text);

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="number">
        <h3>
          Plot 989,Nakulabye Block 257, Kitala plaza,Room L21,P.O Box 323143,
          Kampala Uganda
        </h3>
        <p>
          <MdCallEnd
            style={{ color: "#0d367e", marginRight: "10px", fontSize: "20px" }}
          />
          +256-414-248-434
        </p>

        <p>
          <BsFillTelephoneFill
            style={{ color: "#0d367e", marginRight: "10px", fontSize: "15px" }}
          />
          +256-772-461-511
        </p>
        <p>
          <BsFillTelephoneFill
            style={{ color: "#0d367e", marginRight: "10px", fontSize: "15px" }}
          />
          +256-702-4461-511
        </p>
        <p>
          <BsFillTelephoneFill
            style={{ color: "#0d367e", marginRight: "10px", fontSize: "15px" }}
          />
          +256-704-622-476
        </p>
        <p>
          <BsFillTelephoneFill
            style={{ color: "#0d367e", marginRight: "10px", fontSize: "15px" }}
          />
          +256-706-929-227
        </p>
        <p>
          <GrMail
            style={{ color: "#0d367e", marginRight: "10px", fontSize: "14px" }}
          />
          <email>ishakamuherezaltd@yahoo.com</email>
        </p>
        <p>
          <GrMail
            style={{ color: "#0d367e", marginRight: "10px", fontSize: "14px" }}
          />

          <email>jbarohooza@yahoo.com</email>
        </p>
      </div>
      <div className="hour">
        <h2>Open Hours</h2>
        <p>Monday to Friday</p>
        <p>8:00 AM - 5:00 PM</p>
        <p>Saturday</p>
        <p>8:00 AM - 12:00 PM</p>
        <p>
          <MdLockOutline
            style={{ color: "red", marginRight: "10px", fontSize: "20px" }}
          />
          sunday: Closed
        </p>
      </div>
      <div className="form-item">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <div>
            <input type="text" name="user_name" />
          </div>
          <label>Email</label>
          <div>
            <input type="email" name="user_email" />
          </div>
          <label>Message</label>
          <div>
            <textarea name="message" />
          </div>
          <div>
            <input type="submit" value="Send" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
