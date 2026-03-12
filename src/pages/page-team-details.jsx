import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import TeamDetails from "../section/TeamDetails";

function TeamDetailsPage() {

    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Team Details" />
                <TeamDetails />
            </Layout>
        </div>
        </>
    )
}
export default TeamDetailsPage