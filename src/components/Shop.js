import {useState,useEffect} from "react";
import axios from "axios";



export default function Shop (){
    const [post, setPost] = useState([]);
    const speakerAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100';

    useEffect(() => {
        axios.get(speakerAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(31)})
            console.log("shop", filters)
            setPost(filters);
           
            });
            
        }, []);
      
        
    return (
    <div className="container"> 

    <div className="shopspj alignfull display-flex" style={{"alignItems": "center"}}>

        
    </div>
    <p><br /></p>
    <h3 className="mt-4 mb-4 has-text-align-center">Gear up for&nbsp;convention with some&nbsp;MediaFest2
    &nbsp;merchandise&nbsp;<a href="https://shop-spj.myspreadshop.com/" target="_blank" rel="noreferrer noopener">
        available now in the SPJ online store</a>!&nbsp;
        You'll find shirts, masks, mugs and more.</h3>
        <p><br /></p>
        
            <div className="row">
            {post && post.map(item=>{

                let title = item.title.rendered;
                title = title.replaceAll("&#8211;", "-").replaceAll("&#8217;", "'")

                return(
                    <div key={item.id} className="col-sm-4">
                        <h4 className="text-center">{title}</h4>
                        <figure style={{textAlign: "center"}}>
                            <img src={item.qubely_featured_image_url.medium[0]} alt={item.title.rendered} />
                        </figure>
                        <div dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
                    </div>
                )
            })}
            </div>
           <hr />
            <a href="https://shop-spj.myspreadshop.com/" className="btn btn-primary d-block btn-2x m-5" target="_blank">View More</a>
    </div>
    );
}