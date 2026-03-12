import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ServiceDetails from "../section/ServiceDetails";

function ServiceDetailsPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Service Details" />
                <ServiceDetails />
            </Layout>
        </div>

        </>
    )
}
export default ServiceDetailsPage