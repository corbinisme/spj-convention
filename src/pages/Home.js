import React from 'react'
import Pages from '../components/Pages';
import Hero from "../components/Hero";
import Homepage from "../components/Homepage";
import Welcometext from "../components/Welcometext";

export default () => 
<div className="container"> 
    <Hero title="MediaFest22" />

    <Homepage />  
    <hr className="star" />
    <div className="text-center fellows_blurb">
        <a href="/speakers">
            <img 
            src="https://mediafest22.org/wp-content/uploads/2022/06/Fellows-Social-Card-2022-768x768.png" 
            alt="2022 Fellows of the Society" />
        </a>
    </div>
    <hr className="star" />
    <Welcometext />
    <hr className="star" />
    <Pages />
</div>