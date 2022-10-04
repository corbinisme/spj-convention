import React, {useState,useEffect} from "react";
import {
    Routes, 
    Route, 
    Link,
    useLocation,
    useNavigate,
    useParams,
    BrowserRouter,
  } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from './Home';
import Fellows from './Fellows';
import Travel from './Travel';
import Schedule from './Schedule';
import Covid from './Covid';
import Registration from './Registration';
import Presenters from './Presenters';
import Sessions from './Sessions';
import Exhibitors from "./Exhibitors";
import AllSessions from "./AllSessions";

import HeaderSpa from  "../components/HeaderSpa";
import Footer from  "../components/Footer";



class Single extends React.Component {
    //const [post, getPost] = useState([]);
    //const [page, setPage] = useState('Home');

    state = {
       page: this.props.page,
       navopen: false
    }

    


    handleUpdate = (newtext, isNav) => {
        this.setState({ page: newtext });

        if((newtext=="home" && this.state.navopen==true) || isNav==null){
            this.setState({ navopen: false })
        } else {
          
            this.setState({ navopen: !this.state.navopen })
        }
        
    }

    
    render(){

        const p = this.props.page;

        const componentLookup = {
            home: Home,
            fellows: Fellows,
            registration: Registration,
            covid: Covid,
            travel: Travel,
            schedule: Schedule,
            presenters: Presenters,
            sessions: Sessions,
            exhibitors: Exhibitors
        }

        const Comp = componentLookup[this.state.page.toLowerCase()];

        
            return (
                <div className="wrapper">
                    
                <HeaderSpa navopen={this.state.navopen} page={this.state.page} updateState={this.handleUpdate} />
                <div className="wrapper">
                    <Comp updateState={this.handleUpdate} lookup={componentLookup} page={this.state.page} />
                </div>
                <ScrollToTop smooth />
                <Footer />
            </div>
            );
        }
}

function Single2(props){

    const searchParam = window.location.search;
    let st = window.localStorage;
    let isForcedParam = st.getItem("forceUrl");
    let pageProp =(searchParam? searchParam.substring(searchParam.indexOf("=")+1, searchParam.length): "home");
    
    if(isForcedParam!=""|| isForcedParam==null){
        st.setItem("forceUrl", searchParam)
    }
    const [page, setPage] = useState((pageProp? pageProp: "home"));
    const [navopen, setNavopen] = useState();
    
    

    const handleUpdate = function(newtext, isNav)  {
        
        setPage(newtext)
        if((newtext=="home" && navopen==true) || isNav==null){
            setNavopen(false)
        } else {
            setNavopen(!navopen)
            
        }
        
    }

    const componentLookup = {
        home: Home,
        fellows: Fellows,
        registration: Registration,
        covid: Covid,
        travel: Travel,
        schedule: Schedule,
        presenters: Presenters,
        sessions: Sessions,
        exhibitors: Exhibitors,
        allsessions: AllSessions
    }

    const Comp = componentLookup[page.toLowerCase()];

    
        return (
            <>
            <HeaderSpa navopen={navopen} page={page} updateState={handleUpdate} />
            <div className="wrapper">
                <Comp updateState={handleUpdate} lookup={componentLookup} page={page} />
            </div>
            <ScrollToTop smooth />
            <Footer />
        </>
        );
}


export default Single2;