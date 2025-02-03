import React from "react";
import "../../App.css";
import "../Form.css";
import { Button } from "../Button";
import Footer from "../Footer";
import FloatingButton from "../FloatingButton";

export default function Services() {
  return (
    <>
      <FloatingButton />
      <h1 className="services">SERVICES</h1>
      <div className="container">
        <form className="contact-form">
          <h1 className="form-title">Send a Message to us</h1>

          {/* Name Input */}
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Subject Input */}
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject"
              required
            />
          </div>

          {/* Message Input */}
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <Button buttonStyle="btn--gray" buttonSize="btn--wide">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
