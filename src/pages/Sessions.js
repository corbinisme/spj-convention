import {useState,useEffect} from "react";
import axios from "axios";
import Banner from "../components/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Moment from 'moment';
import Session from "../components/Session"


export default function Sessions (props){
    const [sessions, getSessions] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100&filter[orderby]=created&order=asc';
    let dateArray = []
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            
            let filters = response.data.filter(function(t){return t.categories.includes(23)})

            getSessions(filters);
            window.scrollTo(0, 0);

            });
        }, []);
      

    return (
        <div className="container session-list"> 
            <Banner title="Sessions" />
            <div className="innerblocks-wrap">
                <div className="sessions">
                {(sessions? sessions.map((item) => {

                    let dateParse = item.acf.date.substring(0,4) + "-" + item.acf.date.substring(4,6) + "-" + item.acf.date.substring(6,8);
                    let day = new Date(dateParse);
                    let formatDate = Moment(day).format('MMM, D YYYY');
                    let showHeading = false;
                    
                    let dateDisplay = null;

                    if(dateArray.includes(formatDate)){

                    } else {
                        dateArray.push(formatDate);
                        dateDisplay = formatDate;
                        
                    }
                    


                    return (<div key={item.id}>
                        
                        {(dateDisplay? <h3 className="mt-5 mb-2 pb-4">{dateDisplay}</h3>: "")}

                        <Session content={item} />

                       
                     
                    </div>
                    )
                }): <div>Loading</div>)}

            
                </div>
            </div>

            
            <HelmetProvider>
                        <Helmet>
                            <title>Sessions - MediaFest22</title>
                            
                        </Helmet>

                    </HelmetProvider>
        </div>
    );
}