import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import BlogDetails from "../section/BlogDetails";

export default function PageBlogDetails() {

    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Blog Details" />
                <BlogDetails />
            </Layout>
        </div>
        </>
    )
}
