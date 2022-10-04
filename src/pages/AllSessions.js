import {useState,useEffect} from "react";
import axios from "axios";
import Banner from "../components/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Moment from 'moment';
import Session from "../components/Session"
import Sponsors from "../components/Sponsors";

export default function AllSessions (props){
    const [sessions, getSessions] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100&filter[orderby]=created&order=asc&time=2';
    const breakoutAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?per_page=100&categories=25';
    let dateArray = []
    
    useEffect(() => {

        axios.get(breakoutAPI)
          .then((response) => {

            
           
            console.log("resp",response.data)
            getSessions(response.data);
            window.scrollTo(0, 0);

            });
        }, []);
      

    return (
        <div className="container session-list"> 
            <Banner title="All Sessions" />
            <div className="innerblocks-wrap">
                <div className="sessions">
                    
                  
                    {(sessions? sessions.map((item) => {

                        let title = item.title.rendered;
                        title = title.replaceAll('&#038;','');
                        title = title.replaceAll("&#8217;", "'")
                        title = title.replaceAll("&#8211;", " - ")
                        return (<div key={item.id} className="card  mb-4">
                            <div className="card-body">
                                <h3>{title}</h3>
                                <div dangerouslySetInnerHTML={{__html: item.acf.presenter}}></div><br />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <figure>
                                            <img src={item.qubely_featured_image_url.medium[0]} style={{width: "100%"}} />
                                        </figure>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="font-bold sessionBody" dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }): <div>Loading</div>)}

            
                </div>
            </div>
            <hr className="star" />
            <Sponsors />

                    <HelmetProvider>
                        <Helmet>
                            <title>Sessions - MediaFest22</title>
                            
                        </Helmet>

                    </HelmetProvider>
        </div>
    );
}