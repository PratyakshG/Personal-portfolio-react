import React from "react";

import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Pratyaksh Gupta"
                    date="April 8 2023"
                    image={Blog1}
                    title="Article 1"
                    description="this is xyz based article featured in abc magazine"
                />
                <BlogCard
                    user="Pratyaksh Gupta"
                    date="April 8 2023"
                    image={Blog2}
                    title="Article 2"
                    description="this is xyz based article featured in abc magazine"
                />
                <BlogCard
                    user="Pratyaksh Gupta"
                    date="April 8 2023"
                    image={Blog3}
                    title="Article 3"
                    description="this is xyz based article featured in abc magazine"
                />
            </div>
        </Section>
    );
};

export default Blogs;
