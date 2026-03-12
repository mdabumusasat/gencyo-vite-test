import React from "react";
import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import Feature from "../section/Home1/Feature";
import About from "../section/Home1/About";
import Service from "../section/Home1/Service";
import Project from "../section/Home1/Project";
import Marquee from "../section/Home1/Marquee";
import WorkProcess from "../section/Home1/WorkProcess";
import Video from "../section/Home1/Video";
import ChooseUs from "../section/Home1/ChooseUs";
import Testimonial from "../section/Home1/Testimonial";
import Faq from "../section/Home1/Faq";
import Feature2 from "../section/Home1/Feature2";
import Team from "../section/Home1/Team";
import Brand from "../section/Home1/Brand";
import Award from "../section/Home1/Award";
import Contact from "../section/Home1/Contact";
import News from "../section/Home1/News";

function Home1() {
    return (
        <>
        <div className="page-wrapper">
            <Layout>
                <Banner />
                <Feature />
                <About />
                <Service />
                <Project />
                <Marquee />
                <WorkProcess />
                <Video />
                <ChooseUs />
                <Testimonial />
                <Faq />
                <Feature2 />
                <Team />
                <Brand />
                <Award />
                <Contact />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home1;