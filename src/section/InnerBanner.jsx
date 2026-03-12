import React from "react";
import { Link } from 'react-router-dom';
import PageTitleBG from '../assets/images/background/page-title.jpg';

const PageTitle = (props) => {
    return (
        <>
        <section className="page-title" style={{ backgroundImage: `url(${PageTitleBG})` }}>
            <div className="auto-container">
                <div className="title-outer text-center">
                    <h1 className="title">{props.pageName}</h1>
                    <ul className="page-breadcrumb">
                        <li><Link to="">Home</Link></li>
                        <li>{props.pageName}</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default PageTitle;
