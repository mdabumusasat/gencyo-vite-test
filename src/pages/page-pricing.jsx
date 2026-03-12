import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import Pricing from "../section/Pricing";

function AboutUs() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Pricing" />
                <Pricing />
            </Layout>
        </div>
        </>
    )
}
export default AboutUs