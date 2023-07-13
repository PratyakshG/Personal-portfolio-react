import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be my pleasure to answer your question, so feel free to
                reach out.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 9628533167</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">pincodeazm@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
