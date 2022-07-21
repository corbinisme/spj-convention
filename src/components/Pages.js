import {useState,useEffect} from "react";
import axios from "axios"


export default function Pages(props){
    const [post, getPost] = useState([])
    const pageAPI = 'https://mediafest22.org/wp-json/wp/v2/pages';


    
    useEffect(() => {
        axios.get(pageAPI)
          .then((response) => {

            getPost(response.data);
            });
        }, []);
        

        const lookupComp = props.lookup;
        const comps = lookupComp[props.page];
        
        
    return (
        <>
        
        {Object.keys(lookupComp).map(function(keyname, keyindex){
          return (
            <div key={keyindex}>
              <h2><a onClick={() => props
                .updateState(keyname)}>{keyname}</a></h2>
              <hr className="star" />
              
            </div>
          )
        })}
        

        
        
      </>
    );
}