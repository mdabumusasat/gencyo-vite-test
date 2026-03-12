import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ContactInner from "../section/ContactInner";

function ContactUs() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Contact Us" />
                <ContactInner />
            </Layout>
        </div>

        </>
    )
}
export default ContactUs