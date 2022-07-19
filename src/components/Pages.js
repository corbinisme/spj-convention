import {useState,useEffect} from "react";
import axios from "axios"


export default function Pages(){
    const [post, getPost] = useState([])
    const pageAPI = 'https://mediafest22.org/wp-json/wp/v2/pages';


    useEffect(() => {
        axios.get(pageAPI)
          .then((response) => {
            console.log(response.data);
            getPost(response.data);
            });
        }, []);
      
   

    return (
        <>
        
        
          {post.map((item) => {
            return (
              <section key={item.id}>
                <h2>{item.title.rendered}</h2>
                <hr className="star" />
              </section>
            )
          })}
        
      </>
    );
}