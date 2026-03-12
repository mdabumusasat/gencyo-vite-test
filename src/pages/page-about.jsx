import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import About from "../section/home1/About";
import Service from "../section/home1/Service";
import Award from "../section/home2/Award";
import Team from "../section/home1/Team"; 

function AboutUs() {

    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="About Us" />
                <About />
                <Service />
                <Award />
                <Team />
            </Layout>
        </div>
        </>
    )
}
export default AboutUs