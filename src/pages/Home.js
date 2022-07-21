import React from 'react'
import Pages from '../components/Pages';
import Hero from "../components/Hero";
import Homepage from "../components/Homepage";
import Welcometext from "../components/Welcometext";
import {Helmet} from "react-helmet";


export default function Home (props){
   
    return (
        <div className="container"> 
            <Hero title="MediaFest22" />

            <Homepage />  
            <hr className="star" />
            <div className="text-center fellows_blurb">
                <a onClick={() => props
                .updateState('speakers')}>
                    <img 
                    src="https://mediafest22.org/wp-content/uploads/2022/06/Fellows-Social-Card-2022-768x768.png" 
                    alt="2022 Fellows of the Society" />
                </a>
            </div>
            <hr className="star" />
            <Welcometext />
            <hr className="star" />
            <Pages updateState={props.updateState} lookup={props.lookup} page={props.page} />
            <Helmet>
                        <meta charSet="utf-8" />
                        <title>MediaFest22 | Home</title>
                        <meta property="og:description" content="" />
                        <meta name="description" content="" />
                    </Helmet>
        </div>
    )
}
