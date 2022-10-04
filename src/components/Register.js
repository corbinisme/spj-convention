import {useState,useEffect} from "react";
import axios from "axios";

export default function Registration (props){
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/pages?_embed&per_page=50';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter((t=>t.slug == "registration"))

            getPost(filters);

            });
        }, []);
      

    return (
        <div className="container text-center"> 
           
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