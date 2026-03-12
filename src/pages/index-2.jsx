import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/Home2/Banner";
import About from "../section/home2/About";
import Service from "../section/home2/Service";
import Project from "../section/home2/Project";
import WorkProcess from "../section/home2/WorkProcess";
import Feature from "../section/home2/Feature";
import Faqs from "../section/home2/Faqs";
import Pricing from "../section/home2/Pricing";
import Testimonial from "../section/home2/Testimonial";
import Award from "../section/home2/Award";
import Team from "../section/home2/Team";
import News from "../section/home2/News";


function Home2() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="two" FooterStyle={"two"}>
                <Banner />
                <About />
                <Service />
                <Project />
                <WorkProcess />
                <Feature />
                <Faqs />
                <Pricing />
                <Testimonial />
                <Award />
                <Team />
                <News />
            </Layout>
        </div>
        </>
    );
}
export default Home2