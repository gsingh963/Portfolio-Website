import React, { useRef } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeaderContent/PageHeader";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x7sn9xh",
        "template_8y3fyga",
        form.current,
        "RWZvWmOC10QNo9MUk"
      )
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
    <div>
      <section id="contact" className="contact">
        <PageHeader
          headerText="Contact Me"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" required />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
