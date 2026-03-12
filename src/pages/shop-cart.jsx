import React from "react";
import Layout from '../layouts/Layout';
import PageTitle from "../section/InnerBanner";
import ShopCart from "../section/ShopCart";

function ShopCartPage() {
    return (
        <>
        <div className="page-wrapper">
          <Layout HeaderStyle="three">
            <PageTitle pageName="Shop Cart" />
            <ShopCart />
          </Layout>
        </div>
        </>
    );
}
export default ShopCartPage