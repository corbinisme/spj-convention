import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader, Row, Col } from 'reactstrap';
import Banner from "../components/Banner";
import Presenter from "../components/Presenter";
import Woodward from "../components/Woodward";
import Fellows from "../components/Fellows";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function Presenters (){
    

    return (
    <div className="container"> 
        <Banner title="Keynote Presenters" />
        
              
                
            
            
            <Presenter />

                <br /><br />
            <Woodward />
            
                <br /><br />
            <Fellows />

            
                    <HelmetProvider>
                        <Helmet>
                            <title>Presenters - MediaFest22</title>
                            
                        </Helmet>

                    </HelmetProvider>
           
    </div>
    );
}