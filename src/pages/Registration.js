import {useState,useEffect} from "react";
import axios from "axios";
import Banner from "../components/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Register from "../components/Register"

export default function Registration (props){
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/pages';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter((t=>t.slug == "registration"))

            getPost(filters);
            window.scrollTo(0, 0);

            });
        }, []);
      

    return (
        <div className="container"> 
            <Banner title="Registration" />
            <Register />
            
        </div>
    );
}