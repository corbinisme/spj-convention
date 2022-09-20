import {useState,useEffect} from "react";
import axios from "axios";

export default function Featured (props){
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100&filter[orderby]=created&order=asc';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(29)})
            console.log("filters", filters)
            getPost(filters);
  
            });

        }, []);
      

    return (
        <div className="container featuredPrecon"> 
           
            <h2>Featured Precon Presentation</h2>
            <div className="inner">
            {post.map((item) => {
                return (<div key={item.id}>
                    <figure>
                        <img src={item.qubely_featured_image_url.medium[0]} />
                    </figure>
                    <div dangerouslySetInnerHTML={{__html: item.content.rendered}}>

                    </div>

                </div>
                )
            })}
            </div>
            
        </div>
    );
}