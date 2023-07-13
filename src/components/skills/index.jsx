import React from "react";

import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import "./style.scss";

import {AiOutlineCloudDownload} from "react-icons/ai";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS, React, HTML, CSS"
                    />
                </div>

                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam cupiditate magnam architecto numquam nostrum rerum
                        quae asperiores quis pariatur a, magni, expedita
                        provident explicabo vel ad quam eos vitae alias.
                    </p>
                    <CallToAction text="Download Cv" icon={<AiOutlineCloudDownload />} />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
