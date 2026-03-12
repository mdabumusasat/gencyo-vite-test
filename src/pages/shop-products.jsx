import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ShopProduct from "../section/ShopProduct";

function ShopProductPage() {
    return (
        <>
        <div className="page-wrapper">
            <Layout HeaderStyle="three">
                <PageTitle pageName="Shop" />
                <ShopProduct />
            </Layout>
        </div>
        </>
    )
}
export default ShopProductPage