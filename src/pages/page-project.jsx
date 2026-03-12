import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ProjectGrid from "../section/ProjectGrid";

function ProjectPage() {

    return (
        <>

        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Our Projects" />
                <ProjectGrid />
            </Layout>
        </div>

        </>
    )
}
export default ProjectPage