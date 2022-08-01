import React, {useState,useEffect} from "react";
import Pages from '../components/Pages';
import Hero from "../components/Hero";
import Homepage from "../components/Homepage";
import Welcometext from "../components/Welcometext";
import Presenter from "../components/Presenter";
import axios from "axios";
import {Helmet} from "react-helmet";


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
                <button  onClick={() => props
                .updateState('speakers')}>
                    <img 
                    src="https://mediafest22.org/wp-content/uploads/2022/06/Fellows-Social-Card-2022-768x768.png" 
                    alt="2022 Fellows of the Society" />
                </button>
            </div>
            <hr className="star" />
            <Welcometext />
            <hr className="star" />

                    <section className="presenters">
                        <h2>Featured Presenters</h2><br />
                        <Presenter />
                    </section>
            <hr className="star" />


            <section className="session_highlights">
            <h2>Session highlights</h2>
            <span>Get all SESSION category posts, and then check the tag of them, passing the tag
                as a prop to a "breakout" component that can API the list of "highlight" posts with that tag
                to populate that SESSION component.
            </span>
            <br /><br />
            {(post? (
                post.map(item=>{

                    let title = item.title.rendered;
                    title = title.replace('&#038;','-')
                    return (
                        <div key={item.id} className="highlight_row">
                            <h3>{title} </h3>
                            <p><span><strong>{item.acf.presenter} </strong></span>
                            </p>
                           <div className="row">
                            <div className='col-md-2'>
                            <img src={item.qubely_featured_image_url.large[0]} alt={title} />
                            </div>
                            <div className='col-md-10'>
                                <div dangerouslySetInnerHTML={{__html: item.content.rendered}}>
                                </div>
                            </div>
                            </div>
                          
                        </div>
                        
                    );
                })
            ):<div></div>)}
            </section>

            <hr className="star" />
            <Pages updateState={props.updateState} lookup={props.lookup} page={props.page} />

            <Helmet>
                <meta charSet="utf-8" />
                <title>Mediafest22 - THE SOCIETY OF PROFESSIONAL JOURNALISTS, ASSOCIATED COLLEGIATE PRESS AND COLLEGE MEDIA ASSOCIATION ARE PLEASED AND EXCITED TO BRING YOU MEDIAFEST22</title>
                <meta property="og:description" content="MediaFest22 brings together SPJ, the most broad-based professional journalism organization in the country, with ACP and CMA, who have partnered for more than 60 years to host one of the most inspiring student and professional media events." />
                <meta property="og:image" content="https://mediafest22.org/wp-content/uploads/2022/01/logoCrop.png" />
            </Helmet>
           
        </div>
    )
}
