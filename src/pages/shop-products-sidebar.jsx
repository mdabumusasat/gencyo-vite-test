import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ShopSidebar from "../section/ShopSidebar";

function ShopSidebarPage() {

    return (
        <>
        
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Shop Sidebar" />
                <ShopSidebar />
            </Layout>
        </div>

        </>
    )
}
export default ShopSidebarPage