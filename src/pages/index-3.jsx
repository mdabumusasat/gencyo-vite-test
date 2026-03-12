import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home3/Banner";
import Brand from "../section/home3/Brand";
import About from "../section/home3/About";
import Service from "../section/home3/Service";
import Marquee from "../section/home3/Marquee";
import Project from "../section/home3/Project";
import WorkProcess from "../section/home3/WorkProcess";
import Team from "../section/home3/Team";
import Award from "../section/home3/Award";
import Testimonial from "../section/home3/Testimonial";
import Faqs from "../section/home3/Faqs";
import Contact from "../section/home3/Contact";
import News from "../section/home3/News";


function Home3() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three" FooterStyle={"three"}>
                <Banner />
                <Brand />
                <About />
                <Service />
                <Marquee />
                <Project />
                <WorkProcess />
                <Team />
                <Award />
                <Testimonial />
                <Faqs />
                <Contact />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home3