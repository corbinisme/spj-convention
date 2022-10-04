import {useState,useEffect} from "react";
import axios from "axios";
import Banner from "../components/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Register from "../components/Register"

export default function Registration (props){
   
      

    return (
        <div className="container"> 
            <Banner title="Registration" />
            <Register />

            <HelmetProvider>
                <Helmet>
                    <title>Registration - mediafest22</title>
                    <meta property="og:description" content="Click the link below to register for Mediafest22 EARLY BIRD RATES (BY OCTOBER 4)" />
                    <meta property="og:image" content="https://mediafest22.org/wp-content/uploads/2022/01/logoCrop.png" />
                    <meta property="og:image:height" content="1486" class="yoast-seo-meta-tag" />
	                <meta property="og:image:type" content="image/png" class="yoast-seo-meta-tag" />
                    
                </Helmet>

            </HelmetProvider>
        </div>
    );
}