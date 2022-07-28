import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Home from './Home';
import Fellows from './Fellows';
import Travel from './Travel';
import Schedule from './Schedule';
import Covid from './Covid';
import Registration from './Registration';
import Presenters from './Presenters';

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
            presenters: Presenters
        }

        const Comp = componentLookup[this.state.page.toLowerCase()];

        
            return (
                <>
                <HeaderSpa navopen={this.state.navopen} page={this.state.page} updateState={this.handleUpdate} />
                <div className="wrapper">
                    <Comp updateState={this.handleUpdate} lookup={componentLookup} page={this.state.page} />
                </div>
                <ScrollToTop smooth />
                <Footer />
            </>
            );
        }
}

export default Single;