import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ProjectDetails from "../section/ProjectDetails";

function ProjectDetailsPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Project Details" />
                <ProjectDetails />
            </Layout>
        </div>

        </>
    )
}
export default ProjectDetailsPage