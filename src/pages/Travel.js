import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import Banner from "../components/Banner";
import {Helmet} from "react-helmet";

export default function Travel (props){
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/pages';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter((t=>t.slug == "hotel-travel-dining"))

            getPost(filters);
            window.scrollTo(0, 0);
            //getPost()
            });
        }, []);
      

    return (
        <div className="container"> 
            <Banner title="Hotel, Travel, Dining" />
            
            {post.map((item) => {
                return (<div key={item.id}>
                    <div dangerouslySetInnerHTML={{__html: item.content.rendered}}>

                    </div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>MediaFest22 | {item.title.rendered}</title>
                        <meta property="og:description" content={item.yoast_head_json.og_description} />
                        <meta name="description" content={item.yoast_head_json.og_description} />
                    </Helmet>
                </div>
                )
            })}
            
        </div>
    );
}