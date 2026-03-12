import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import Testimonials from "../section/TestimonialInner";

function TestimonialsPage() {

    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Testimonials" />
                <Testimonials />
            </Layout>
        </div>
        </>
    )
}
export default TestimonialsPage