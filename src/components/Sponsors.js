import {useState,useEffect} from "react";
import axios from "axios";

export default function Sponsors (props){
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(46)})
            console.log("filters", response.data)
            response.data.forEach(function(el){
                console.log(el.title.rendered, el.categories);
            })
            getPost(filters);

            });
        }, []);
      

    return (
        <div className="container text-center"> 
           Getting
            {post.map((item) => {
                return (<div key={item.id}>
                    <h2>{item.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: item.content.rendered}}>

                    </div>

                </div>
                )
            })}
            
        </div>
    );
}