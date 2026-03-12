import React from "react";
import Layout from '../layouts/Layout';
import Banner from "../section/home4/Banner";
import About from "../section/home4/About";
import Service from "../section/home4/Service";
import Funfact from "../section/home4/Funfact";
import Project from "../section/home4/Project";
import Marquee from "../section/home4/Marquee";
import SkillSection from "../section/home4/SkillSection";
import CtaBanner from "../section/home4/CtaBanner";
import WorkSection from "../section/home4/WorkSection";
import Testimonial from "../section/home4/Testimonial";
import AwardSection from "../section/home4/AwardSection";
import News from "../section/home4/News";
import Faqs from "../section/home4/Faqs";

function Home4() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three" FooterStyle={"four"}>
                <Banner />
                <About />
                <Service />
                <Funfact />
                <Project />
                <Marquee />
                <SkillSection />
                <CtaBanner />
                <WorkSection />
                <Testimonial />
                <AwardSection />
                <News />
                <Faqs />
            </Layout>
        </div>
        </>
    );
}
export default Home4