import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ShopDetails from "../section/ShopDetails";

function ShopDetailsPage() {
    return (
        <>

        <div className="page-wrapper">
          <Layout HeaderStyle="three">
            <PageTitle pageName="Shop Details" />
            <ShopDetails />
          </Layout>
        </div>

        </>
    );
}
export default ShopDetailsPage