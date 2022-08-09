import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap';
import Banner from "../components/Banner";
import Presenter from "../components/Presenter";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Presenters (){
    

    return (
    <div className="container"> 
        <Banner title="Presenters" />
        
                <h2>Opening keynote</h2>
                <h3>Thursday, Oct. 27</h3>
                        <div><p>
                        For this keynote, each guest will speak individually in a 10-minute TED Talk format
                on how journalism can better serve the communities they cover.
                <br />
                A moderated panel discussion will follow.</p>
                        </div>
            
            <Presenter />

            
            <HelmetProvider>
                        <Helmet>
                            <title>Presenters - MediaFest22</title>
                            
                        </Helmet>

                    </HelmetProvider>
           
    </div>
    );
}