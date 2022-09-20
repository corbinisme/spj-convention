import {useState,useEffect} from "react";
import axios from "axios";
import Banner from "../components/Banner";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Sponsors from "../components/Sponsors";

export default function Speakers (props){
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/pages?_embed&per_page=100';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter((t=>t.slug === "schedule"))

            getPost(filters);
            window.scrollTo(0, 0);
            //getPost()
            });
        }, []);
      

    return (
        <div className="container page-id-308"> 
            <Banner title="Schedule" />
            <div className="innerblocks-wrap">
            {post.map((item) => {
                return (<div key={item.id}>
                    <div dangerouslySetInnerHTML={{__html: item.content.rendered}}>

                    </div>
                    <HelmetProvider>
                        <Helmet>
                            <title>{item.yoast_head_json.title}</title>
                            <meta property="og:description" content={item.yoast_head_json.og_description} />
                            <meta property="og:image" content={item.yoast_head_json.og_image[0].url} />
                            <meta property="og:image:width" content={item.yoast_head_json.og_image[0].width} />
                            <meta property="og:image:height" content={item.yoast_head_json.og_image[0].height} />
                            <meta property="og:image:type" content={item.yoast_head_json.og_image[0].type} />
                        </Helmet>

                    </HelmetProvider>
                </div>
                )
            })}
            </div>
        
            
        </div>
    );
}