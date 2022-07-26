import {useState,useEffect} from "react";
import axios from "axios";

function Breakouts(props){


    const tag = props.content.tags;
    let tagInt = null;
    if(tag.length){
        tagInt = tag[0];
       
    }
    //const breakoutAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100&filter[orderby]=created&order=asc';
    const breakoutAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?per_page=100&categories=25';
    const [breakouts, getBreakouts] = useState([]);
    const [pageContent, setPageContent] = useState();
    useEffect(() => {

        if ("caches" in window) {
            caches.keys().then((names) => {
              names.forEach((name) => {
                caches.delete(name);
              });
            });
        }

       
        if(props.open && tag.length){

            axios.get(breakoutAPI)
                .then((response) => {

                
                let filters = response.data.filter(function(t){return (t.categories.includes(25))})

                if(filters){
                   
                    let tagQuery = filters.filter(function(q){return (q.tags.includes(tagInt))})
                    
                    getBreakouts(tagQuery)
                }
                });
        } else {
            
                // no tag
                

                setPageContent(props.content.content.rendered);
            
        }
    }, [props.open]);
    

    return(<div>

        {(breakouts.length? <div>
            {breakouts.map(item=>{

                

                return(
                    <div key={item.id}>
                        <Breakout content={item}  />
                    
                    </div>
                )
            })}
        </div>: <div>
            {(pageContent? <div dangerouslySetInnerHTML={{__html: pageContent}}></div>: "")}
        </div>)}
    </div>)

}


function Breakout(props) {

    let body = (props.content.content.rendered? props.content.content.rendered : "");

    let title = props.content.title.rendered;
    title = title.replace("&#038;", " - ");
    title = title.replaceAll("&#8211;", " - ");
    title = title.replaceAll("&#8217;", "'");
    let featured = (props.content.qubely_featured_image_url? props.content.qubely_featured_image_url.large[0]: "");
    return(
        <div className="breakout card p-4 mb-4">
            <h3>{title}</h3>
            <p>
                <strong dangerouslySetInnerHTML={{__html: props.content.acf.presenter}}>
                    
                </strong>
            </p>

            <div className="row">
                <div className="col-sm-2">
                    <img src={featured} />
                </div>
                <div className="col-sm-9">
                       

                    <div className="lcp_excerpt" dangerouslySetInnerHTML={{__html: body}}></div>
                </div>
            </div>

            
        </div>
    )
}


export default Breakouts;