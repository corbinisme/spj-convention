import React, {useState,useEffect} from "react";
import Pages from '../components/Pages';
import Hero from "../components/Hero";
import Homepage from "../components/Homepage";
import Welcometext from "../components/Welcometext";
import Presenter from "../components/Presenter";
import Woodward from "../components/Woodward";
import Fellows from "../components/Fellows";
import Featured from "../components/Featured";
import Register from "../components/Register"
import Shop from "../components/Shop";
import AppLink from "../components/AppLink";
import axios from "axios";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Home (props){
   
    const [post, getPost] = useState([]);
    const scheduleAPI = 'https://mediafest22.org/wp-json/wp/v2/posts?_embed&per_page=100&filter[orderby]=created&order=asc';
    
    
    useEffect(() => {
        axios.get(scheduleAPI)
          .then((response) => {

            let filters = response.data.filter(function(t){return t.categories.includes(25)})
            let limit = filters.slice(0, 15);

            getPost(limit);

            });
        }, []);
      
    return (
        <div className="container"> 
            <Hero title="MediaFest22" />

            <Homepage />  
            <AppLink />
            
            <hr className="star" />
            <Welcometext />
            <hr className="star" />

                    <section className="presenters">
                        <h2>Featured Presenters</h2><br />
                        <div className="row">
                            <div className="col-sm-12 keynotes">
                            <Presenter />
                            </div>
                            <div className="col-sm-12">
                            <Woodward />
                            </div>
                            <div className="text-center fellows_blurb">
                                <button  onClick={() => props
                                .updateState('speakers')}>
                                    <img 
                                    src="https://mediafest22.org/wp-content/uploads/2022/06/Fellows-Social-Card-2022-768x768.png" 
                                    alt="2022 Fellows of the Society" />
                                </button>
                            </div>
                        </div>
                       
                    </section>
            <hr className="star" />


            <section className="session_highlights">
            <h2>Session highlights</h2>
           
            <br /><br />

            <div className="alignfull session_section">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                }}
                >
            {(post? (
                post.map(item=>{

                    let title = item.title.rendered;
                    title = title.replace('&#038;','-')
                    title = title.replace("&#8211;", " - ");
                     title = title.replace("&#8217;", "'");
                    return (
                        <SwiperSlide key={item.id} className="highlight_row">
                            <h3>{title} </h3>
                            
                            <p className="presenter">
                                <span dangerouslySetInnerHTML={{__html: item.acf.presenter}}></span>
                            </p>
                            <img src={item.qubely_featured_image_url.large[0]} alt={title} />
                            
                           
                            
                           
                            <div dangerouslySetInnerHTML={{__html: item.content.rendered}}>
                            </div>
                           
                          
                        </SwiperSlide>
                        
                    );
                })
            ):<div></div>)}


            </Swiper>

                <div className="text-center">
                <button className="btn btn-primary btn-lg"  onClick={() => props
                    .updateState('allsessions')}>
                        View All Sessions
                </button>
                </div>

                <hr className="star" />
            </div>
            </section>

      
            <Featured />

            <hr className="star" />

                <h2>Pricing</h2>
            <Register />
            <hr className="star" />

            <Shop />
            
           

            <HelmetProvider>
                <Helmet>
                    <title>Home - MediaFest22</title>
                  
                </Helmet>

            </HelmetProvider>
           
           
        </div>
    )
}
