import {useState,useEffect} from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import Banner from "../components/Banner";

export default function Travel (props){
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/pages';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {
            console.log("resp",response.data);
            let filters = response.data.filter((t=>t.slug == "hotel-travel-dining"))
            console.log(filters)
            getPost(filters);
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
                </div>
                )
            })}
            
        </div>
    );
}