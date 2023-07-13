import React from "react";
import myself from "../../../images/myself.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";

import "./style.scss";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { scrollToSection } from "../../utils/helper";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt=""
                                />
                            </span>
                            <span className="text">, I am</span>
                        </span>
                        <span className="big-text">Pratyaksh Gupta</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quam ex similique, dolor repudiandae mollitia quis nobis
                        harum dolorem alias quod!
                    </p>
                    <CallToAction
                        text="Contact Me"
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={myself}
                        alt="Pratyaksh Gupta"
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
