import {useState,useEffect} from "react";
import axios from "axios";
import Banner from "../components/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Moment from 'moment';
import Session from "../components/Session"
import Sponsors from "../components/Sponsors";
import AppLink from "../components/AppLink";

export default function Sessions (props){
    const [sessions, getSessions] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100&filter[orderby]=created&order=asc&time=2&categories=23';
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
                    
                   <h4>
                    SCHEDULE AND SESSION INFORMATION CAN BE FOUND HERE. 
                    CLICK ON A TIME SLOT LINK TO VIEW ALL AVAILABLE SESSIONS IN THAT TIMEFRAME AND LOCATION, 
                    OR <a href="#"  onClick={() => {props
                    .updateState('allsessions'); return false;}}>CLICK HERE</a>
                    
                     TO VIEW ALL SESSIONS
                   </h4>
                   <AppLink />
                    {(sessions? sessions.map((item) => {

                        let dateParse = item.acf.date.substring(0,4) + "-" + item.acf.date.substring(4,6) + "-" + item.acf.date.substring(6,8);
                        const day = new Date(dateParse);
                        const octDate = item.acf.date.substring(6,8)
                        
                        let formatDate = Moment(day).format('MMM, D YYYY');
                        let showHeading = false;
                        
                        let dateDisplay = null;

                        
                        if(dateArray.includes(octDate)){

                        } else {
                            dateArray.push(octDate);
                            let dayOfWeek = "";
                            switch(octDate){
                                case "26": dayOfWeek = "Wednesday"; break;
                                case "27": dayOfWeek = "Thursday"; break;
                                case "28": dayOfWeek = "Friday"; break;
                                case "29": dayOfWeek = "Saturday"; break;
                            }
                            dateDisplay = dayOfWeek + ", October " + octDate;
                            
                        }
                        


                        return (<div key={item.id}>
                            
                            {(dateDisplay? <h3 className="mt-5 mb-2 pb-4">{dateDisplay}</h3>: "")}

                            <Session content={item} />

                            
                        
                        
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