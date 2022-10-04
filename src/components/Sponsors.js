import {useState,useEffect} from "react";
import axios from "axios";

export default function Sponsors (props){
    const [post, setPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?categories=46';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            setPost(response.data);

            });
        }, []);
      

    return (
        <div className="container text-center"> 
  
            {post? post.map(item=> {
                return(
                <div key={item.id}>
                    <h2>{item.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
                </div>
                )
            })
                
                : "loading"
                
            }
            
        </div>
    );
}