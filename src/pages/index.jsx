import React from "react";
import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import Feature from "../section/home1/Feature";
import About from "../section/home1/About";
import Service from "../section/home1/Service";
import Project from "../section/home1/Project";
import Marquee from "../section/home1/Marquee";
import WorkProcess from "../section/home1/WorkProcess";
import Video from "../section/home1/Video";
import ChooseUs from "../section/home1/ChooseUs";
import Testimonial from "../section/home1/Testimonial";
import Faq from "../section/home1/Faq";
import Feature2 from "../section/home1/Feature2";
import Team from "../section/home1/Team";
import Brand from "../section/home1/Brand";
import Award from "../section/home1/Award";
import Contact from "../section/home1/Contact";
import News from "../section/home1/News";

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