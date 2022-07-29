import React, {useState,useEffect} from "react";
import Pages from '../components/Pages';
import Hero from "../components/Hero";
import Homepage from "../components/Homepage";
import Welcometext from "../components/Welcometext";
import axios from "axios";


export default function Home (props){
   
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(25)})

            getPost(filters);
            //window.scrollTo(0, 0);
            console.log(filters)
            });
        }, []);
      
    return (
        <div className="container"> 
            <Hero title="MediaFest22" />

            <Homepage />  
            <hr className="star" />
            <div className="text-center fellows_blurb">
                <a onClick={() => props
                .updateState('speakers')}>
                    <img 
                    src="https://mediafest22.org/wp-content/uploads/2022/06/Fellows-Social-Card-2022-768x768.png" 
                    alt="2022 Fellows of the Society" />
                </a>
            </div>
            <hr className="star" />
            <Welcometext />
            <hr className="star" />

            <h2>Session highlights</h2>
            <span>Get all SESSION category posts, and then check the tag of them, passing the tag
                as a prop to a "breakout" component that can API the list of "highlight" posts with that tag
                to populate that SESSION component.
            </span>
            <br /><br />
            {(post? (
                post.map(item=>{

                    return (
                        <div>
                            <h3>{item.title.rendered} </h3>
                           {item.acf.presenter} 
                           <div><br /></div>
                        </div>
                        
                    );
                })
            ):<div></div>)}
            <hr className="star" />
            <Pages updateState={props.updateState} lookup={props.lookup} page={props.page} />
           
        </div>
    )
}
